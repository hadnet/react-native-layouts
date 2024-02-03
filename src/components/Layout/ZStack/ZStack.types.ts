// import type { FloatProps } from '../Float/Float.types';
import type { Zindex } from '../../types';
import type { FlexBoxProps } from '../Flex/Flex.types';
import type { CoordinateProps, PositionProps } from '../Float/Float.types';

export type FloatProps = (PositionProps | CoordinateProps) & {
  z?: Zindex;
  reversed?: boolean;
  origin?: boolean;
  fill?: boolean;
} & Pick<FlexBoxProps, 'bleed' | 'wfull' | 'hfull'>;

export type ZStackProps = React.PropsWithChildren<FloatProps>;
