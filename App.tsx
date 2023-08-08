import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/Colors';
import Button from './src/components/Buttons';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#000' }]}>
        <StatusBar style="auto" />
        <Switch
          style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === "light" ? 'dark' : 'light')}
        />
        <Button isBlue title='9' onPress={() => { alert("Pressed 9") }}></Button>
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
