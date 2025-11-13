import { globalStyles } from '@/styles/global-styles';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const RootLayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Text>Header</Text>
      <Slot />
      <StatusBar style='light' />
      <Text>Footer</Text>
    </View>
  )
}

export default RootLayout

