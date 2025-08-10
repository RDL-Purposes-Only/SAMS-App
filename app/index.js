import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const windowH = Dimensions.get('window').height;
const windowW = Dimensions.get('window').width;


function App() {
  return (
      <View style={styles.container}>
	<View style={styles.boxed}>
        	<Text style={styles.sectionTitle}>
          	SAMS App Login Screen!
        	</Text>
        	<Text style={styles.sectionDescription}>
        	  Edit <Text style={styles.highlight}>App.js</Text> to change this screen.
	        </Text>
	</View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#120425',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  boxed: {
	//flex: 1,
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#ffffff',
	borderRadius: 20,
	height: windowH * 0.5,
	width: windowW * 0.75,
},
});

export default App;


