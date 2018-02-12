import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem.component';
import PlaceList from './src/components/PlaceList/PlaceList.component';
import placeImage from './src/assets/image.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail.component';


export default class App extends React.Component {
  state = {
    placeName: '',
    places: [],
  }

  handleNameChange = (placeName) => {
    this.setState({ placeName });
  }

  handleOnPress = () => {
    if (this.state.placeName.trim() === "") return;
    this.setState(prevState => ({
      places: prevState.places.concat({
        key: Math.random(),
        name: this.state.placeName,
        image: {
          uri: "https://wallpaperbrowse.com/media/images/5738011-awesome-pictures.png"
        },
      })
    }));

  }

  handleDelete = (key) => {
    this.setState(prevState => ({
      places: prevState.places.filter((place) => {
        return place.key !== key;
      })
    }))
  }

  render() {
    
    return (
      <View style={styles.container}>
        <PlaceDetail />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName} 
            onChangeText={this.handleNameChange}
          />
          <Button 
            styles={styles.placeButton} 
            title="Add"
            onPress={this.handleOnPress}
          />
        </View>
        <PlaceList places={this.state.places} onItemDelete={this.handleDelete}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  placeInput: {
    width:  "70%",
  },
  placeButton: {
    width: "30%",
  },
  listContainer: {
    width: "100%",
  }
});
