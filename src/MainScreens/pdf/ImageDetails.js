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
import { Rtext } from '../../CommonComponents/common/Rtext';
const {height, width} = Dimensions.get('window');

const ImageDetail= ()=>{
    return(
        <SafeAreaView>
           <Rtext>Image Detail</Rtext> 
        </SafeAreaView>
    )
}

export default ImageDetail