import React, { useState } from 'react';
import './styles.css';

export interface Props {
   length: string;
}

const GeneratePassword: React.FC<Props> = (length) => {
   const [password, setPassword] = useState('');

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
         <button onClick={generate} type="button" className="btn">
            Generate password
         </button>
         {password}
      </div>
   );
};

export default GeneratePassword;
