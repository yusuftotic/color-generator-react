import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setHex, setRgb, setTab } from '../../slices/colorSlice';
import { generateHex, generateRGB, hexToRgb, rgbToHex, isLightColor } from '../../helpers/colorUtils';

import './Generator.css';

export default function Generator() {

  const dispatch = useDispatch();

  const { hex, rgb, tab } = useSelector(state => state.color);

  const generatorRef = useRef();

  const [copyText, setCopyText] = useState('');

  const [hexValue, setHexValue] = useState('');

  const [rValue, setRValue] = useState('');

  const [gValue, setGValue] = useState('');

  const [bValue, setBValue] = useState('');

  useEffect(() => {

    copyText !== 'Copied!' && setCopyText(`Copy ${tab === 'hex' ? 'Hex' : 'RGB'}`);

  }, [tab, copyText]);

  useEffect(() => {

    if (tab === 'hex') generatorRef.current.style.backgroundColor = hex;

  }, [hex, tab]);

  useEffect(() => {

    if (tab === 'rgb') generatorRef.current.style.backgroundColor = rgb;

  }, [rgb, tab]);

  const copyToClipboard = (color) => {

    navigator.clipboard.writeText(color);
    setCopyText('Copied!');
    setTimeout(() => {
      setCopyText(`Copy ${tab === 'hex' ? 'Hex' : 'RGB'}`);
    }, 1000);

  }

  return (
    <div className="generator" ref={generatorRef} >

      <div className="container">
        <div className="tab glass">
          <button
            type="button"
            className="tabHex"
            style={{ color: tab === 'hex' ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, .5)' }}
            onClick={() => {
              dispatch(setTab('hex'));
              dispatch(setHex(rgbToHex(rgb)));
            }}
          >
            HEX
          </button>

          <span className="tabLine"></span>

          <button
            type="button"
            className="tabRGB"
            style={{ color: tab === 'rgb' ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, .5)' }}
            onClick={() => {
              dispatch(setTab('rgb'));
              dispatch(setRgb(hexToRgb(hex)));
            }}
          >
            RGB
          </button>
        </div>

        <div className="grid">

          <form className="wrapperInput">
            {
              tab === 'hex'
                ?
                <input
                  type="text"
                  value={hexValue}
                  className="inputHex glass"
                  placeholder="Enter a Hex code..."
                  onChange={(e) => {
                    if (!e.target.value.startsWith('#') && e.target.value.length !== 0) {
                      e.target.value = '#' + e.target.value;
                    }
                    setHexValue(e.target.value);
                  }}
                />
                :
                <>
                  <input
                    type="text"
                    value={rValue}
                    className="inputRGB glass"
                    placeholder="R"
                    onChange={(e) => setRValue(e.target.value.trim())}
                  />

                  <input
                    type="text"
                    value={gValue}
                    className="inputRGB glass"
                    placeholder="B"
                    onChange={(e) => setGValue(e.target.value.trim())}
                  />

                  <input
                    type="text"
                    value={bValue}
                    className="inputRGB glass"
                    placeholder="G"
                    onChange={(e) => setBValue(e.target.value.trim())}
                  />
                </>
            }
          </form>

          <button
            type="button"
            className="btnChange glass"
            onClick={() => {
              if (tab === 'hex') {
                if (hexValue.length === 7) {
                  dispatch(setHex(hexValue));
                }
              }
              else if (tab === 'rgb') {
                if (rValue && gValue && bValue) {
                  dispatch(setRgb(`rgb(${rValue}, ${gValue}, ${bValue})`));
                }
              }
            }}
          >
            Change!
          </button>

          <span className="colorCode glass">{tab === 'hex' ? hex : rgb}</span>

          <button
            type="button"
            className="btnCopy glass"
            onClick={() => copyToClipboard(tab === 'hex' ? hex : rgb)}
          >
            {copyText}
          </button>

          <button
            type="button"
            className="btnRandom glass"
            onClick={() => tab === 'hex' ? dispatch(setHex(generateHex())) : dispatch(setRgb(generateRGB()))}
          >
            Random {tab === 'hex' ? 'Hex' : 'RGB'}!
          </button>

        </div>

      </div>

    </div>
  )
}
