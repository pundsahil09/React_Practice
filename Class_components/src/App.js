// import logo from './logo.svg';
import './App.css';
// import User from './User';
// import Click from './Components/Click';
// import UseState from './Components/UseState';
// import Toggle from './Components/Toggle';
// import Form from './Components/Form'
// import PassFunc from './Components/PassFunc';
// import Mounting from './LifeCycle/Mounting';
// import Parent from './Components/Parent';
// import UseState1 from './Hooks/UseState'
// import UseEffect from './Hooks/UseEffect';
// import Parent1 from './LiftingStateUp/Parent'
// import Binding1 from './Binding/Binding1';
// import Binding2 from './Binding/Binding2';
// import Binding3 from './Binding/Binding3';
// import Binding4 from './Binding/Binding4';
// import UseMemo from './Hooks/UseMemo';
// import Types_css from './Components/Types_css';
// import Controll from './Components/Controll';
// import RefEx from './Components/RefEx';
// import UseRef from './Hooks/UseRef';
// import Uncontroll from './Components/Uncontroll';
import { createContext, useState } from 'react';
import Auction from './HOC/Auction';
import GetData from './Axios/GetData';
import PostData from './Axios/PostData';
import FetchDemo from './Hooks/CustomeHook/FetchDemo';
// import CompA from './Components/ContextApi/CompA';


let AppData = createContext();
function App() {



  const [data, setData] = useState("Hello from App.js file");

  const [stdData, setStdData] = useState({
    name: "sahil",
    age: 23,
    salary: 20000
  })


  function Demo() {
    alert("Hello this is alert from App")
  }
  return (
    <div className="App">
      <h1> Welcome To React App </h1>

      {/* <User /> */}

      {/* <Click /> */}

      {/* <UseState /> */}

      {/* <Toggle/> */}

      {/* <Form/> */}

      {/* <PassFunc pass={Demo}/> */}

      {/* <Mounting name={"sahil"}/> */}

      {/* <Parent/> */}

      {/* <UseState1 /> */}

      {/* <UseEffect/> */}

      {/* <Parent1 /> */}

      {/* <Binding1/> */}

      {/* <Binding2/> */}

      {/* <Binding3/> */}

      {/* <Binding4/> */}

      {/* <UseMemo/> */}

      {/* <Types_css/> */}

      {/* <Controll/> */}

      {/* <Uncontroll/> */}

      {/* <RefEx/> */}

      {/* <UseRef/> */}

      {/* <AppData.Provider value={{ data, stdData }}>
        <CompA />
      </AppData.Provider> */}

      {/* <Auction /> */} {/* it is a HOC Example */}
      
      {/* <GetData /> */}

      {/* <PostData /> */}

      <FetchDemo />






    </div>
  );
}

export default App;
export { AppData };