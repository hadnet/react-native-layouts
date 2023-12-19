export type SpaceUnit = `${number}%` | `${number}px` | number;

export type Zindex = number | 'front' | 'back';
export type Space = 'padding' | 'margin';
export type Side = 'left' | 'right' | 'top' | 'bottom';
export type SpacesOptions =
  | `${Space}-${Side}`
  | Space
  | 'width'
  | 'height'
  | 'transform';

export type PaddingProps = {
  p: SpaceUnit;
  pl: SpaceUnit;
  pr: SpaceUnit;
  pt: SpaceUnit;
  pb: SpaceUnit;
  px: SpaceUnit;
  py: SpaceUnit;
};

export type MarginProps = {
  m: SpaceUnit;
  ml: SpaceUnit;
  mr: SpaceUnit;
  mt: SpaceUnit;
  mb: SpaceUnit;
  mx: SpaceUnit;
  my: SpaceUnit;
};

export type Positions =
  | 'left'
  | 'top'
  | 'right'
  | 'bottom'
  | 'middle'
  | 'center'
  | 'around'
  | 'between'
  | 'evenly'
  | 'stretch';

type AlignX = 'left' | 'right' | 'center';

type AlignY = 'top' | 'bottom' | 'center';

export type Alignment = `${AlignX}-${AlignY}`;

export type FlexPositionsProps = Partial<
  {
    align: Alignment;
    alignTop: boolean;
    alignBottom: boolean;
    middle: boolean;
    center: boolean;
    alignLeft: boolean;
    alignRight: boolean;
    evenly: boolean;
    around: boolean;
    between: boolean;
    reverse?: boolean;
    fluid?: boolean;
  } & PaddingProps &
    MarginProps
>;

export type Props = {
  flex?: 'none' | number;
  row?: boolean;
  reverse?: boolean;
  column?: boolean;
  justify: Exclude<Positions, 'stretch'>;
  align: Exclude<Positions, 'evenly' | 'around' | 'between'>;
} & PaddingProps &
  MarginProps;

export type BoxProps = {
  fill?: boolean;
  row?: boolean;
  color?: string;
  radius?: number | 'full';
  bleed?: boolean;
  border?: `${number}px ${string} ${string}`;
  width?: SpaceUnit | 'auto';
  height?: SpaceUnit | 'auto';
} & FlexPositionsProps;

export type SeparatorProps = {
  text?: string | React.ReactElement;
  horizontal?: boolean;
  vertical?: boolean;
  color?: string;
  width?: SpaceUnit | 'auto';
  height?: SpaceUnit | 'auto';
} & Partial<PaddingProps & MarginProps>;

export type OverlayProps = {
  color?: string;
  opacity?: number;
  dark?: boolean;
  darkColor?: string;
  children?: React.ReactNode;
  center?: boolean;
};
