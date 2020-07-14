import React from 'react';
import './styles.css';

const Options: React.FC = () => {
   return (
      <div className="container">
         <div className="select">
            <select name="selectLength" id="selectId">
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
               <input type="checkbox" id="uppercase" name="uppercase" />
               <label htmlFor="uppercase">Include uppercase letters</label>
            </div>

            <div className="checkbox">
               <input type="checkbox" id="lowercase" name="lowercase" />
               <label htmlFor="lowercase">Include lowercase letters</label>
            </div>
            <div className="checkbox">
               <input type="checkbox" id="numbers" name="numbers" />
               <label htmlFor="numbers">Include numbers</label>
            </div>
            <div className="checkbox">
               <input type="checkbox" id="symbols" name="symbols" />
               <label htmlFor="symbols">Include symbols</label>
            </div>
         </div>
      </div>
   );
};

export default Options;