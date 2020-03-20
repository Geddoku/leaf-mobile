import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  TouchableNativeFeedback
} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const COURSES_DATA = [
  {
    id: '1',
    price: '$7.99',
    src: 'https://www.sentinelassam.com/wp-content/uploads/2019/06/Dispur.png',
    title: 'Japanese for beginners',
    author: 'Alex Doe',
    content: 'Learn Japanese Language Online At Your Own Pace. Start Today and Become an Expert in Days.',
    modalContent: 'Content about japanese language',
    members: '2k',
    rating: '5.0',
    lessons: '26'
  },
  {
    id: '2',
    price: '$12.99',
    src: 'https://www.usnews.com/dims4/USNEWS/d2d628a/2147483647/thumbnail/640x420/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F85%2Ff1%2F19f0ed814815ade2f68071bc3164%2F190610-geometryshapes-stock.jpg',
    title: 'Math for students',
    author: 'Max Budnik',
    content: 'Take free online math courses from MIT, ASU, and other leading math and science institutions.',
    modalContent: 'Content about math',
    members: '6.7k',
    rating: '4.8',
    lessons: '93'
  },
  {
    id: '3',
    price: 'free',
    src: 'https://russkiymir.ru/upload/medialibrary/3d8/3d847b2aab5ee92735faeac349381f18.jpg',
    title: 'Russian literature',
    author: 'Eugene Onegin',
    content: 'EUSP professors will deliver courses tailored for a better understanding of Russia through lectures specifically focusing on St. Petersburg.',
    modalContent: 'Content about russian literature',
    members: '1.3k',
    rating: '4.7',
    lessons: '12'
  }
];

function Item(
    { title, author, content, src, modalContent, price, rating, members,
    lessons  }) {
  return (
    <View style={style.item}>
      <Image source={{uri: `${src}`}} style={style.image} />
      <Text style={style.title}>{title}</Text>
      <Text style={style.author}>{author}</Text>
      <Text style={style.content}>{content}</Text>
      <MoreButton
        price={price}
        modalContent={modalContent}
        title={title}
        author={author}
        rating={rating}
        members={members}
        lessons={lessons}
      />
    </View>
  );
}

function MoreButton(props) {
  const [modalOpen, setModal] = useState(0);
  console.log(props.price);
  return (
    <View style={style.btnCourse}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalOpen}
                onRequestClose={() => {
                    setModal(!modalOpen)
                }}>
                <View style={style.modal}>
                    <View style={style.modalHeaderContent}>
                      <Text style={style.modalTitle}>{props.title}</Text>
                      <View style={style.priceContainer}>
                        <Text style={style.priceText}>{props.price}</Text>
                      </View>
                      <View style={style.iconsContainer}>
                        <View style={style.aboutCourseContainer}>
                          <MaterialCommunityIcons
                            name="account-multiple"
                            style={{ color: '#d4d4d4' }}
                            size={50}
                          />
                          <Text style={style.courseAboutCounts}>{props.members}</Text>
                          <Text style={style.courseAbout}>Students</Text>
                        </View>
                        <View style={style.aboutCourseContainer}>
                          <MaterialCommunityIcons
                            name="thumb-up-outline"
                            style={{ color: '#d4d4d4' }}
                            size={50}
                          />
                          <Text style={style.courseAboutCounts}>{props.rating}</Text>
                          <Text style={style.courseAbout}>Rating</Text>
                        </View>
                        <View style={style.aboutCourseContainer}>
                          <MaterialCommunityIcons
                            name="folder"
                            style={{ color: '#d4d4d4' }}
                            size={50}
                          />
                          <Text style={style.courseAboutCounts}>{props.lessons}</Text>
                          <Text style={style.courseAbout}>Lessons</Text>
                        </View>
                      </View>
                      <Text style={style.modalAuthor}>{props.author}</Text>
                    </View>
                    <View style={style.modalContentContainer}>
                      <Text style={style.modalText}>{props.modalContent}</Text>
                    </View>
                </View>
            </Modal>
            <TouchableNativeFeedback onPress={() => {
                setModal(!modalOpen)
            }} >
                <View style={style.pillButton}>
                    <Text style={style.text}>More</Text>
                </View>
            </TouchableNativeFeedback>
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
          price={item.price}
          title={item.title}
          author={item.author}
          content={item.content}
          src={item.src}
          modalContent={item.modalContent}
          rating={item.rating}
          members={item.members}
          lessons={item.lessons}
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
    width: 100,
    height: 40,
    backgroundColor: '#ededed',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContentContainer: {
    marginTop: 20
  },
  pillButton: {
      width: "40%",
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignContent: 'center',
  },
  text :{
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 16,
  },
  modalText: {
      fontSize: 16,
      textAlign: 'center'
  },
  modal: {
      paddingVertical: '10%',
      paddingHorizontal: '5%',
  },
  modalTitle:{
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 10,
      color: '#333333'
  },
  modalAuthor:{
      color: '#363636',
      fontSize: 18,
      marginTop: 10,
      marginBottom: 10,
  },
  modalHeaderContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#fcfcfc'
  },
  priceContainer: {
    width: 70,
    height: 25,
    backgroundColor: '#71eba0',
    borderRadius: 20,
    marginBottom: 30
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    marginBottom: 50
  },
  aboutCourseContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  courseAboutCounts: {
    fontWeight: 'bold',
    fontSize: 20
  },
  courseAbout: {
    fontSize: 16,
    color: '#adadad'
  }
});

export default Courses;
