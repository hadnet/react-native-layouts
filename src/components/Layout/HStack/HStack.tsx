import React from 'react';
import { FlexBox } from '../Flex/Flex';
import type { HStackProps } from './HStack.types';

export function HStack({
  children,
  fluid,
  fill,
  space = 0,
  ...props
}: HStackProps) {
  const len = React.Children.count(children) - 1;
  // const fluidStyle = fluid ? {height: '100%'} : {}
  const fillStyle = fill ? { height: '100%' } : {};

  return (
    <FlexBox n={fluid ? 1 : 'none'} row {...props}>
      {React.Children.map(children, (child, idx) =>
        React.cloneElement(child as JSX.Element, {
          marginRight: idx !== len ? space : 0,
          // flex: fluid ? 1 : 0,
          ...fillStyle,
        })
      )}
    </FlexBox>
  );
}
HStack.displayName = 'HStack';
