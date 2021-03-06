import { AxiosResponse } from "axios";

export type TGithubOauthRequestParams = {
  code: string;
  accept: string;
  client_id: string;
  client_secret: string;
};

export type TGithubUserRequestParams = {
  access_token: string;
};

// Response types
export type TGithubOauthResponseData = string;

export type TGithubUserResponseData = {
  // Required
  name: string;
  login: string;
  avatar_url: string;

  // Optional
  email?: string;
};

// Axios response types
export type TGithubOauthResponse = AxiosResponse<TGithubOauthResponseData>;

export type TGithubUserResponse = AxiosResponse<TGithubUserResponseData>;
