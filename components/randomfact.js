import { Image, View, StyleSheet } from 'react-native';

// List of facts
const facts_list = [require('../assets/funfact.png')]

// Chooses a random item from the list of facts
function choose_random_fact() {
    const length = facts_list.length;
    const index = Math.floor(Math.random() * length);
    return facts_list[index]
}

// Shows random facts (mockup using images)
export default function RandomFact() {
    return (
        <View style={styles.factView}>
        <Image style={styles.randomFact} source={choose_random_fact()} />
        </View>
    );
}

const styles = StyleSheet.create({
    factView: {
        paddingTop: 30,
        width: '100%',
        alignItems: 'center',
    },
    randomFact: {
        width: 320,
        height: 200,
    },
});