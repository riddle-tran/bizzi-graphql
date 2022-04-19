import productQueries from "./productQueries";

import cartQueries from "./cartQueries";

const pong = async () => {
  return "pong";
};

export default {
  pong,
  ...cartQueries,
  ...productQueries,
};
