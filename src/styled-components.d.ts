import "styled-components";
import type { DefaultNDSThemeType } from "@nulogy/components";

declare module "styled-components" {
  export interface DefaultTheme extends DefaultNDSThemeType {}
}
