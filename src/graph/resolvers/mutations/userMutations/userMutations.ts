import { parse } from "querystring";

import {
  BIZZI_GITHUB_ACCEPT,
  BIZZI_GITHUB_CLIENT_ID,
  BIZZI_GITHUB_CLIENT_SECRET,
} from "configs";
import {
  getGithubUserRequest,
  TGithubOauthRequestParams,
  getGithubAccessTokenRequest,
} from "axios/github";
import {
  updateUser,
  removeTokenById,
  createOrUpdateUser,
} from "database/userModel/utils";
import { IContextGraphql } from "graph/interfaces";
import { generateAccessToken } from "authentications";
import { IUser, ICodeUserParams } from "entities/user";

const signIn = async ({ code }: ICodeUserParams) => {
  const params: TGithubOauthRequestParams = {
    code: code,
    accept: BIZZI_GITHUB_ACCEPT,
    client_id: BIZZI_GITHUB_CLIENT_ID,
    client_secret: BIZZI_GITHUB_CLIENT_SECRET,
  };

  const { data } = await getGithubAccessTokenRequest(params);
  const { access_token } = parse(data);

  const {
    data: { name, email, avatar_url, login: userName },
  } = await getGithubUserRequest({
    access_token: access_token as string,
  });

  const doc = await createOrUpdateUser({
    email,
    userName,
    provide: "github",
    displayName: name,
    avatarUrl: avatar_url,
  });

  if (!doc) {
    throw Error("Something went wrong ");
  }

  const id = doc._id;
  const role = doc.role || "user";
  const user: IUser = {
    id,
    email,
    userName,
    provide: "github",
    displayName: name,
    avatarUrl: avatar_url,
  };

  const token = generateAccessToken(user);

  await updateUser(id, { token });

  return {
    data: { token, role, user: { ...user } },
    ok: true,
    error: "",
  };
};

const signOut = async (
  _: unknown,
  { request, authentication }: IContextGraphql
) => {
  const user = await authentication(request);

  if (!user || !user.id)
    return {
      ok: false,
      error: "",
    };

  await removeTokenById(user.id);

  return {
    ok: true,
    error: "",
  };
};

export default {
  signIn,
  signOut,
};
