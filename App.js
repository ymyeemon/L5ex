import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList } from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  opacityStyle: {
  borderWidth: 1,
  marginLeft: 10,
  marginRight: 10,
  }
});

const App = () => {
  const datasource = [ 
    {data:[
    {key: 'a'},
    {key: 'e'},
    {key: 'i'},
    {key: 'o'},
    {key: 'u'},
    ],
    title:"Vowels", backgroundColor: 'yellow'},

    {data:[
    {key: 'b'},
    {key: 'c'},
    {key: 'd'},
    {key: 'f'},
    {key: 'g'},
    {key: 'h'},
    {key: 'j'},
    {key: 'k'},
    {key: 'l'},
    {key: 'm'},
    {key: 'n'},
    {key: 'p'},
    {key: 'q'},
    ],
    title:"Consonants", backgroundColor: 'skyblue'},
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.opacityStyle}>
      <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <StatusBar hidden={true} />
      <SectionList sections={datasource} renderItem={renderItem} 
      renderSectionHeader={({section:{title, backgroundColor}}) => (
        <Text style={[styles.headerText, {backgroundColor:backgroundColor}]}>{title}</Text>
      )}/>
    </View>
  );
}

export default App;