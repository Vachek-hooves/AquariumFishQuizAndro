import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  GameScreen,
  GreatingScreen,
  MainScreen,
  PlayQuizScreen,
  PlayScreen,
  RulesScreen,
  UserScreen,
} from './screen';
import {AquaProvider} from './store/aqua_context';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AquaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="GreatingsScreen" component={GreatingScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="PlayScreen" component={PlayScreen} />
          <Stack.Screen name="PlayQuizScreen" component={PlayQuizScreen} />
          <Stack.Screen name="UserScreen" component={UserScreen} />
          <Stack.Screen name="RulesScreen" component={RulesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AquaProvider>
  );
}

export default App;
