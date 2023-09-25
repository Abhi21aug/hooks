import "./App.css";
import UseRef from "./UseRef";
import USeMemoParent from "./USeMemoParent";
import UseReducer from "./UseReducer";
import UseCallBackParent from "./UseCallBackParent";
import CustomHooks1 from "./CustomHooks/CustomHooks1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hooks</h1>
        {/* <UseRef /> */}
        {/* <USeMemoParent /> */}
        {/* <UseCallBackParent /> */}
        {/* <UseReducer /> */}
        <CustomHooks1 />
      </header>
    </div>
  );
}

export default App;
