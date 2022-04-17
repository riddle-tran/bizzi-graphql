import { IUserParams, IUsersParams } from "./interfaces";

const user = async ({ id }: IUserParams) => {
  return {
    id: id,
    email: "a",
    userName: "a",
    avatarUrl: "a",
    provide: " TProvider;",
    displayName: "a",
  };
};

const users = async ({ limit }: IUsersParams) => {
  return limit;
};

export default {
  user,
  users,
};
