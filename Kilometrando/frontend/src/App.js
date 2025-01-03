import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addUser = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users', { name, email });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Add User" onPress={addUser} />
      
      <Text>Users:</Text>
      {users.map(user => (
        <View key={user.id}>
          <Text>{user.name} - {user.email}</Text>
        </View>
      ))}
    </View>
  );
}

// alo