import userQueries from "./userQueries";

const pong = async () => {
  return "pong";
};

export default {
  pong,
  ...userQueries,
};
