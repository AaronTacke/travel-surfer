import { Text } from 'react-native';

// Will later show the connection analysis of a route
export default function AnalysisScreen({ navigation, route }) {
    return <Text>Route from {route.params.start} to {route.params.end}.</Text>;
  };