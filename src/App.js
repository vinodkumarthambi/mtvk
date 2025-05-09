import logo from './logo.svg';
import './App.css';
import MessageText from './MessageText.js'
import ConditionBasedRender from './ConditionBasedRender.js';
import MapConcept from './MapConcept.js';
import FormConcept from './FormConcept.js';
import PostConcept from './PostConcept.js';
import PostFormConcept from './PostFormConcept.js';
import NameList from './data.json'
import { useState } from 'react';
function App() {
 const [query,setQuery] = useState('')
 const changeHandler = (event) =>{
    setQuery(event.target.value)
 }
 const filterNames = NameList.filter((items)=>{
   return items.first_name.includes(query) || items.last_name.includes(query);
 })
  return (
    <div className="App">
      {/* <MessageText /> */}
      {/* <ConditionBasedRender /> */}
      {/* <MapConcept /> */}
      {/* <FormConcept /> */}
      {/* <PostFormConcept /> */}
      {/* <PostConcept /> */}
      <input type='text' value={query} onChange={changeHandler}></input>
       {filterNames.map((items)=>(
              <p key={items.id}>{items.first_name}{items.last_name}</p>)
       )}
    </div>
  );
}

export default App;
