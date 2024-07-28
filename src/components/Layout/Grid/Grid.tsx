import React from 'react';
import { View, StyleSheet } from 'react-native';
import { getRandomColor } from '../../utils';
import type { GridProps } from './Grid.types';

export const Grid: React.FC<GridProps> = ({
  space = 0,
  gap = 0,
  rowGap = 0,
  colGap = 0,
  empty = true,
  columns,
  fill,
  flex,
  fluid,
  justifyContent,
  alignItems,
  children,
  center,
  devMode,
  style,
}) => {
  const numberOfRows = Math.ceil(React.Children.count(children) / columns);
  const lastRowItemCount = React.Children.count(children) % columns;
  const shouldFillLastRow = empty && lastRowItemCount !== 0;

  const dev = devMode && {
    backgroundColor: getRandomColor(),
    borderColor: getRandomColor(),
    borderWidth: 1,
  };

  const position = center
    ? ({
        justifyContent: 'center',
        alignItems: 'center',
      } as const)
    : {
        justifyContent,
        alignItems,
      };

  const filled =
    (fill || fluid) && ({ height: `${100 / numberOfRows}%` } as const);

  const renderChildren = () => {
    const elements = React.Children.toArray(children);

    if (shouldFillLastRow) {
      for (let i = 0; i < columns - lastRowItemCount; i++) {
        elements.push(
          <View
            key={`dummy-${i}`}
            style={{
              flex: 1,
              marginHorizontal: (rowGap || space || gap) / 2,
              marginVertical: (colGap || space || gap) / 2,
            }}
          />
        );
      }
    }

    return elements.map((child, index) => (
      <View
        key={index}
        style={{
          flex: flex || fluid ? 1 : 0,
          marginHorizontal: (rowGap || space || gap) / 2,
          marginVertical: (colGap || space || gap) / 2,
          ...position,
          ...dev,
        }}
      >
        {child}
      </View>
    ));
  };

  return (
    <View
      style={[
        styles.container,
        {
          marginHorizontal: -(rowGap || space || gap) / 2,
          marginVertical: -(colGap || space || gap) / 2,
        },
        style,
        (fill || fluid) && { flex: 1 },
      ]}
    >
      {new Array(numberOfRows).fill(null).map((_, rowIndex) => (
        <View key={rowIndex} style={[styles.row, filled]}>
          {renderChildren().slice(rowIndex * columns, (rowIndex + 1) * columns)}
        </View>
      ))}
    </View>
  );
};
Grid.displayName = 'Grid';

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
});
