import qs from "query-string";
import axios, { AxiosInstance } from "axios";

import {
  TGithubOauthRequestParams,
  TGithubOauthResponse,
  TGithubUserRequestParams,
  TGithubUserResponse,
} from "./types";

const githubInstance: AxiosInstance = axios.create();

export const getGithubAccessTokenRequest = (
  params: TGithubOauthRequestParams
): Promise<TGithubOauthResponse> => {
  const url = qs.stringifyUrl({
    url: "login/oauth/access_token",
    query: params,
  });
  return axios.get(url, {
    baseURL: "https://github.com/",
  });
};

export const getGithubUserRequest = ({
  access_token,
}: TGithubUserRequestParams): Promise<TGithubUserResponse> => {
  const url = qs.stringifyUrl({
    url: "/user",
  });
  return githubInstance.get(url, {
    baseURL: "https://api.github.com",
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });
};
