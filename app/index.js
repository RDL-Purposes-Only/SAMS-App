import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';

const windowH = Dimensions.get('window').height;
const windowW = Dimensions.get('window').width;

export default function App() {
  const router = useRouter(); // ✅ moved inside component

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handler = () => {
    router.push('/profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxed}>
        <Text style={styles.sectionTitle}>SAMS App Login Screen!</Text>

        <TextInput
          style={styles.inputs}
          onChangeText={setEmail}
          value={email}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.inputs}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.buttons} onPress={handler}>
          <Text style={styles.bt_sty}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.sectionDescription}>
          Edit <Text style={styles.highlight}>App.js</Text> to change this screen.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#023009' },
  inputs: {
    height: windowH * 0.05,
    width: windowW * 0.7,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 20,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#079D68',
    width: windowW * 0.7,
    height: windowH * 0.05,
    borderRadius: 20,
  },
  bt_sty: { textAlign: 'center', color: '#fff', fontWeight: '600' },
  sectionTitle: { fontSize: 24, fontWeight: '600' },
  sectionDescription: { marginTop: 8, fontSize: 18, fontWeight: '400', textAlign: 'center' },
  highlight: { fontWeight: '700' },
  boxed: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    height: windowH * 0.5,
    width: windowW * 0.75,
    padding: 20,
  },
});
