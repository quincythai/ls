// types/slate.d.ts or just slate.d.ts
import "slate";

declare module "slate" {
  interface BaseText {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    superscript?: boolean;
    subscript?: boolean;
  }
}
