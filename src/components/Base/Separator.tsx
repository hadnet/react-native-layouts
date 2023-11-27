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
    setSpaceUnit(horizontal ? 1 : height ?? '50%')};
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
  SeparatorProps & { textStyle?: TextStyle }
> = ({
  text,
  color,
  horizontal,
  textStyle,
  px = 0,
  py = 0,
  mx,
  my,
  ...props
}) => {
  const [textSize, setTextSize] = useState(() => 0);
  const xth = horizontal ? textSize : 0;
  const yth = !horizontal ? textSize : 0;

  return (
    <Wrapper
      horizontal={horizontal}
      px={spaceUnitToNum(px, xth)}
      py={spaceUnitToNum(py, yth)}
      mx={mx}
      my={my}
      {...props}
    >
      <Line color={color} horizontal={horizontal} />
      {text && (
        <Text
          style={textStyle}
          onLayout={({ nativeEvent }: LayoutChangeEvent) =>
            textSize === 0 &&
            setTextSize(() =>
              horizontal ? nativeEvent.layout.width : nativeEvent.layout.height
            )
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
