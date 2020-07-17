import React, { useState } from 'react';
import './global.css';

import Options from './components/options';
import GeneratePassword from './components/generate-password';

const App: React.FC = () => {
   const [length, setLength] = useState('');
   const [uppercase, setUppercase] = useState(false);
   const [lowercase, setLowercase] = useState(false);
   const [numbers, setNumbers] = useState(false);
   const [symbols, setSymbols] = useState(false);

   return (
      <div className="App">
         <h1 className="title">Welcome to Password Generator</h1>
         <Options
            setLength={setLength}
            setUppercase={setUppercase}
            setLowercase={setLowercase}
            setNumbers={setNumbers}
            setSymbols={setSymbols}
         />
         <GeneratePassword
            length={length}
            uppercase={uppercase}
            lowercase={lowercase}
            numbers={numbers}
            symbols={symbols}
         />
      </div>
   );
};

export default App;
