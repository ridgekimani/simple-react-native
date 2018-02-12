import React from 'react';

import { Modal, View, Image, Text, Button } from 'react-native'

const PlaceDetail = (props) => (
  <Modal>
    <View>
      <Image source={props.placeImage} />
      <Text>{props.placeName}</Text>
      <View></View>
    </View>
  </Modal>
)

export default PlaceDetail;