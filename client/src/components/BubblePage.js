import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { axiosWithAuth } from './../utils/axiosWithAuth';
import fetchColors from './fetchColors';


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const fetchColors = () => {
     return axiosWithAuth().get('http://localhost:5000/api/colors')
      .then( res => {
        setColorList(res.data);
      })
      .catch( err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
