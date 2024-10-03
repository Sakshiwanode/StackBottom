// src/screens/WelcomeScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const WelcomeScreen = () => {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    console.warn('hello');
    
    const timeout = setTimeout(() => {
      console.warn('Timeout executed');
      setCount((prevCount) => prevCount + 1); 
    },3000);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Our App!</Text>
      <Text style={styles.paragraph}>
        We are excited to have you here. Explore the app to find out more about our features.
      </Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button title="Update Counter" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#98c1d9',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  counter: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
