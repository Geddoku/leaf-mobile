import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

const COURSES_DATA = [
  {
    id: '1',
    src: 'https://www.sentinelassam.com/wp-content/uploads/2019/06/Dispur.png',
    title: 'Japanese for beginners',
    author: 'Alex Doe',
    content: 'Learn Japanese Language Online At Your Own Pace. Start Today and Become an Expert in Days.'
  },
  {
    id: '2',
    src: 'https://www.usnews.com/dims4/USNEWS/d2d628a/2147483647/thumbnail/640x420/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F85%2Ff1%2F19f0ed814815ade2f68071bc3164%2F190610-geometryshapes-stock.jpg',
    title: 'Math for students',
    author: 'Max Budnik',
    content: 'Take free online math courses from MIT, ASU, and other leading math and science institutions.'
  },
  {
    id: '3',
    src: 'https://russkiymir.ru/upload/medialibrary/3d8/3d847b2aab5ee92735faeac349381f18.jpg',
    title: 'Russian literature',
    author: 'Eugene Onegin',
    content: 'EUSP professors will deliver courses tailored for a better understanding of Russia through lectures specifically focusing on St. Petersburg.'
  }
];

function Item({ title, author, content, src }) {
  return (
    <View style={style.item}>
      <Image source={{uri: `${src}`}} style={style.image} />
      <Text style={style.title}>{title}</Text>
      <Text style={style.author}>{author}</Text>
      <Text style={style.content}>{content}</Text>
      <TouchableOpacity style={style.btnCourse} title="More">
        <Text>MORE</Text>
      </TouchableOpacity>
    </View>
  );
}

const Courses = props => {
  return (
    <SafeAreaView style={style.container}>
      <FlatList
      style={style.listContainer}
        data={COURSES_DATA}
        renderItem={({ item }) =>
        <Item
          title={item.title}
          author={item.author}
          content={item.content}
          src={item.src}
        />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#252729',
    flex: 1
  },
  listContainer: {
    marginTop: 50
  },
  item: {
    marginTop: 15,
    backgroundColor: '#fcfcfc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 24,
    fontWeight: 'bold'
  },
  author: {
    fontSize: 16,
    marginBottom: 5,
    color: '#363636'
  },
  image: {
    width: 320,
    height: 120,
    borderRadius: 10
  },
  btnCourse: {
    marginTop: 15,
    width: 80,
    height: 40,
    backgroundColor: '#ededed',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Courses;
