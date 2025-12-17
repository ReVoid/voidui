
// The same type as Vue required.
// Unfortunately, they don't share it explicitly.
export type HTMLElementClass =
  | string
  | Record<string, boolean>
  | (string | Record<string, boolean>)[];

export interface IClassNames {
  class?: HTMLElementClass;
}
