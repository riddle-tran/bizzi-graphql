declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BIZZI_JWT_EXP: number;
      BIZZI_JWT_SECRET: string;
      BIZZI_PORT_SERVER: number;
      BIZZI_GRAPHQL_PATH: string;
      BIZZI_MONGOOSE_URL: string;
      BIZZI_GITHUB_ACCEPT: string;
      BIZZI_GRAPHQL_BOOLEAN: boolean;
      BIZZI_GITHUB_CLIENT_ID: string;
      BIZZI_GITHUB_CLIENT_SECRET: string;
    }
  }
}

export {};
