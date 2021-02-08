import { HashRouter , Route } from "react-router-dom";
import Main from "./routes/Main";
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />      
    </HashRouter>
  );
}

export default App;
