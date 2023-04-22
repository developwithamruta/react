 import './App.css'; 
import Navbar from './component/Navbar.js';
import TextForm from './component/TextForm';
function App() {
  return (
    <>
      <Navbar title="CustomT" aboutText="About"></Navbar>
      <div className='container'>
      <TextForm place_text="Enter the text"></TextForm>
      </div>
   </>
  );
}

export default App;
