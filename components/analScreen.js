import { Text } from 'react-native';


export default function AnalysisScreen({ navigation, route }) {
    return <Text>This is {route.params.name}'s profile</Text>;
  };