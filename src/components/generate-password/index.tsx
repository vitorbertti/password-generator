import React, { useState } from 'react';
import './styles.css';

export interface Props {
   length: string;
   uppercase: boolean;
   lowercase: boolean;
   numbers: boolean;
}

const GeneratePassword: React.FC<Props> = ({ length, uppercase, lowercase, numbers }) => {
   const [password, setPassword] = useState('');

   const copyPassword = () => {
      const copyText = document.querySelector('#password') as HTMLInputElement;
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand('copy');
      return;
   };

   const generate = () => {
      if (!length) {
         alert('Please select the password length');
         return;
      }

      let newPassword = '';
      let characters = '';

      if (lowercase) {
         characters = characters.concat('abcdefghijklmnopqrstuvwxyz');
      }

      if (numbers) {
         characters = characters.concat('0123456789');
      }

      if (uppercase) {
         characters = characters.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      }

      const charactersLength = characters.length;
      for (let i = 0; i < parseInt(length); i++) {
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
            <input className="password" id="password" type="text" defaultValue={password} />
            <button className="btn btn-copy" onClick={copyPassword}>
               Copy
            </button>
         </div>
      </div>
   );
};

export default GeneratePassword;
