import React from 'react';
import './global.css';

import Options from './components/options';
import GeneratePassword from './components/generate-password';

const App: React.FC = () => {
   return (
      <div className="App">
         <h1 className="title">Welcome to Password Generator</h1>
         <Options />
         <GeneratePassword />
      </div>
   );
};

export default App;
