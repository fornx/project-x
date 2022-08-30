import { Button, StyleSheet, Text, View } from 'react-native';

export default function PageBScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={{marginTop:10}} >
          <Button style={styles.buttonStyle} title='Page B1' onPress={() => navigation.navigate('Page B1')}/>
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