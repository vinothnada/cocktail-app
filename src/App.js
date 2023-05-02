import "./App.css";
import Home from "./app/Home";
import { Provider } from "react-redux";
import store from "./app/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
