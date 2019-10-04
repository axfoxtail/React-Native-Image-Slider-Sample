import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function App() {
  return (
      <Swiper
        autoplay={true}
        style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Image 
            source={require('./assets/image1.png')}
          />
        </View>
        <View style={styles.slide2}>
          <Image 
            source={require('./assets/image2.png')}
          />
        </View>
        <View style={styles.slide3}>
          <Image 
            source={require('./assets/image3.png')}
          />
        </View>
      </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
