import { AlertImg } from "./components/AlertImg";
import "./assets/css/App.css";

import Router from "./components/Router";

function App() {
  return (
    <div className="App">
      <Router />
      <AlertImg></AlertImg>
    </div>
  );
}

export default App;
