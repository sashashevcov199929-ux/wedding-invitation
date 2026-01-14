import { useRef } from 'react';
import './App.css';


import Convert from './components/Convert/Convert';
import Data from './components/Data/Data';
import Invite from './components/invite/Invite';
import Time from './components/Folder/Time';
import Place from './components/Place/Place';
import Dress from './components/Dress/Dress';

function App() {

  const dataRef = useRef(null);
     const scrollToNext = () => {
    
    if (dataRef.current) {
      dataRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
 



  return (
    <div className="containerApp">
   <div className="section"><Convert  onScrollDown={scrollToNext}/></div>
   <div className="section"><Data ref={dataRef}/></div>
   <div className="section"><Invite/></div>
   <div className="section"><Time/></div>
   <div className="section"><Place/></div>
    <div className="section"><Dress/></div>
    </div>
  );
}

export default App;