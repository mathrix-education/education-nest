import {AuthChecker, BuildSchemaOptions} from 'type-graphql';

export interface TypeGraphQLBuildSchemaOptions extends BuildSchemaOptions {
  authChecker: AuthChecker<any, any>;
}

// source: https://github.com/nestjs/graphql/issues/305#issuecomment-508687080
export const ScopeAuthChecker: AuthChecker<any> = ({root, args, context, info}, scopes) => {
  return scopes.some(scope => context.user.scopes.includes(scope));
};
