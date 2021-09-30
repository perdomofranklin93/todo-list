import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { ENVIRONMENT } from "../../environment";

// instantance apollo client
export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient<NormalizedCacheObject>(
  {
    headers: {
      authorization: `Bearer ${ENVIRONMENT.PROVIDERS.EIGHT_BASE.TOKEN}`,
      Cookie: ENVIRONMENT.PROVIDERS.EIGHT_BASE.TOKEN,
    },
    uri: ENVIRONMENT.PROVIDERS.EIGHT_BASE.BASE_URL,
    cache: new InMemoryCache(),
  }
);
