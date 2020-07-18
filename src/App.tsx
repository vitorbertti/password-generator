import React, { useState } from 'react';
import './global.css';

import Options from './components/options';
import GeneratePassword from './components/generate-password';

const App: React.FC = () => {
   const [options, setOptions] = useState({
      length: '',
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
   });

   return (
      <div className="App">
         <h1 className="title">Welcome to Password Generator</h1>
         <Options setOptions={setOptions} />
         <GeneratePassword options={options} />
      </div>
   );
};

export default App;
