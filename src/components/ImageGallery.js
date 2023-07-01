
import React from 'react';
import { View, FlatList, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const image1 = require('../images/image1.jpg');
const image2 = require('../images/image2.jpg');
const image3 = require('../images/image3.jpg');
const image4 = require('../images/image4.jpg');

const imageData = [image1, image2, image3, image4];

const ImageGallery = () => {
  const { width } = Dimensions.get('window');
  const isLargeScreen = width >= 768;

  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderItem = ({ item }) => {
    return (
      <View style={isLargeScreen ? styles.gridItem : styles.carouselItem}>
        <Image source={item} style={styles.image} resizeMode="cover" />
      </View>
    );
  };

  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={imageData.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    );
  };

  if (isLargeScreen) {
    return (
      <FlatList
        data={imageData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={3}
        contentContainerStyle={styles.gridContainer}
      />
    );
  }

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={imageData}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    paddingVertical: 10,
    margin: 30,
  },
  gridItem: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  image: {
    marginTop:30,
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  paginationContainer: {
    marginTop: -40,
    marginBottom: 0,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#ff5e3a',
  },
  paginationInactiveDot: {
    backgroundColor: '#cccccc',
  },
});

export default ImageGallery;


// import React from 'react';
// import { View, FlatList, Dimensions, StyleSheet, Image } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// const image1 = require('../images/image1.jpg');
// const image2 = require('../images/image2.jpg');
// const image3 = require('../images/image3.jpg');
// const image4 = require('../images/image4.jpg');

// const imageData = [
//     image1,
//     image2,
//     image3,
//     image4,
// ];

// const ImageGallery = () => {
//     const { width } = Dimensions.get('window');
//     const isLargeScreen = width >= 768;

//     const renderItem = ({ item }) => {
//         return (
//             <View style={isLargeScreen ? styles.gridItem : styles.carouselItem}>
//                 <Image source={item} style={styles.image} resizeMode="cover" />
//             </View>
//         );
//     };

//     if (isLargeScreen) {
//         return (
//             <FlatList
//                 data={imageData}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={renderItem}
//                 numColumns={3}
//                 contentContainerStyle={styles.gridContainer}
//             />
//         );
//     }

//     return (
//         <Carousel
//             data={imageData}
//             renderItem={renderItem}
//             sliderWidth={width}
//             itemWidth={width}
//         />
//     );
// };

// const styles = StyleSheet.create({
//     gridContainer: {
//         paddingVertical: 10,
//         margin: 30,
//     },
//     gridItem: {
//         flex: 1,
//         aspectRatio: 1,
//         margin: 5,
//     },
//     carouselItem: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         margin: 30,
       
//     },
//     image: {
//         margin:30,
//         width: '100%',
//         height: '100%',
//         borderRadius: 20,
//     },
// });

// export default ImageGallery;
