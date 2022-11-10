import Search from './components/Search';
import React, { useEffect, useState} from 'react'
import { ombd } from './utils';

function App() {
  const [isclicked,setIsClicked]=useState(false);
  const [query, setQuery]=useState("minions");
  const [list, setList]=useState([]);
  useEffect(_ => {
    (async _ => {
        const response = await ombd.get(`?s=${query}`);
        setList(response.data.Search);
    })()
}, [isclicked])

  return (
    <div className='main'>
      <div className='header'>
        <div className='logoArea'>
          <span>Hooked</span>
        </div>
        <div className='inputArea'>
          <input type="text"  onChange={(e) => { setQuery(e.target.value) }} placeholder='Search Movies'/>
          <span type="submit" onClick={() => { setIsClicked((prevState) => !prevState) }}></span>
        </div>
      </div>
      <div className='cardFlex'>
        {list.map((item, idx) => (
            <Search key={idx}
              title={item.Title}
              imageSrc={item.Poster}
              year={item.Year}
              type={item.Type}
         />
      ))}
      </div>
    </div>
  );
}

export default App;
