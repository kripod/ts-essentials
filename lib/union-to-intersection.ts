/** Convert union type to intersection #darkmagic */
export type UnionToIntersection<Union> = (Union extends any ? (arg: Union) => void : never) extends (
  arg: infer Intersection,
) => void
  ? Intersection
  : never;
