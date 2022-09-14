import './App.css'
import Posts from './components/Posts';
import { useState } from 'react';
import ModalPopup from './components/ModalPopup';


function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='container'>
      <h1 className="text-center m-4 fs-1">Posts</h1>
      <div className='d-flex justify-content-end mx-3'>
        <button className='btn btn-success' onClick={()=>setShow(!show)}>Create Post</button>
      </div>
      <Posts />
      <ModalPopup show={show} setShow={setShow}/>
    </div>
  )
}

export default App
