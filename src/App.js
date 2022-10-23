import { useState } from 'react';
import QRCode from 'react-qr-code';

import './App.css';

function App() {
  const [link, setLink] = useState('')



  function handalQrcode(e) {
    setLink(e.target.value);
  }

  return (
    <div className="container">

      <div className='qrCode'>
        <QRCode
          value={link}
        />
      </div>

      <input className="input"
        placeholder='Digite seu link...'
        value={link}
        onChange={(e) => handalQrcode(e)}
      />

    </div>
  );
}

export default App;
