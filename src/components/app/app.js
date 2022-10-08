import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

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
    <View style={styles.container} onLayout={onLayout}>
      <Text>Open up app.js to start working on your app!</Text>
    </View>
  );
}

App.propTypes = {
  onLayout: PropTypes.func,
};

App.defaultProps = {
  onLayout: undefined,
};
