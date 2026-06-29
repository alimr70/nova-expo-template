import { colorType } from "@/constants/Colors";
import { iconsList } from "./list";

export interface IconComponentProps {
  name: keyof typeof iconsList;
  size: number;
  color: colorType;
  direction?: "inherit" | "ltr" | "rtl";
  rotateX?: number;
  rotateY?: number;
}

export type IconProps = Partial<IconComponentProps>;
