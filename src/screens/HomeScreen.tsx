// src/screens/HomeScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';



type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    pincode: '',
    city: ''
  });

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, mobile, pincode, city } = formData;
    if (firstName && lastName && email && mobile && pincode && city) {
      navigation.navigate('Result', { formData });
    } else {
      Alert.alert('Error', 'Please fill out all fields before submitting.');
    }
  };

  const handleRefresh = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      pincode: '',
      city: '',
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Information</Text>

      <Text style={styles.label}>First Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(value) => handleChange('firstName', value)}
      />

      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(value) => handleChange('lastName', value)}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
        keyboardType="email-address"
      />


      <Text style={styles.label}>Mobile:</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={formData.mobile}
        onChangeText={(value) => handleChange('mobile', value)}
        keyboardType="phone-pad"
        maxLength={10}
      />

      <Text style={styles.label}>PinCode:</Text>
      <TextInput
        style={styles.input}
        placeholder="Pincode"
        value={formData.pincode}
        onChangeText={(value) => handleChange('pincode', value)}
        keyboardType="numeric"
        maxLength={6}
      />

      <Text style={styles.label}>City:</Text>
      <TextInput
        style={styles.input}
        placeholder="City"
        value={formData.city}
        onChangeText={(value) => handleChange('city', value)}
      />
      <View style={styles.buttonRow}>
        <Button title="Refresh" onPress={handleRefresh} color="gray" />
        <Button title="Submit" onPress={handleSubmit} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#98c1d9'
  },
  label: {
    fontSize: 18,
    marginBottom: 1,
    color: 'black',
  },
  title: {
    fontSize: 30,
    marginBottom: 15,
    textAlign: 'center',
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 5,
    marginBottom: 6,
    borderRadius: 5,
    color: 'black'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,

  },
});

export default HomeScreen;
