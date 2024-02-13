import { useState } from 'react'
import './Generator.css'
import { ClipboardFill } from 'react-bootstrap-icons';
import * as uuid from 'uuid';

function GuidGenerator() {
  const [guid, setGuid] = useState('');

  const generate = () => {
    setGuid(uuid.v4());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(guid);
  };

  return (
    <>
      <div className="action-card card">
        <h4 className="card-header">Guid Generator</h4>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="objectIdInput">Guid</label>
              <div className="input-group mb-3">
                <input type="text"
                  className="form-control disable-mouse-over"
                  placeholder="96199e59-a650-4831-9fd2-b8d77739ed4f"
                  value={guid}
                  disabled={true}
                  aria-label="guid"
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

export default GuidGenerator
