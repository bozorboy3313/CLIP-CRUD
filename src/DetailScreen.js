import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you have the necessary icon library

const DetailScreen = ({ route }) => {
  const { title, category, keywords, content, location, price, image } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <View style={styles.keywordsContainer}>
        <Text style={styles.keywordsText}>{keywords}</Text>
      </View>
      <View style={styles.locationContainer}>
        <MaterialIcons name="location-on" size={24} color="#333" />
        <Text style={styles.locationText}>{location}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{price}원</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  headerContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 18,
    color: '#666',
  },
  keywordsContainer: {
    backgroundColor: '#9905DB',
    padding: 8,
    margin: 16,
    borderRadius: 8,
  },
  keywordsText: {
    fontSize: 16,
    color: '#fff',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  priceText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#9905DB',
  },
  contentContainer: {
    padding: 16,
  },
  contentText: {
    fontSize: 16,
    color: '#333',
  },
});

export default DetailScreen;
