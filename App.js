import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
// import {v4 as uuidv4} from 'uuid';
// import uuid from 'react-native-uuid';
// import UUIDGenerator from 'react-native-uuid-generator';

const App = () => {
  const [items, setItems] = useState([
    {id: '123', text: 'Milk'},
    {id: '124', text: 'bread'},
    {id: '125', text: 'Eggs'},
    {id: '126', text: 'Juice'},
  ]);
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };
  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems((prevItems) => {
        return [{id: '127', text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
