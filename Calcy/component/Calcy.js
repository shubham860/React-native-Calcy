import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

class Calcy extends Component {
    constructor() {
        super();
        this.state = {
            calculationString : '',
            resultString : 0
        };
    }

    handlerReset = () => {
            this.setState({
                calculationString : '',
                resultString : 0,
            });
    };

    handleCalculations = () => {
        this.setState({
            resultString : eval(this.state.calculationString),
        })
    }

    handlerResult = (text) => {
        if(text == '='){
            return this.handleCalculations();
        }
        else if(text=='AC'){
             return this.handlerReset();
        }
        else{
            this.setState({
                calculationString : this.state.calculationString + text,
            });
        }
    };

    render() {

        let rows = [];
        let nums = [['AC','^','%'],[7,8,9],[4,5,6],[1,2,3],['.',0,'=']];
        let operator = ['del','/','*','-','+'];

        for(let i=0; i<5; i++){
            let row = [];
            for(let j=0; j<3; j++){
                if(nums[i][j]=='=' || nums[i][j]=='%' || nums[i][j]=='^' || nums[i][j]=='AC'){
                    row.push(<TouchableOpacity onPress={()=>this.handlerResult(nums[i][j])} style={css.btn} >
                        <Text style={[css.btnText,css.operatorColor]}>{nums[i][j]}</Text>
                    </TouchableOpacity>);
                }
                else{
                    row.push(<TouchableOpacity onPress={()=>this.handlerResult(nums[i][j])} style={css.btn} >
                        <Text style={css.btnText}>{nums[i][j]}</Text>
                    </TouchableOpacity>);
                }
            }
            rows.push(<View style={css.row}>{row}</View>);
        }

        return (
            <View style={css.container}>

                <View style={css.display}>

                    <View style={css.calculation}>
                        <Text style={css.calculationString}>{this.state.calculationString}</Text>
                    </View>

                    <View style={css.result}>
                        <Text style={css.resultString}>{this.state.resultString}</Text>
                    </View>

                </View>

                <View style={css.buttons}>

                    <View style={css.numbers}>
                        {rows}
                    </View>

                    <View style={css.operations}>
                        {
                            operator.map(btn => {
                                return <TouchableOpacity onPress={()=>this.handlerResult(btn)} style={css.btn} >
                                    <Text style={[css.btnText,css.operatorColor]}>{btn}</Text>
                                </TouchableOpacity>;
                            })
                        }
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
       flex : 2,
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
        backgroundColor : 'black',
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
       fontSize : 50,
       fontWeight : "600",
        marginRight : 25
    },

    resultString : {
       fontSize: 40,
        marginRight : 25
    },

    btn : {
       flex : 1,
       justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'stretch'
    },

    btnText : {
       fontSize : 28,
        fontWeight : '600',
        color : 'white'
    },

    operatorColor : {
       color : '#f26602',
    }


});

export default Calcy;
