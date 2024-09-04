import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Keypad from './Buttons/Keypad';
import{widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default function App() {
  return (
    <SafeAreaView style={Styles.container} >

        <View style={Styles.viewBottom}>
          <Keypad />
        </View>
    </SafeAreaView>
    
  );
}


export const  Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBottom:{
    position: 'relative',
    width: '100%',
    height: hp(45) ,
    bottom: 60,
    display: "flex"
  }
  
});