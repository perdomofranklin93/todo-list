import * as GraphQL from "graphql-request";
import { ENVIRONMENT } from "../../environment";

/* Create a GraphQL client instance to send requests */
const client = new GraphQL.GraphQLClient(
  ENVIRONMENT.PROVIDERS.EIGHT_BASE.BASE_URL,
  {
    headers: {
      Authorization: `Bearer ${ENVIRONMENT.PROVIDERS.EIGHT_BASE.TOKEN}`,
    },
  }
);

export { client };
