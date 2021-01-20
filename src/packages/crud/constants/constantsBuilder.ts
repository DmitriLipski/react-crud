type AsyncActions = {
  init: string;
  loading: string;
  success: string;
  failure: string;
};

export function createActionTypes(baseActionType: string): AsyncActions {
  //TODO: Remove
  return {
    init: baseActionType,
    loading: `${baseActionType}_LOADING`,
    success: `${baseActionType}_SUCCESS`,
    failure: `${baseActionType}_FAILURE`,
  };
}
