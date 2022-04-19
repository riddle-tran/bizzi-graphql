import userMutations from "./userMutations";

import productMutations from "./productMutations";

import cartMutations from "./cartMutations";

export default {
  ...userMutations,
  ...cartMutations,
  ...productMutations,
};
