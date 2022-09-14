import './App.css'
import Posts from './components/Posts';
import ModalPopup from './components/ModalPopup';
import { useRecoilState } from 'recoil';
import { modalState } from './atom';


function App() {
  const [show, setShow] = useRecoilState(modalState);

  return (
    <div className='container'>
      <h1 className="text-center m-4 fs-1">Posts</h1>
      <div className='d-flex justify-content-end mx-3'>
        <button className='btn btn-success' onClick={()=>setShow(!show)}>Create Post</button>
      </div>
      <Posts />
      <ModalPopup />
    </div>
  )
}

export default App
