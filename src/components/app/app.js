import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export function App(props) {
  const { onLayout } = props;

  return (
    <View onLayout={onLayout} style={styles.container}>
      <Text>Open up app.js to start working on your app!</Text>
    </View>
  );
}
