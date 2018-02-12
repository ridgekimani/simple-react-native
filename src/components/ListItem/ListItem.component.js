import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => (
  // alert(props);
  <TouchableOpacity onPress={props.onItemPress}>
    <View style={styles.listItem}>
      <Image style={styles.placeImage} source={props.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    margin: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
  },
  placeImage: {
    marginRight :8,
    height: 30,
    width: 40,
  },
})


export default ListItem;