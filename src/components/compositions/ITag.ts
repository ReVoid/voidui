type TagName = keyof HTMLElementTagNameMap;

// TODO: Implement tag selection with strong types.
export interface ITag<T extends TagName> {
  tag: T;
  props: Partial<HTMLElementTagNameMap[T]>;
}
