/ custom-button.js

import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


export const CustomButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#2AC062',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },

    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
});




// - Example of using - your-screen.js

import React from 'react';
import { View } from 'react-native';
import { CustomButton } from './custom-button.js';

export const MyScreen = () => (
    <View>
        <UIButton
            title="Open alert!"
            onPress={() => Alert.alert(`Why you opened me? Go away, it's mine!`)}
            style={{ /* some styles for button */ }}
            textStyle={{ /* styles for button title */ }}
        />
    </View>
);