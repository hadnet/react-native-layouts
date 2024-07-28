import React from 'react';
import { View, type ViewStyle, type StyleProp } from 'react-native';
import { FlexBox } from '../Flex/Flex';
import type { SplitProps } from './Split.types';

const ratios = {
  '1/2': [1, 1],
  '1/3': [1 / 3, 2 / 3],
  '1/4': [1 / 4, 3 / 4],
  '2/3': [2 / 3, 1 / 3],
  '3/4': [3 / 4, 1 / 4],
};

export function Split({
  children,
  ratio = '1/2',
  gap,
  row,
  auto,
  between,
  ...props
}: SplitProps): JSX.Element {
  if (Array.isArray(children)) children.length = 2;
  else throw new Error('children needs to be more than one');

  const r = Array.isArray(ratio) ? ratio : ratios[ratio];

  const betweenStyle = (idx: number) =>
    ({
      alignItems: idx ? 'flex-end' : 'flex-start',
    } as StyleProp<ViewStyle>);

  return (
    <View
      style={{
        gap,
        flex: row ? 0 : 1,
        flexDirection: row ? 'row' : 'column',
        width: auto ? 'auto' : '100%',
      }}
    >
      {React.Children.map(children, (child, idx) => (
        <FlexBox n={r[idx]} {...props} style={between ? betweenStyle(idx) : {}}>
          {child}
        </FlexBox>
      ))}
    </View>
  );
}
Split.displayName = 'Split';
