// src/screens/ResultScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  Result: {
    formData: {
      firstName: string;
      lastName: string;
      email: string;
      mobile: string;
      pincode: string;
      city: string;
    };
  };
};

const ResultScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Result'>>();
  const { formData } = route.params;

  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Here is your information</Text>
      <View style={styles.card}>
      <Text style={styles.info}>First Name: {formData.firstName}</Text>
      <Text style={styles.info}>Last Name: {formData.lastName}</Text>
      <Text style={styles.info}>Email: {formData.email}</Text>
      <Text style={styles.info}>Mobile: {formData.mobile}</Text>
      <Text style={styles.info}>Pincode: {formData.pincode}</Text>
      <Text style={styles.info}>City: {formData.city}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
      backgroundColor:'#98c1d9'
    

  },

  card:{
    borderWidth:2,
    borderColor:'black',
    borderRadius:5,
    backgroundColor:'#fff',
    
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color:'black'
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
   
    color:'black'
   
  },
});

export default ResultScreen;
