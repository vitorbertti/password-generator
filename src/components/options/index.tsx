import React, { useState, useEffect } from 'react';
import './styles.css';

export interface Props {
   setOptions: Function;
}

const Options: React.FC<Props> = ({ setOptions }) => {
   const [length, setLength] = useState('');
   const [uppercase, setUppercase] = useState(false);
   const [lowercase, setLowercase] = useState(false);
   const [numbers, setNumbers] = useState(false);
   const [symbols, setSymbols] = useState(false);

   useEffect(() => {
      setOptions({ ...Options, length, uppercase, lowercase, numbers, symbols });
   }, [length, uppercase, lowercase, numbers, symbols, setOptions]);

   return (
      <div className="container">
         <div className="select">
            <select
               name="selectLength"
               id="selectId"
               onChange={(e) => {
                  setLength(e.target.value);
               }}
            >
               <option value="--Select the length--">--Select the length--</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
               <option value="11">11</option>
               <option value="12">12</option>
            </select>
         </div>
         <div>
            <div className="checkbox">
               <input
                  type="checkbox"
                  id="uppercase"
                  name="uppercase"
                  onChange={(e) => setUppercase(e.target.checked ? true : false)}
               />
               <label htmlFor="uppercase">Include uppercase letters</label>
            </div>

            <div className="checkbox">
               <input
                  type="checkbox"
                  id="lowercase"
                  name="lowercase"
                  onChange={(e) => setLowercase(e.target.checked ? true : false)}
               />
               <label htmlFor="lowercase">Include lowercase letters</label>
            </div>
            <div className="checkbox">
               <input
                  type="checkbox"
                  id="numbers"
                  name="numbers"
                  onChange={(e) => setNumbers(e.target.checked ? true : false)}
               />
               <label htmlFor="numbers">Include numbers</label>
            </div>
            <div className="checkbox">
               <input
                  type="checkbox"
                  id="symbols"
                  name="symbols"
                  onChange={(e) => setSymbols(e.target.checked ? true : false)}
               />
               <label htmlFor="symbols">Include symbols</label>
            </div>
         </div>
      </div>
   );
};

export default Options;
