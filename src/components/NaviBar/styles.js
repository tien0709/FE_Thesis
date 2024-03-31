import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#fff',
      },

      buttonContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },

      button: {
        padding: 10,
      },
      logo: {
        paddingBottom: 10,
      },
      text:{
        fontSize: 16,
      }
 });