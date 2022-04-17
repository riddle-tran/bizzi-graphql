export const BIZZI_GITHUB_CLIENT_ID: string =
  process.env.BIZZI_GITHUB_CLIENT_ID;

export const BIZZI_GRAPHQL_BOOLEAN: boolean =
  process.env.BIZZI_GRAPHQL_BOOLEAN || false;

export const BIZZI_GRAPHQL_PATH: string =
  process.env.BIZZI_GRAPHQL_PATH || "/graphql";

export const BIZZI_GITHUB_CLIENT_SECRET: string =
  process.env.BIZZI_GITHUB_CLIENT_SECRET;

export const BIZZI_MONGOOSE_URL: string = process.env.BIZZI_MONGOOSE_URL;

export const BIZZI_GITHUB_ACCEPT: string = process.env.BIZZI_GITHUB_ACCEPT;

export const BIZZI_JWT_SECRET: string = process.env.BIZZI_JWT_SECRET || "";

export const BIZZI_JWT_EXP: number =
  Number(process.env.BIZZI_JWT_EXP) || 86400000;

export const BIZZI_PORT_SERVER: number = process.env.BIZZI_PORT_SERVER || 4000;
