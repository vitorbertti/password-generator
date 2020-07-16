import React, { useState } from 'react';
import './styles.css';

export interface Props {
   length: string;
}

const GeneratePassword: React.FC<Props> = (length) => {
   const [password, setPassword] = useState('');

   const copyPassword = () => {
      const copyText = document.querySelector('#password') as HTMLInputElement;
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand('copy');
      return;
   };

   const generate = () => {
      if (!length.length) {
         alert('Please select the password length');
         return;
      }

      let newPassword = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < parseInt(length.length); i++) {
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
            <input className="password" id="password" type="text" value={password} />
            <button className="btn btn-copy" onClick={copyPassword}>
               Copy
            </button>
         </div>
      </div>
   );
};

export default GeneratePassword;
