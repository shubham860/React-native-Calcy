import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'

class Calcy extends Component {
    render() {
        return (
            <View style={css.container}>
                <View style={css.display}></View>
                <View style={css.buttons}>
                    <View style={css.numbers}></View>
                    <View style={css.operations}></View>
                </View>
            </View>
        );
    }
}

const css = StyleSheet.create({
   container : {
       flex : 1,
   },

   display : {
       flex : 1,
       backgroundColor : 'white',
   },

    buttons : {
        flex : 2,
        backgroundColor: 'black',
        flexDirection : 'row'
    },

    numbers : {
       flex : 3,
        backgroundColor : 'orange'
   },

   operations : {
       flex : 1
   }


});

export default Calcy;
