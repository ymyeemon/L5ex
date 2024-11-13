// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
//
// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left',
//   },
//   opacityStyle: {
//     borderWidth: 1,
//   }
// });
//
// const App = () => {
//   const datasource = [
//     {key: 'a'},
//     {key: 'b'},
//     {key: 'c'},
//     {key: 'd'},
//     {key: 'e'},
//     {key: 'f'},
//     {key: 'g'},
//     {key: 'h'},
//     {key: 'i'},
//     {key: 'j'},
//     {key: 'k'},
//     {key: 'l'},
//     {key: 'm'},
//     {key: 'n'},
//     {key: 'o'},
//     {key: 'p'},
//     {key: 'q'},
//     {key: 'r'},
//     {key: 's'},
//     {key: 't'},
//   ];
//
//   const renderItem = ({item}) => {
//     return (
//       <TouchableOpacity style={styles.opacityStyle}>
//       <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//     )
//   }
//
//   return (
//     <View>
//       <FlatList data={datasource} renderItem={renderItem} />
//     </View>
//   );
// }
//
// export default App;
