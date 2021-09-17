import style from './style';
import React,{useState,useEffect} from 'react';
import {View,Text, ScrollView} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card';


const PostDetails = (props) =>
{
    // alert(JSON.stringify(props.id))
    return(
     <Card data={props.id} />
    )
}

export default PostDetails;