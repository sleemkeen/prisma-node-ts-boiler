import { Context } from "../utils";
import { Query } from "./query";
import * as Mutant from "./Mutations";

const resolvers = {
  Query,
  Mutation: { ...Mutant }
};

export default resolvers;
