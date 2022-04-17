import "dotenv/config";
import cors from "cors";
import { graphqlHTTP, OptionsData } from "express-graphql";
import express, { Request, Response } from "express";

import database from "database";
import { schemas } from "graph";
import resolvers from "graph/resolvers";
import { verifyAuth } from "authentications";
import { BIZZI_GRAPHQL_BOOLEAN } from "configs";
import { IContextGraphql } from "graph/interfaces";

//express initialization
const app = express();
const PORT = process.env.PORT_SERVER || 4000;

const graphqlOption = (request: Request, response: Response): OptionsData => ({
  schema: schemas,
  rootValue: resolvers,
  graphiql: BIZZI_GRAPHQL_BOOLEAN,
  context: {
    request,
    response,
    authentication: verifyAuth,
  } as IContextGraphql,
});

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP((request, response) => {
    return graphqlOption(request as Request, response as Response);
  })
);

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

database.on("error", (e) => {
  console.error("Error while connecting to DB", e);
  process.exit(1);
});

database.on("connected", () => {
  console.error("Connected to DB");
  app.listen(PORT, () => {
    console.log(`Graphql server now up at port ${PORT}`);
  });
});
