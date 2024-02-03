import React from 'react';
import { View } from 'react-native';
import { FlexBox } from '../Flex/Flex';
import type { VStackProps } from './VStack.types';

export function VStack({
  fluid,
  divider,
  children,
  space = 0,
  gap = 0,
  dividerColor = '#e1e1e1',
  dividerWidth = '100%',
  DividerComponent,
  ...props
}: VStackProps) {
  const len = React.Children.count(children) - 1;
  const Divider = DividerComponent || (
    <View
      style={{
        height: 1,
        width: dividerWidth,
        backgroundColor: dividerColor,
      }}
    />
  );

  return (
    <FlexBox
      n={fluid ? 1 : 'none'}
      hfull={props.hfull}
      wfull={props.wfull}
      bleed={props.bleed}
      z={props.z}
    >
      <FlexBox n={fluid ? 1 : 'none'} {...props}>
        {React.Children.map(children, (child, idx) => (
          <>
            {child}
            {idx !== len && (
              <View
                style={{
                  width: dividerWidth,
                  height: (idx !== len ? gap || space : 0) as number,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {divider && Divider}
              </View>
            )}
          </>
        ))}
      </FlexBox>
    </FlexBox>
  );
}
VStack.displayName = 'VStack';
