import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);
import Navigation from "./navigation/Navigation";
import { StatusBar } from "react-native";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

export function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Navigation />
    </>
  );
}

export default App;
