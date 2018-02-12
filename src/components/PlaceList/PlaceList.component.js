import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem.component';
 
const PlaceList = (props) => {
  return(
    <FlatList 
      style={styles.listContainer} 
      data={props.places} 
      renderItem={(args) => (
        <ListItem
          placeName={args.item.name} 
          placeImage={args.item.image}
          onItemPress={() => props.onItemDelete(args.item.key)} 
        />
      )}
    />
  ) 
   
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  }
});

export default PlaceList;