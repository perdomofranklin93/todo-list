/**
 * This file was generated using 8base CLI.
 *
 * To learn more about writing custom GraphQL resolver functions, visit
 * the 8base documentation at:
 *
 * https://docs.8base.com/8base-console/custom-functions/resolvers
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    completeTodo:
 *      ...
 *
 * Data that is sent to this function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * There are two ways to invoke this function locally:
 *
 *  (1) Explicit file mock file path using '-p' flag:
 *    8base invoke-local completeTodo -p src/resolvers/completeTodo/mocks/request.json
 *
 *  (2) Default mock file location using -m flag:
 *    8base invoke-local completeTodo -m request
 *
 *  Add new mocks to this function to test different input arguments. Mocks can easily be generated
 *  the following generator command:
 *    8base generate mock completeTodo -m [MOCK_FILE_NAME]
 */

import { FunctionContext, FunctionEvent, FunctionResult } from '8base-cli-types';
import gql from 'graphql-tag';


type ResolverResult = FunctionResult<{
  result: string,
}>;

export default async (
  event: FunctionEvent<{ completed: boolean }>,
  ctx: FunctionContext,
): Promise<any> => {
  return {
    data: {
      result: `Resolver recieved: ${event.data.completed}`,
    },
  };
};
