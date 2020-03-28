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
import { SearchBar } from 'react-native-elements';

const COURSES_DATA = [
  {
    id: '1',
    price: '$7.99',
    src: 'https://www.sentinelassam.com/wp-content/uploads/2019/06/Dispur.png',
    title: 'Japanese for beginners',
    author: 'Yamamoto Sanae',
    aboutAuthor: 'Native japanese speaker',
    authorImg: 'https://koreaboo-cdn.storage.googleapis.com/2017/10/chibayudai1.jpg',
    content: 'Learn Japanese Language Online At Your Own Pace. Start Today and Become an Expert in Days.',
    modalContent: 'Content about japanese language',
    members: '2k',
    rating: '5.0',
    lessons: '26',
    lessonsArray: [
      { id: 1, title: 'Introduction to Hiragana', about: 'Learn basics of hiragana' },
      { id: 2, title: 'Katakana', about: 'Learn basics of katakana' },
      { id: 3, title: 'Basics of Kanji', about: 'Use this method to learn kanji' }
    ]
  },
  {
    id: '2',
    price: '$12.99',
    src: 'https://www.usnews.com/dims4/USNEWS/d2d628a/2147483647/thumbnail/640x420/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F85%2Ff1%2F19f0ed814815ade2f68071bc3164%2F190610-geometryshapes-stock.jpg',
    title: 'Math for students',
    author: 'Max Budnik',
    aboutAuthor: 'Math professor',
    authorImg: 'https://images.genius.com/3ddf1643f4e67416273ca0a1fd468a56.1000x1000x1.jpg',
    content: 'Take free online math courses from MIT, ASU, and other leading math and science institutions.',
    modalContent: 'Content about math',
    members: '6.7k',
    rating: '4.8',
    lessons: '93',
    lessonsArray: [
      { id: 1, title: 'Early math', about: 'Counting, addition and subtraction' },
      { id: 2, title: 'Probability', about: 'The science of data' },
      { id: 3, title: 'Geometry', about: 'Basic shape, properties, composing' }
    ]
  },
  {
    id: '3',
    price: 'free',
    src: 'https://russkiymir.ru/upload/medialibrary/3d8/3d847b2aab5ee92735faeac349381f18.jpg',
    title: 'Russian literature',
    author: 'Eugene Onegin',
    aboutAuthor: 'Teaching literature about 20 years',
    authorImg: 'https://www.gl5.ru/photos/ki/kizaru/5.jpg',
    content: 'EUSP professors will deliver courses tailored for a better understanding of Russia through lectures specifically focusing on St. Petersburg.',
    modalContent: 'Content about russian literature',
    members: '1.3k',
    rating: '4.7',
    lessons: '12',
    lessonsArray: [
      { id: 1, title: 'Origins of Russian Literature', about: 'Russian literature has its national and...' },
      { id: 2, title: 'Aleksandr Pushkin', about: 'Russian greatest poet' },
      { id: 3, title: `Nikolai  Gogol'`, about: 'The first great master of Russian prose' }
    ]
  }
];

function Item(
    { title, author, content, src, modalContent, price, rating, members,
    lessons, aboutAuthor, authorImg, lessonsArray, navigation  }) {
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
        aboutAuthor={aboutAuthor}
        authorImg={authorImg}
        lessonsArray={lessonsArray}
        navigation={navigation}
      />
    </View>
  );
}

function MoreButton(props) {
  const [modalOpen, setModal] = useState(0);
  console.log(props.lessonsArray);
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
                      <View style={style.authorContainer}>
                        <View style={{borderWidth: 0.3, borderColor: 'black'}}></View>
                          <View style={style.authorInner}>
                            <View>
                              <Image source={{uri: `${props.authorImg}`}} style={style.authorImage} />
                            </View>
                            <View>
                              <Text style={style.modalAuthor}>{props.author}</Text>
                              <Text style={style.aboutAuthor}>{props.aboutAuthor}</Text>
                            </View>
                          </View>
                        <View style={{borderWidth: 0.2, borderColor: 'black'}}></View>
                      </View>
                    </View>
                    <View style={style.modalContentContainer}>
                      <View style={{flexDirection: 'row', marginBottom: 20}}>
                        <View>
                          <Text style={style.courseId}>{props.lessonsArray[0].id}</Text>
                        </View>
                        <View>
                          <Text style={style.courseTitle}>{props.lessonsArray[0].title}</Text>
                          <Text style={style.courseAbout}>{props.lessonsArray[0].about}</Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', marginBottom: 20}}>
                        <View>
                          <Text style={style.courseId}>{props.lessonsArray[1].id}</Text>
                        </View>
                        <View>
                          <Text style={style.courseTitle}>{props.lessonsArray[1].title}</Text>
                          <Text style={style.courseAbout}>{props.lessonsArray[1].about}</Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', marginBottom: 20}}>
                        <View>
                          <Text style={style.courseId}>{props.lessonsArray[2].id}</Text>
                        </View>
                        <View>
                          <Text style={style.courseTitle}>{props.lessonsArray[2].title}</Text>
                          <Text style={style.courseAbout}>{props.lessonsArray[2].about}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={style.startBtn}>
                      <TouchableNativeFeedback onPress={() => {
                        props.navigation.navigate('StartedCourse', { title: props.title });
                        setModal(!modalOpen)
                      }}>
                        <View style={style.startInner}>
                            <Text style={style.startCourse}>Start Course</Text>
                        </View>
                      </TouchableNativeFeedback>
                    </View>
                    <View style={style.backContainer}>
                      <TouchableNativeFeedback onPress={() => {
                          setModal(!modalOpen)
                      }}>
                        <View style={style.backBtn}>
                            <Text style={style.backText}>
                            <MaterialCommunityIcons
                              name="arrow-left-circle"
                              style={{ color: '#d4d4d4' }}
                              size={35}
                            /></Text>
                        </View>
                      </TouchableNativeFeedback>
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

export default function CourseNav({ route, navigation }) {
  const [value, onChangeText] = React.useState('Find Course');
  return (
    <SafeAreaView style={style.container}>
      <SearchBar
        inputContainerStyle={style.SearchBarStyle}
        onChangeText={text => onChangeText(text)}
        value={value}
        containerStyle={style.search}
      />
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
          aboutAuthor={item.aboutAuthor}
          authorImg={item.authorImg}
          lessonsArray={item.lessonsArray}
          navigation={navigation}
        />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  item: {
    marginTop: 15,
    backgroundColor: '#171717',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  author: {
    fontSize: 16,
    marginBottom: 5,
    color: '#ff1e56'
  },
  image: {
    width: 320,
    height: 120,
    borderRadius: 10
  },
  authorImage: {
    marginTop: 10,
    marginRight: 10,
    width: 70,
    height: 70,
    borderRadius: 40
  },
  authorInner: {
    flexDirection: 'row',
    marginBottom: 5
  },
  btnCourse: {
    marginTop: 15,
    width: 100,
    height: 40,
    backgroundColor: '#ff1e56',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContentContainer: {
    marginTop: 20
  },
  pillButton: {
      width: "100%",
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignContent: 'center',
  },
  backText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    color: 'black'
  },
  backContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    position: 'absolute'
  },
  text: {
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 16,
      color: 'white'
  },
  modalText: {
      fontSize: 16,
      textAlign: 'center'
  },
  modal: {
      paddingVertical: '10%',
      paddingHorizontal: '5%',
      backgroundColor: 'black'
  },
  modalTitle:{
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 10,
      color: 'white'
  },
  modalAuthor:{
      color: 'white',
      fontSize: 18,
      marginTop: 20
  },
  aboutAuthor: {
    color: '#adadad',
    fontSize: 16,
    marginBottom: 20
  },
  authorContainer: {
    width: '100%'
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
    backgroundColor: '#ff1e56',
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
    fontSize: 20,
    color: 'white'
  },
  courseAbout: {
    fontSize: 16,
    color: '#adadad'
  },
  startInner: {
    width: 200,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ff1e56'
  },
  startCourse: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    color: '#fff'
  },
  startBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%'
  },
  courseId: {
    color: 'white',
    fontSize: 24,
    marginRight: 25
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  SearchBarStyle: {
    marginTop: 30
  },
  content: {
    color: '#f5f5f5'
  },
  search: {
    backgroundColor: 'black',
    padding: 15
  }
});
