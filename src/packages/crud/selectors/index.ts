import type { ResourceState, State } from "../types";

export function getResource<T>(
  state: State,
  resource: string
): ResourceState<T> {
  return state.resources[resource];
}
