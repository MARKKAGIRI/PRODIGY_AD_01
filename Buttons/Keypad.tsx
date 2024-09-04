import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import {useState} from 'react'
import Button from './Buttons';

export default function Keypad(){
    /**here i am setting for changing values
     * since the method of input is first number, operation then 
     * second number and then result
     */
    const[FirstNumber, setFirstNumber] = useState("")
    const[SecondNumber, setSecondNumber] = useState("")
    const[Operation, setOperation] = useState("")
    const[Result, setResult] = useState<Number | null>(null)

    /**caters for number pressing */
    const handleNumberpress = (buttonValue: string) =>{
        if(FirstNumber.length < 10){
            setFirstNumber(FirstNumber + buttonValue);
        }
    }

    /**caters for operation press */
    const handleOperationpress = (buttonValue: string) =>{
        setOperation(buttonValue);
        setSecondNumber(FirstNumber);
        setFirstNumber("");
    }

    /**caters for clearing */
    const clear = () =>{
        setFirstNumber("")
        setSecondNumber("")
        setOperation("")
        setResult(null)
    }

    /**to obtain results for the calculation */
    const getResult = () =>{

        switch (Operation){
            case '+':
                clear();
                setResult(parseInt(SecondNumber) + parseInt(FirstNumber));
                break;
            case '-':
                clear();
                setResult(parseInt(SecondNumber) - parseInt(FirstNumber));
                break;
            case '/':
                clear();
                setResult(parseInt(SecondNumber) / parseInt(FirstNumber));
                break;
            case 'x':
                clear();
                setResult(parseInt(SecondNumber) * parseInt(FirstNumber));
                break;
            case '%': 
                clear;
                setResult((parseInt(SecondNumber)/100) * parseInt(FirstNumber))
            default:
                clear();
                setResult(0);
                break;
        }
    }

    const firstNumberDisplay = () =>{
        if(Result != null){
            return(<Text style={Result < 5 ? [Styles.screenFirstNumber, {color: 'grey'}] : [Styles.screenFirstNumber, {fontSize:50, color: 'grey'}] }>
                {Result.toString()}
            </Text>)
        }
        if(FirstNumber && FirstNumber.length < 6){
            return <Text style={Styles.screenFirstNumber}>{FirstNumber}</Text>
        }
        if(FirstNumber === ""){
            return <Text style={Styles.screenFirstNumber}>{"0"}</Text>
        }
        if(FirstNumber.length > 5 && FirstNumber.length < 8){
            return(
             <Text style={[Styles.screenFirstNumber, {fontSize:70}]}>{FirstNumber}</Text>
            )
        }
        if(FirstNumber.length > 7){
            return <Text style={[Styles.screenFirstNumber, {fontSize:50}]}>{FirstNumber}</Text>
        }
    }
    return(
        <>
        <View
            style={{
                height: 120,
                width: "90%",
                justifyContent: "flex-end",
                alignSelf: "center"
            }}
        >
           <Text style={Styles.screenSecondNumber}>{SecondNumber}</Text>
           <Text style={{color: 'purple', fontSize: 50, fontWeight:'500'}}>{Operation}</Text>
           {firstNumberDisplay()}
        </View>
        <View style={Styles.row}>
            <Button isGray title="AC" onpress={() => { clear; } } isBlue={false} />
            <Button isGray title="+/-" onpress={() => { handleOperationpress("+/-"); } } isBlue={false} />
            <Button isGray title="%" onpress={() => { handleOperationpress("%"); } } isBlue={false} />
            <Button isBlue title="/" onpress={() => { handleOperationpress("/"); } } isGray={false} />
        </View>
        <View style={Styles.row}>
            <Button title="7" onpress={() => { handleNumberpress("7"); } } isBlue={false} isGray={false} />
            <Button title="8" onpress={() => { handleNumberpress("8"); } } isBlue={false} isGray={false} />
            <Button title="9" onpress={() => { handleNumberpress("9"); } } isBlue={false} isGray={false} />
            <Button isBlue title="*" onpress={() => { handleOperationpress("*"); } } isGray={false} />
        </View>
        <View style={Styles.row}>
            <Button title="4" onpress={() => { handleNumberpress("4"); } } isBlue={false} isGray={false} />
            <Button title="5" onpress={() => { handleNumberpress("5"); } } isBlue={false} isGray={false} />
            <Button title="6" onpress={() => { handleNumberpress("6"); } } isBlue={false} isGray={false} />
            <Button isBlue title="-" onpress={() => { handleOperationpress("-"); } } isGray={false} />
        </View>
        <View style={Styles.row}>
            <Button title="1" onpress={() => { handleNumberpress("1"); } } isBlue={false} isGray={false} />
            <Button title="2" onpress={() => { handleNumberpress("2"); } } isBlue={false} isGray={false} />
            <Button title="3" onpress={() => { handleNumberpress("3"); } } isBlue={false} isGray={false} />
            <Button isBlue title="+" onpress={() => { handleOperationpress("+"); } } isGray={false} />
        </View>
        <View style={Styles.row}>
            <Button title="0" onpress={() => { handleNumberpress("0"); } } isBlue={false} isGray={false} />
            <Button title="." onpress={() => { handleOperationpress("."); } } isBlue={false} isGray={false} />
            <Button title="DEL" onpress={() => { setFirstNumber(FirstNumber.slice(0, -1)); } } isBlue={false} isGray={false}/>
            <Button isBlue title="=" onpress={() => { getResult(); } } isGray={false} />
        </View>
        </>
    )
}

export const Styles = StyleSheet.create({
    row:{
        maxWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    screenFirstNumber:{
        fontSize: 96,
        color: "gray",
        fontWeight: '200',
        alignSelf: "flex-end"
    },
    screenSecondNumber:{
        fontSize: 40,
        color: "gray",
        fontWeight: '200',
        alignSelf: "flex-end"
    }
});