import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { styles } = useStyle(isDarkMode);

  const backgroundStyle = isDarkMode ? Colors.darker : Colors.lighter;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle}
      />
      <Text style={styles.text}>Hello World!</Text>
    </SafeAreaView>
  );
}
const useStyle = (isDarkMode: boolean) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: isDarkMode ? Colors.white : Colors.black,
      fontSize: 16,
    },
  });

  return { styles };
};

export { App };
