import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

class Calcy extends Component {
    render() {
        return (
            <View style={css.container}>
                <View style={css.display}>
                    <View style={css.calculation}>
                        <Text style={css.calculationString}>11*11</Text>
                    </View>
                    <View style={css.result}>
                        <Text style={css.resultString}>121</Text>
                    </View>
                </View>
                <View style={css.buttons}>
                    <View style={css.numbers}>
                        <View style={css.row}>
                            <Button title='0' onPress={this.handler} />
                            <Button title='0' onPress={this.handler}/>
                            <Button title='0' onPress={this.handler}/>
                        </View>
                        <View style={css.row}>
                            <Button title='0' onPress={this.handler}/>
                            <Button title='0' onPress={this.handler}/>
                            <Button title='0' onPress={this.handler}/>
                        </View>
                        <View style={css.row}>
                            <Button title='0' onPress={this.handler}/>
                            <Button title='0' onPress={this.handler}/>
                            <Button title='0' onPress={this.handler}/>
                        </View>
                        <View style={css.row}>
                            <Button title='0' onPress={this.handler}/>
                            <Button title='0' onPress={this.handler}/>
                            <Button title='0' onPress={this.handler}/>
                        </View>

                    </View>
                    <View style={css.operations}>
                        <Button title='0' onPress={this.handler}/>
                        <Button title='0' onPress={this.handler}/>
                        <Button title='0' onPress={this.handler}/>
                        <Button title='0' onPress={this.handler}/>
                    </View>
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

    calculation : {
      flex : 2,
      justifyContent : 'flex-end',
      alignItems:  'flex-end'
    },

    result : {
        flex : 1,
        justifyContent : 'center',
        alignItems:  'flex-end'
    },

    buttons : {
        flex : 2,
        backgroundColor: 'black',
        flexDirection : 'row',
        justifyContent: 'space-between'
    },

    numbers : {
       flex : 3,
        backgroundColor : 'orange',
   },

   operations : {
       flex : 1,
       justifyContent : 'space-around'
   },

   row : {
       flex : 1,
       flexDirection: 'row',
       justifyContent : 'space-around',
       alignItems : 'center',
   },

    calculationString : {
       fontSize : 56,
       fontWeight : "600"
    },

    resultString : {
       fontSize: 40
    }


});

export default Calcy;
