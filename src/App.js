import * as React from 'react'
import {Image} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'

import HomeScreen from './Home'
import DetalheScreen from './PokemonDetalhe'

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 95, height: 50 }}
      source={{uri:'https://assets.pokemon.com/assets/cms2-pt-br/img/misc/gus/buttons/logo-pokemon-79x45.png'}}/>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerTintColor: 'white', headerStyle: {
            backgroundColor: '#8BD674'},headerTitleStyle: {fontWeight: 'bold'}, headerTitle: (props) => <LogoTitle {...props} />
          }} />
        <Stack.Screen name="Detalhes" component={DetalheScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}