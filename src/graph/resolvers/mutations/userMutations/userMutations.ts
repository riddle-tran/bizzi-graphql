import { parse } from "querystring";

import {
  IUser,
  IAddUserParams,
  ICodeUserParams,
  IDeleteUserParams,
  IUpdateUserParams,
} from "entities/user";
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
import { generateAccessToken } from "authentications";
import { createUser, createOrUpdateUser } from "database/userModel/utils";

const addUser = async ({
  email,
  provide,
  userName,
  avatarUrl,
  displayName,
}: IAddUserParams) => {
  const user = await createUser({
    email,
    provide,
    userName,
    avatarUrl,
    displayName,
  });
  return {
    data: { ...user, id: user._id },
    ok: true,
    error: "",
  };
};

const updateUser = async ({
  email,
  provide,
  userName,
  avatarUrl,
  displayName,
}: IUpdateUserParams) => {
  return {
    data: { id: "id", email, provide, userName, avatarUrl, displayName },
    ok: true,
    error: "",
  };
};

const deleteUser = async ({ id }: IDeleteUserParams) => {
  return {
    data: { id },
    ok: true,
    error: "",
  };
};

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

  const user: IUser = {
    id: doc._id,
    email,
    userName,
    provide: "github",
    displayName: name,
    avatarUrl: avatar_url,
  };

  const token = generateAccessToken(user);

  return {
    data: { token, user: { ...user } },
    ok: true,
    error: "",
  };

  return token;
};

export default {
  signIn,
  addUser,
  updateUser,
  deleteUser,
};
