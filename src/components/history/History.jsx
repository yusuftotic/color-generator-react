import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setHexCodes, setRgbCodes } from '../../slices/colorSlice';
import { getHexCodesFromToStorage, getRgbCodesFromToStorage } from '../../helpers/storageUtils';

import './History.css';

export default function History() {

  const { tab, hex, rgb, hexCodes, rgbCodes } = useSelector(state => state.color);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(setHexCodes(getHexCodesFromToStorage()));

  }, [hex]);

  useEffect(() => {

    dispatch(setRgbCodes(getRgbCodesFromToStorage()));

  }, [rgb]);

  // useEffect(() => {

  //   if (tab === 'hex') {
  //     hexCodes && console.log(hexCodes);
  //   }

  // }, [tab, hexCodes]);

  // useEffect(() => {

  //   if (tab === 'rgb') {
  //     rgbCodes && console.log(rgbCodes);
  //   }

  // }, [tab, rgbCodes]);

  return (
    <div className="history">
      asd
    </div>
  )
}
