import { useState } from 'react'
import './Generator.css'
import { ClipboardFill } from 'react-bootstrap-icons';

function generateRandomNumber(numBytes: number): number {
  if (numBytes <= 0 || numBytes > 8) {
    throw new Error("Number of bytes must be between 1 and 8 inclusive.");
  }

  let result = 0;

  for (let i = 0; i < numBytes; i++) {
    const randomByte = Math.floor(Math.random() * 256);
    result = (result << 8) | randomByte;
  }

  result = result >>> 0;
  return result;
}

function convertToHexString(number: number, numBytes: number): string {
  let hexString = number.toString(16);

  const expectedLength = numBytes * 2;
  while (hexString.length < expectedLength) {
    hexString = '0' + hexString;
  }

  return hexString;
}

const processRandom = convertToHexString(generateRandomNumber(5), 5);
let incrementingCounter = generateRandomNumber(3);

function Generator() {
  const [objectId, setObjectId] = useState('');

  const generate = () => {
    let oid = '';
    oid += convertToHexString(Math.floor((new Date()).getTime()/1000), 4);
    oid += processRandom;
    oid += convertToHexString(incrementingCounter++, 3);
    setObjectId(oid);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(objectId);
  };

  return (
    <>
      <div className="action-card card">
        <h4 className="card-header">ObjectId Generator</h4>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="objectIdInput">ObjectId</label>
              <div className="input-group mb-3">
                <input type="text"
                  className="form-control disable-mouse-over"
                  placeholder="65c7d0cf172ca926799e21aa"
                  value={objectId}
                  disabled={true}
                  aria-label="objectId"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={copyToClipboard}><ClipboardFill /></button>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-primary btn-block mt-10 full-width" onClick={generate}>Generate</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Generator
