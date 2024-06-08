import * as graphql from "@nestjs/graphql";
import { ResourceResolverBase } from "./base/resource.resolver.base";
import { Resource } from "./base/Resource";
import { ResourceService } from "./resource.service";

@graphql.Resolver(() => Resource)
export class ResourceResolver extends ResourceResolverBase {
  constructor(protected readonly service: ResourceService) {
    super(service);
  }
}
