import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Memegenerator from './component/Memegenerator';

function App() {
  return (
    <div className="App">
     {/* <h2>Welcome  to my Random  Meme website </h2>
       */}
       <Header></Header>
      
      
      <Memegenerator></Memegenerator>
    </div>
  );
}

export default App;
