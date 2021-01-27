import type { Identifier, ResourceDataType } from "../types";

type ResourceNormalizerDataReturnType = {
  data: Record<Identifier, ResourceDataType>;
  ids: Array<Identifier>;
};

export function getListResourceDataNormalizer(
  currentStateData: Record<Identifier, ResourceDataType>,
  response: Array<ResourceDataType>
): ResourceNormalizerDataReturnType {
  const responseById = response.reduce(
    (res, elem) => ({ ...res, [elem.id]: { ...elem } }),
    {}
  );
  const data = { ...currentStateData, ...responseById };

  return { data, ids: Object.keys(responseById).map((id) => Number(id)) };
}

export function getOneResourceDataNormalizer(
  currentResourceData: Record<Identifier, ResourceDataType>,
  currentResourceIds: Array<Identifier>,
  response: ResourceDataType
): ResourceNormalizerDataReturnType {
  const data = { ...currentResourceData, [response.id]: { ...response } };
  const ids = currentResourceIds.includes(response.id)
    ? [...currentResourceIds]
    : [...currentResourceIds, response.id];

  return { data, ids: ids.sort() };
}
