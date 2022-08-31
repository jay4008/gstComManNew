import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Rtext} from '../../CommonComponents/common/Rtext';
import {Colors} from '../../assets/common/common';
import {Fonts} from '../../assets/common/common';
import {useDispatch, useSelector} from 'react-redux';
import {setToastMsg} from '../../Store/popup';
import moment from 'moment';
import {singleMsg, updateMsg} from '../../Store/message';
import EditPopup from '../popup/EditPop';
import UpdateComment from '../popup/UpdateComment';

const {height, width} = Dimensions.get('window');

const DATA = [
  {
    name: 'Koushik',
    mess: 'hlw Koushik',
    time: '2:45pm',
    // img: require('../../assets/icons/profile.png'),
  },
  {
    name: 'souvik',
    mess: 'hlw ',
    time: '3.15pm',
    //img: require('../../assets/icons/camera.png'),
  },
  {
    name: 'Ranjan',
    mess: 'how are you?',
    time: 'Yestarday',
    //img: require('../../assets/icons/clock.png'),
  },
  // {
  //   name: 'jay',
  //   mess: 'Whare r u from?',
  //   time: '3.15pm',
  //   img: require('../../assets/icons/delete.png'),
  // },
  // {
  //   name: 'Koushik',
  //   mess: 'hlw Koushik',
  //   time: '2:45pm',
  //   img: require('../../assets/icons/fail.png'),
  // },
  // {
  //   name: 'souvik',
  //   mess: 'hlw ',
  //   time: '3.15pm',
  //   img: require('../../assets/icons/filter.png'),
  // },
  // {
  //   name: 'Ranjan',
  //   mess: 'how are you?',
  //   time: 'Yestarday',
  //   img: require('../../assets/icons/grater.png'),
  // },
  // {
  //   name: 'jay',
  //   mess: 'Whare r u from?',
  //   time: 'Yestarday',
  //   img: require('../../assets/icons/less.png'),
  // },
  // {
  //   name: 'Koushik',
  //   mess: 'hlw Koushik',
  //   time: '3.15pm',
  //   img: require('../../assets/icons/gst.png'),
  // },
  // {
  //   name: 'souvik',
  //   mess: 'hlw ',
  //   time: '2:45pm',
  //   img: require('../../assets/icons/help.png'),
  // },
  // {
  //   name: 'Ranjan',
  //   mess: 'how are you?',
  //   time: '2:45pm',
  //   img: require('../../assets/icons/fail.png'),
  // },
  // {
  //   name: 'jay',
  //   mess: 'Whare r u from?',
  //   time: 'Yestarday',
  //   img: require('../../assets/icons/image.png'),
  // },
  // {
  //   name: 'Koushik',
  //   mess: 'hlw Koushik',
  //   time: '3.15pm',
  //   img: require('../../assets/icons/profile.png'),
  // },
  // {
  //   name: 'souvik',
  //   mess: 'hlw ',
  //   time: '2:45pm',
  //   img: require('../../assets/icons/grater.png'),
  // },
  // {
  //   name: 'Ranjan',
  //   mess: 'how are you?',
  //   time: 'Yestarday',
  //   img: require('../../assets/icons/phone.png'),
  // },

  // {
  //   name: 'jay',
  //   mess: 'Whare r u from?',
  //   time: '3.15pm',
  //   img: require('../../assets/icons/tick.png'),
  // },
];

const message = props => {
  const [updateReply, setUpdateReply] = useState('');
  const [LongPress, setLongPress] = useState(false);
  const userTokenInfo = useSelector(state => state.auth.userTokenInfo);
  const [messageData, setMessageData] = useState(props.route.params.item);
  // console.log('props.route.params', props.route.params);
  const [savedata, setSavedata] = useState(DATA);
  const [allreply, setAllReply] = useState(false);
  const [reply, setReply] = useState(props.route.params.item.reply);
  const [sendmsg, setSendmsg] = useState('');
  // console.log('custom%%%%%%%%%%%%%%%%%', messageData);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [index, setindex] = useState(-1);
  useEffect(() => {
    if (props?.route?.params?.item?.reply?.length > 3) {
      setAllReply(false);
    } else {
      setAllReply(true);
    }
  }, []);
  return (
    <View style={{flex: 1, padding: 10, borderRadius: 15}}>
      <View>
        {reply && (
          <FlatList
            ListHeaderComponent={() => (
              <View>
                <View
                  style={{
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: Colors.primaryColor,
                    width: '98%',
                    padding: 5,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{width: 45, height: 45}}
                      source={require('../../assets/icons/prof.png')}
                    />
                    <View
                      style={{flexDirection: 'column', paddingHorizontal: 10}}>
                      <Rtext style={{color: Colors.primaryColor}}>
                        {messageData.userName}
                      </Rtext>
                      {/* <Rtext>Message:</Rtext> */}
                      <View style={{width: '95%', paddingVertical: 5}}>
                        <Rtext style={{width: width - 100}}>
                          {messageData.message}{' '}
                        </Rtext>
                      </View>
                      <View
                        style={{
                          height: 1,
                          borderColor: Colors.tranparentBlack,
                          borderWidth: 0.5,
                          marginBottom: 5,
                        }}></View>
                      {/* <View
                      style={{
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}> */}
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity>
                          <Image
                            source={require('../../assets/icons/like.png')}
                            style={{
                              width: 25,
                              height: 25,
                              resizemode: 'container',
                              padding: 10,
                              tintColor: Colors.primaryColor,
                            }}></Image>
                        </TouchableOpacity>
                        <Rtext
                          style={{
                            fontFamily: Fonts.latoBold,
                            color: Colors.primaryColor,
                            marginRight: 20,
                          }}>
                          Comment
                        </Rtext>
                      </View>
                    </View>
                    {/* </View> */}
                  </View>
                </View>
                {!allreply && (
                  <TouchableOpacity
                    onPress={() => {
                      setAllReply(true);
                    }}
                    style={{paddingVertical: 8, marginLeft: 10}}>
                    <Rtext style={{color: Colors.primaryColor}}>
                      See All Comments
                    </Rtext>
                  </TouchableOpacity>
                )}
              </View>
            )}
            style={styles.flatlistMainView}
            showsVerticalScrollIndicator={false}
            data={
              reply?.length > 3 && !allreply
                ? [...reply]?.slice(0, 3)
                : [...reply]
            }
            renderItem={({item, index}) => (
              <RenderItem
              setUpdateReply= {setUpdateReply}
                item={item}
                setindex= {setindex}
                setLongPress={setLongPress}
                index={index}
              />
            )}
            ListFooterComponent={() => <View style={{height: 500}} />}
          />
        )}
      </View>

      <View
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          bottom: 5,
          flexDirection: 'row',
          width: Dimensions.get('window').width,
          justifyContent: 'space-evenly',
        }}>
        <TextInput
          multiline={true}
          placeholdar={'Message...'}
          value={sendmsg}
          onChangeText={setSendmsg}
          style={{
            width: '80%',
            borderWidth: 1,
            borderColor: Colors.mainblue,
            borderRadius: 10,
          }}></TextInput>

        <TouchableOpacity
          onPress={() => {
            console.log('====================================');
            console.log('usertoken', userTokenInfo, messageData);
            console.log('====================================');

            let newReply = [...reply];

            newReply.push({
              message: sendmsg,
              userName: userTokenInfo.username,
              userid: userTokenInfo.userId,
              assid: null,
              tlid: null,
              date: moment().format('DD/MM/YYYY'),
              userSeen: true,
              assSeen: false,
              tlSeen: false,
              imgulr: null,
              profilePic: null,
              userType: userTokenInfo.role,
              edit: false,
            });

            console.log('====================================');
            console.log('data to send =====>>>>>>>', {
              ...messageData,
              reply: newReply,
            });
            console.log('====================================');
            if (sendmsg === '') {
              dispatch(setToastMsg('Please enter the proper Message.?'));
              return;
            }

            dispatch(
              updateMsg({
                id: messageData?._id,
                data: {
                  ...messageData,
                  reply: newReply,
                },
              }),
            ).then(() => {
              dispatch(
                singleMsg({
                  id: messageData?._id,
                }),
              ).then(res => {
                setSendmsg('');
                setReply(res.payload.reply);
              });
            });
          }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: Colors.mainblue,
              tintColor: Colors.mainblue,
            }}
            source={require('../../assets/icons/send.png')}
          />
        </TouchableOpacity>
      </View>

      {edit && (
        <UpdateComment
          updateReply={updateReply}
          setUpdateReply={setUpdateReply}
          showModal={edit}
          setShowModal={setEdit}
          index = {index}
          reply= {reply}
          setReply = {setReply}
          messageData = {messageData}
        />
      )}
      {LongPress && (
        <EditPopup
          onPressCamera={() => {
            setLongPress(false);
            setTimeout(() => {
              setEdit(true);
            }, 400);
          }}
          onPressGallery = {() => {
            setLongPress(false);
            let newReply = [...reply];
            newReply.splice(index, 1)
            dispatch(
              updateMsg({
                id: messageData?._id,
                data: {
                  ...messageData,
                  reply: newReply,
                },
              }),
            ).then(() => {
              dispatch(
                singleMsg({
                  id: messageData?._id,
                }),
              ).then(res => {
                setSendmsg('');
            
                setReply(res.payload.reply);
              });
            });

          }}
          isVisible={LongPress}
          setIsVisible={setLongPress}
        />
      )}
    </View>
  );
};
export default message;

const RenderItem = ({item,setUpdateReply, setLongPress, setindex, index}) => {
  const userTokenInfo = useSelector(state => state.auth.userTokenInfo);
  // console.log('====================================');
  // console.log('item', item.userid, userTokenInfo.userId);
  // console.log('====================================');
  return (
    <TouchableOpacity
      onLongPress={() => {
        if (item.userid === userTokenInfo.userId) {
          setLongPress(true);
          setindex( index);
          setUpdateReply(item.message);
          // Alert.alert("ok")
        }

        //   haldleNotification(item);
        // props.navigation.navigate('message')
      }}
      style={styles.click}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.Img}
          source={require('../../assets/icons/prof.png')}
        />
        <View>
          <View style={styles.card}>
            {/* <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/profile.png')} />   */}
            <Rtext style={styles.name}>{item.userName}</Rtext>
            {
             item.edit &&  <Rtext style = {{fontSize : 10}}>Edited</Rtext>
            }
          
            <Rtext style={{color: Colors.silver , fontSize : 10 , marginLeft : 4} }>{item.date}</Rtext>
          </View>
        </View>
      </View>
      <View>
        <Rtext
          style={{
            marginTop: 7,
            color: Colors.silver,
            width: width - 110,
            marginLeft: 60,
            marginTop: -15,
          }}>
          {item.message}
        </Rtext>
      </View>
      {/* <View style = {{height : 2 , marginTop : 5, width : "100%" , backgroundColor : Colors.silver}} /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flatlistMainView: {
    backgroundColor: 'white',
    // height:height-290

    // paddingBottom :
  },
  click: {
    marginHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.white,
    marginTop: 10,
    borderRadius: 10,
    borderColor: Colors.silver,
    borderWidth: 1,
  },
  Img: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    borderRadius: 50,
    marginHorizontal: 10,
    //backgroundColor: Colors.lightSilver,
    // tintColor: Colors.primaryColor
    alignSelf: 'center',
  },
  name: {
    width: width - 140,
    fontFamily: Fonts.latoBlack,
    width: width - 200,
  },
  description: {
    width: width - 140,
    paddingLeft: 10,
    fontFamily: Fonts.latoRegular,
    fontSize: 14,
    paddingVertical: 5,
    color: Colors.silver,
  },
  Date: {
    width: width - 120,
    paddingLeft: 10,
    fontFamily: Fonts.latoRegular,
    fontSize: 14,
    paddingVertical: 5,
    color: Colors.tranparentBlack,
  },
  card: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // padding: 10,
    //alignItems: "center"
  },
});
