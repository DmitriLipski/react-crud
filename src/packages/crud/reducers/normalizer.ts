import type { Identifier, ResourceDataType } from "../types";

export function resourceDataNormalizer(
  currentStateData: Record<Identifier, ResourceDataType>,
  response: Array<ResourceDataType>
): { data: Record<Identifier, ResourceDataType>; ids: Array<Identifier> } {
  const responseById = response.reduce(
    (res, elem) => ({ ...res, [elem.id]: { ...elem } }),
    {}
  );
  const data = { ...currentStateData, ...responseById };

  return { data, ids: Object.keys(responseById).map((id) => Number(id)) };
}
