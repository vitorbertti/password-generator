import React, { useState } from 'react';
import './styles.css';

export interface Props {
   options: {
      length: string;
      uppercase: boolean;
      lowercase: boolean;
      numbers: boolean;
      symbols: boolean;
   };
}

const GeneratePassword: React.FC<Props> = ({ options }) => {
   const [password, setPassword] = useState('');

   const copyPassword = () => {
      const copyText = document.querySelector('#password') as HTMLInputElement;
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand('copy');
      return;
   };

   const generate = () => {
      if (!options.length || options.length === '--Select the length--') {
         alert('Please select the password length.');
         return;
      }

      if (!options.lowercase && !options.numbers && !options.uppercase && !options.symbols) {
         alert('Please choose at least one option.');
         return;
      }

      let newPassword = '';
      let characters = '';

      if (options.lowercase) {
         characters = characters.concat('abcdefghijklmnopqrstuvwxyz');
      }

      if (options.numbers) {
         characters = characters.concat('0123456789');
      }

      if (options.uppercase) {
         characters = characters.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      }

      if (options.symbols) {
         characters = characters.concat('!@#$%&');
      }

      const charactersLength = characters.length;
      for (let i = 0; i < parseInt(options.length); i++) {
         newPassword += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      setPassword(newPassword);
   };

   return (
      <div className="container">
         <button onClick={generate} type="button" className="btn btn-generate">
            Generate password
         </button>
         <div className="display-password">
            <input className="password" id="password" type="text" defaultValue={password} readOnly />
            <button className="btn btn-copy" onClick={copyPassword}>
               Copy
            </button>
         </div>
      </div>
   );
};

export default GeneratePassword;
