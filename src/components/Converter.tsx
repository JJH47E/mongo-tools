import { useState } from 'react'
import './Converter.css'

const qualifiedRegex = /^ObjectId\(\"[a-f,0-9]{24}\"\)$/
const regex = /[a-f,0-9]{24}/
const dateFormatOptions: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

function Converter() {
  const [objectId, setObjectId] = useState('');

  const handleChange = (event: any) => {
    event.preventDefault();
    const input = event.target.value;
    if (qualifiedRegex.test(input)) {
      setObjectId(input.substr(10, 24));
    } else if (input.length == 24 && regex.test(input)) {
      setObjectId(event.target.value);
    }
    return;
  };

  let timestampMilliseconds;

  if (objectId != null) {
    timestampMilliseconds = parseInt(objectId.substring(0, 8), 16) * 1000;
  }

  return (
    <>
      <div className="action-card">
        <div className="card">
          <h4 className="card-header">ObjectId to Timestamp</h4>
          <div className="card-body">
            <form>
            <div className="form-group">
              <label htmlFor="objectIdInput">ObjectId</label>
              <input type="email"
                className="form-control"
                id="objectIdInput"
                aria-describedby="objectId"
                placeholder="65c7d0cf172ca926799e21aa"
                onChange={handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">You can also use ObjectId{'('}"65c7d0cf172ca926799e21aa"{')'}</small>
            </div>
            </form>
          </div>
        </div>
        {
          timestampMilliseconds != null &&
          !isNaN(timestampMilliseconds) &&
          <div className="alert alert-primary mt-20" role="alert">
            {new Date(timestampMilliseconds).toLocaleDateString(undefined, dateFormatOptions)}
          </div>
        }
      </div>
    </>
  )
}

export default Converter
