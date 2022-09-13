import './App.css'
import Posts from './components/Posts';

function App() {

  return (
    <div className='container'>
      <h1 className="text-center m-4 fs-1">Posts</h1>
      <div className='d-flex justify-content-end mx-3'>
        <span className='btn btn-success'>Create Post</span>
      </div>
      <Posts />
    </div>
  )
}

export default App
