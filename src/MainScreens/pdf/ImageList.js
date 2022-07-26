import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import RNImageToPdf from 'react-native-image-to-pdf';
import {DraggableGrid} from 'react-native-draggable-grid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../../assets/common/common';
import {CusButtom} from '../../CommonComponents/common/CusButtom';
import ImagePicker from 'react-native-image-crop-picker';
import DocSelection from '../popup/DocModal';
import {BlurView} from '@react-native-community/blur';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addImageToDocumentList, pdfDocumentSet} from '../../Store/pdfCreat';
import moment from 'moment';
import { LoaderOff, LoaderOn, setSucessFailerMsg } from '../../Store/popup';
import { Rtext } from '../../CommonComponents/common/Rtext';
const {height, width} = Dimensions.get('window');
export const MyTest = props => {
  const dispatch = useDispatch();
  const pdfArray = useSelector(state => state.pdfCreat.pdfArray);
  const [docPicker, setDocPicker] = useState(false);
  const [scroll, setScroll] = useState(true);
  const [imageData, setImageData] = useState([]);
  const [pdfArrayIndex, setpdfArrayIndex] = useState(-1);
  const openCamera = () => {
    setDocPicker(false);
    ImagePicker.openCamera({}).then(image => {
      console.log(image);
      let data = [...imageData];
      data.push({path: image.path, key: 'keys' + imageData.length});
      setImageData(data);
    });
  };

  const openGallery = () => {
    setDocPicker(false);
    ImagePicker.openPicker({}).then(image => {
      console.log(image);
      let data = [...imageData];
      data.push({path: image.path, key: 'keys' + imageData.length});
      setImageData(data);
    });
  };

  const DataSetUp = () => {
    for (let index = 0; index < pdfArray.length; index++) {
      if (pdfArray[index].time === props.route.params.time) {
        setpdfArrayIndex(index);
        setImageData(pdfArray[index].ImageArr);
      }
    }
  };
  useEffect(() => {
    DataSetUp();
  }, []);

  useEffect(() => {
    if (imageData.length > 0) {
      dispatch(
        addImageToDocumentList({
          time: props.route.params.time,
          ImageArr: imageData,
        }),
      );
    }
  }, [imageData]);

  const myAsyncPDFFunction = async () => {
    dispatch(LoaderOn())
    let data = pdfArray[pdfArrayIndex]?.ImageArr?.map((item, index) => {
      console.log('item.path', item.path.split('file://').pop());

      return item.path.split('file://').pop();
    });

    console.log('data', data, pdfArray[pdfArrayIndex]);
    try {
      const options = {
        
        imagePaths: data,
        name: moment().format('ll') + '.pdf',
        quality: 0.7,
        maxSize: { // optional maximum image dimension - larger images will be resized
          width: 900,
          height: Math.round(height/ width* 900),
        },
      };
  
      const pdf = await RNImageToPdf.createPDFbyImages(options).then(() =>{
        setTimeout(() => {
          dispatch(LoaderOff())
          dispatch(setSucessFailerMsg({
            successFailureheaderTxt : "Pdf created",
            successFailureContent : "please check the Pdf Document in Pdf Document backpack with the Name of " + moment().format('ll') + '.pdf' ,
            successFailureType : true
          }))
          // state.successFailure = true;
          // state.successFailureheaderTxt = action.payload.successFailureheaderTxt;
          // state.successFailureContent = action.payload.successFailureContent;
          // state.successFailureType = action.payload.successFailureType
        }, 500);
    
      });
  
      console.log('Generated pdf object', pdf);
      console.log(pdf.filePath);

      dispatch(
        pdfDocumentSet({
          name: pdfArray[pdfArrayIndex].name,
          desc: pdfArray[pdfArrayIndex].desc,
          imagePath: pdfArray[pdfArrayIndex].ImageArr[0].path,
          pdfPath: pdf.filePath,
        }),
      );
    } catch (e) {
      console.log(e);
      console.log('Generated pdf object err');
    }
  };
  const render_item = item => {
    return (
      <View style={styles.item} key={item.key + 'dfdsf'}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("ImageDetail" , {uri: item.path})
          }}
          style={{
            height: height / 4 - 11,
            width: width / 2 - 11,
            borderRadius: 8,
            alignItems: 'center',

            justifyContent: 'center',
          }}
          onLongPress={() => {
            setScroll(false);
            setTimeout(() => {
              setScroll(true);
            }, 6000);
          }}>
          <Image
            style={{
              height: height / 4 - 11,
              width: width / 2 - 11,
              borderRadius: 8,
              resizeMode: 'cover',
            }}
            source={{uri: item.path}}
          />
        </TouchableOpacity>
        <Rtext>Delete Item</Rtext>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View
        style={{
          backgroundColor: Colors.primaryColor,
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
        }}>
        <CusButtom
          onpress={() => setDocPicker(true)}
          BTNstyle={{
            marginBottom: 10,
            width: imageData.length > 0 ? width / 2 - 30 : width - 30,
          }}
          text={'Add Images'}
        />
        {imageData.length > 0 && (
          <CusButtom
            onpress={() => myAsyncPDFFunction()}
            BTNstyle={{marginBottom: 10, width: width / 2 - 30}}
            text={'Export to Pdf'}
          />
        )}
      </View>
      <ScrollView scrollEnabled={scroll}>
        <DraggableGrid
          numColumns={2}
          disabledDrag={scroll}
          renderItem={render_item}
          data={[...imageData]}
          onDragRelease={data => {
            console.log(data);
            setImageData(data);
            setScroll(true);
          }}
        />
        <View style={{paddingBottom: 200}} />
      </ScrollView>

      {docPicker && (
        <BlurView style={styles.absolute} blurType="light" blurAmount={10}>
          <DocSelection
            onPressDoc={() => uploadDoc()}
            onPressCamera={() => openCamera()}
            onPressGallery={() => openGallery()}
            setIsVisible={setDocPicker}
            isVisible={true}
            doc={false}
          />
        </BlurView>
      )}

<TouchableOpacity
        onPress={() => {
          setnamePicker(true);
        }}
        style={{
          position: 'absolute',
          bottom: 120,
          right: 40,
          backgroundColor: Colors.mainblue,
          paddingVertical: 7,
          paddingHorizontal: 8,
          borderRadius: 20,
        }}>
        <Image
          style={{
            height: 40,
            width: 40,

            resizeMode: 'cover',
            tintColor: Colors.white,
          }}
          source={require('../../assets/icons/create.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 100,
    backgroundColor: 'blue',
  },
  wrapper: {
    width: width,
    height: height,
    backgroundColor: Colors.lightSilver,
    justifyContent: 'center',
  },
  item: {
    width: width / 2 - 10,
    height: height / 4 - 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: Colors.white,
    borderWidth: 1,
  },
  item_text: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
