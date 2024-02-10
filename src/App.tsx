import { useState } from 'react'
import './App.css'

const qualifiedRegex = /^ObjectId\(\"[a-f,0-9]{24}\"\)$/
const dateFormatOptions: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

function App() {
  const [objectId, setObjectId] = useState('');

  const handleChange = (event: any) => {
    event.preventDefault();
    const input = event.target.value;
    if (qualifiedRegex.test(input)) {
      setObjectId(input.substr(10, 24));
    } else if (input.length == 24) {
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
      <div>
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
        {
          timestampMilliseconds != null &&
          !isNaN(timestampMilliseconds) &&
          <div className="alert alert-primary" role="alert">
            {new Date(timestampMilliseconds).toLocaleDateString(undefined, dateFormatOptions)}
          </div>
        }
      </div>
    </>
  )
}

export default App
