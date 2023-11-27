import React, { useState } from 'react';
import { Float } from '../Float/Float';
import type { FloatProps } from '../Float/Float.types';
import type { ZStackProps } from './ZStack.types';
import type { LayoutChangeEvent } from 'react-native';

export const ZStack = ({
  children,
  reversed,
  origin,
  ...props
}: ZStackProps & Omit<FloatProps, 'originSize'>) => {
  const [size, setSize] = useState<[number, number]>();
  const len = React.Children.count(children);
  const onLayout = ({ nativeEvent }: LayoutChangeEvent) =>
    origin && setSize([nativeEvent.layout.width, nativeEvent.layout.height]);

  if (len === 0) return null;

  if (len === 1)
    return (
      <Float {...props} originSize={size} onLayout={onLayout}>
        {children}
      </Float>
    );

  return (
    <>
      {React.Children.map(children, (child, idx) => {
        const zIndex = reversed ? len - idx - 1 : idx;
        if (
          React.isValidElement(child) &&
          // @ts-ignore
          child.type?.displayName === 'Float'
        ) {
          return React.cloneElement(child as JSX.Element, {
            z: child.props.z == null ? zIndex : child.props.z,
          });
        }
        return React.cloneElement(child as JSX.Element, {
          zIndex,
          position: 'absolute',
        });
      })}
    </>
  );
};
ZStack.displayName = 'ZStack';
