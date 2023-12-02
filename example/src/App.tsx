import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
  Box,
  VStack,
  HStack,
  ZStack,
  Spacer,
  // Split,
  // Float,
  // Overlay,
  // Tiles,
  // Separator,
} from '@hadnet/react-native-layouts';

export default function App() {
  return (
    <View style={styles.container}>
      <VStack devMode bleed center space={12}>
        <Box width={50} height={100} color="rgba(255,0,0,0.2)" />
        <Box width={50} height={80} color="rgba(0,255,0,0.3)" />
        <ZStack x="50%" y="50%" origin>
          <Box width={20} height={20} color="cyan" />
        </ZStack>
      </VStack>
      <HStack space={8}>
        <Box width={60} height={100} color="blue" />
        <Spacer p={4}>
          <Box width={50} height={80} color="violet" />
        </Spacer>
        <Spacer x={4} />
        <Box width={40} height={60} color="green" />
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
