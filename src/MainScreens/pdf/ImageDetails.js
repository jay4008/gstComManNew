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
import {Rtext} from '../../CommonComponents/common/Rtext';
const {height, width} = Dimensions.get('window');

// import CustomCrop from 'react-native-perspective-image-cropper';
class ImageDetail extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state= {
  //     imageWidth: width,
  //     imageHeight: height,
  //     initialImage: this.props.route.params.uri,
  //     rectangleCoordinates: {
  //       topLeft: {x: 30, y: 30},
  //       topRight: {x: width -30, y: 30},
  //       bottomRight: {  x:  width -10, y: height - 100  },
  //       bottomLeft: { x: 10, y: height - 100},
  //     },
  //   }
  // }

  // componentWillMount() {
  //   Image.getSize(this.props.route.params.uri, (width, height) => {
  //     this.setState({
  //       imageWidth: width,
  //       imageHeight: height,
  //       initialImage: this.props.route.params.uri,
  //       rectangleCoordinates: {
  //         topLeft: {x: 10, y: 10},
  //         topRight: {x: width -10, y: 10},
  //         bottomRight: {x: 10, y: height - 10},
  //         bottomLeft: {x: 10, y: height - 10},
  //       },
  //     });
  //   });

    // console.log("this.props", this.props.route.params.uri)
  // }
  // updateImage(image, newCoordinates) {
  //   this.setState({image, rectangleCoordinates: newCoordinates});
  // }
  // crop() {
  //   this.customCrop.crop();
  // }
  render() {
    return (
      <View style = {{flex : 1}}>
{/*     
        <CustomCrop
          updateImage={this.updateImage.bind(this)}
          rectangleCoordinates={this.state.rectangleCoordinates}
          initialImage={this.state.initialImage}
          height={this.state.imageHeight}
          width={this.state.imageWidth}
          ref={ref => (this.customCrop = ref)}
          overlayColor="rgba(18,190,210, 1)"
          overlayStrokeColor="rgba(20,190,210, 1)"
          handlerColor="rgba(20,150,160, 1)"
          enablePanStrict={false}
      
        /> */}
        <TouchableOpacity>

          <Text>CROP IMAGE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ImageDetail;
