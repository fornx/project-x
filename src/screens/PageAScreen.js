import { Button, StyleSheet, Text, View } from 'react-native';

export default function PageAScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={{marginTop:10}} >
          <Button style={styles.buttonStyle} title='Page A1' onPress={() => navigation.navigate('Page A1')}/>
        </View>
        <View style={{marginTop:10}} >
          <Button style={styles.buttonStyle} title='Page A2' disabled/>
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    }
});