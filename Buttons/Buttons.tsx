import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


interface ButtonProps {
    onpress: () => void;
    title : string;
    isBlue: boolean;
    isGray: boolean;
}

export default function Button({title, onpress, isBlue, isGray} : ButtonProps) {
    return(
        <TouchableOpacity 
            style={
                isBlue
                ?Styles.btnBlue
                :isGray
                ?Styles.btnGray
                :Styles.btnWhite
            }
            onPress={onpress}>
                <Text style={Styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export const  Styles = StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: "#89CFF0",
        justifyContent: "center",
        alignItems: "center",
        
    },
    btnGray:{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 2

    },
    btnText:{
        fontSize: 30
    },
    btnWhite:{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 2
    }

});

