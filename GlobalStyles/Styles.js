import {StyleSheet} from 'react-native'
import{widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


export const  Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewBottom:{
      position: 'absolute',
      borderWidth: 1,
      width: '100%',
      height: hp(40) ,
      bottom: 60
    }
});

