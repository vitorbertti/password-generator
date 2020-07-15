import React, { useState } from 'react';
import './global.css';

import Options from './components/options';
import GeneratePassword from './components/generate-password';

const App: React.FC = () => {
   const [length, setLength] = useState('');

   return (
      <div className="App">
         <h1 className="title">Welcome to Password Generator</h1>
         <Options setLength={setLength} />
         <GeneratePassword length={length} />
      </div>
   );
};

export default App;
