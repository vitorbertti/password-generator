import React, { useState } from 'react';
import './global.css';

import Options from './components/options';
import GeneratePassword from './components/generate-password';

const App: React.FC = () => {
   const [length, setLength] = useState('');
   const [uppercase, setUppercase] = useState(false);

   return (
      <div className="App">
         <h1 className="title">Welcome to Password Generator</h1>
         <Options setLength={setLength} setUppercase={setUppercase} />
         <GeneratePassword length={length} uppercase={uppercase} />
      </div>
   );
};

export default App;
