import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../actions";
import { getResource } from "../selectors";
import type {
  Identifier,
  ResourceErrorType,
  ResourceState,
  State,
} from "../types";

type UseListControllerReturnType<T> = {
  data: Record<Identifier, T>;
  ids: Array<Identifier>;
  loading: boolean;
  loaded: boolean;
  error: ResourceErrorType;
};

export function useListController<T>(
  resource: string
): UseListControllerReturnType<T> {
  const dispatch = useDispatch();
  const { loading, loaded, error, data, ids } = useSelector<
    State,
    ResourceState<T>
  >((state) => getResource(state, resource));

  useEffect(() => {
    dispatch(getList("users"));
  }, []);

  return { data, ids, loading, loaded, error };
}
