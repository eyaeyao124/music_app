import { HashRouter , Route } from "react-router-dom";
import Main from "./routes/Main";
import Detail from "./routes/Detail";
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />  
      <Route path="/detail/:id" component={Detail} />    
    </HashRouter>
  );
}

export default App;
