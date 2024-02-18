import React, { useState } from 'react';
import styled from 'styled-components/native';
import { spacing, spaceUnitToNum, setSpaceUnit } from '../utils';
import type { SeparatorProps } from '../types/index';
import type { LayoutChangeEvent } from 'react-native';
import type { TextStyle } from 'react-native';

const Line = styled.View<SeparatorProps>`
  width: ${({ horizontal, width }) =>
    setSpaceUnit(horizontal ? width ?? '50%' : 1)};
  height: ${({ horizontal, height }) =>
    setSpaceUnit(horizontal ? 0.3 : height ?? '50%')};
  background-color: ${({ color = '#232323' }) => color};
`;

const Wrapper = styled.View<SeparatorProps>`
  width: ${({ /*horizontal,*/ width }) =>
    setSpaceUnit(/*horizontal ?*/ width ?? '100%' /*: 'auto'*/)};
  height: ${({ /*horizontal, */ height }) =>
    setSpaceUnit(/*horizontal ? 'auto' : */ height ?? '100%')};
  ${spacing};
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  text-transform: uppercase;
  text-align: center;
`;

export const Separator: React.FC<
  SeparatorProps & { textStyle?: TextStyle; gap?: number }
> = ({
  text,
  color,
  horizontal,
  textStyle = { fontSize: 14 },
  gap = 0,
  px = 0,
  py = 0,
  mx,
  my,
  ...props
}) => {
  const [textSize, setTextSize] = useState(() => ({ w: 0, h: 0 }));
  const xth = horizontal ? textSize.w : 0;
  const yth = !horizontal ? textSize.h : 0;
  const paddingValue = horizontal
    ? { paddingHorizontal: gap }
    : { paddingVertical: gap };

  return (
    <Wrapper
      horizontal={horizontal}
      px={spaceUnitToNum(px, xth)}
      py={spaceUnitToNum(py, yth)}
      mx={mx}
      my={my}
      height={horizontal ? textStyle.fontSize ?? 14 : 'auto'}
      {...props}
    >
      <Line color={color} horizontal={horizontal} />
      {text && (
        <Text
          style={[textStyle, gap ? paddingValue : {}]}
          onLayout={({ nativeEvent }: LayoutChangeEvent) =>
            textSize.w === 0 &&
            textSize.h === 0 &&
            setTextSize(() => ({
              w: nativeEvent.layout.width,
              h: nativeEvent.layout.height,
            }))
          }
        >
          {text}
        </Text>
      )}
      <Line color={color} horizontal={horizontal} />
    </Wrapper>
  );
};
Separator.displayName = 'Separator';
