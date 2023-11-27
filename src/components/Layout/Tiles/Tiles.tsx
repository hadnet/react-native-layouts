import React from 'react';
import { View, StyleSheet } from 'react-native';
import { getRandomColor } from '../../utils';
import type { TilesProps } from './Tiles.types';

export const Tiles: React.FC<TilesProps> = ({
  space,
  columns,
  empty,
  fill,
  justifyContent,
  alignItems,
  children,
  centered,
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

  const position = centered
    ? ({
        justifyContent: 'center',
        alignItems: 'center',
      } as const)
    : {
        justifyContent,
        alignItems,
      };

  const filled = fill && ({ height: `${100 / numberOfRows}%` } as const);

  const renderChildren = () => {
    const elements = React.Children.toArray(children);

    if (shouldFillLastRow) {
      for (let i = 0; i < columns - lastRowItemCount; i++) {
        elements.push(
          <View key={`dummy-${i}`} style={{ flex: 1, margin: space / 2 }} />
        );
      }
    }

    return elements.map((child, index) => (
      <View
        key={index}
        style={{
          flex: 1,
          margin: space / 2,
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
        { margin: -space / 2 },
        style,
        fill && { flex: 1 },
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
Tiles.displayName = 'Tiles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
});
