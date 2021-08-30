import './App.css';
import {Routing} from './Components/Routing'
import 'notyf/notyf.min.css';
import { BrowserRouter } from "react-router-dom";
import { MenuBar } from './Components/MenuBar';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <MenuBar/>
        <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
