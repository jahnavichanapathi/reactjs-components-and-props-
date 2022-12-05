
/*import ClassComponent from "./ClassComponent"
import ClassComponent2 from "./ClassComponent2"
function App(){
  return(
    <div>
      <p>started learning reactjs</p>
      <h1>Reactjs:The future of  javascript</h1>
      <img src="https://miro.medium.com/max/1024/1*egOeK5Y9CabeKsnR4vMkhQ.jpeg"width="40%"/>
      <ClassComponent/>
      <ClassComponent2/>
    </div>

    )
  }
export default App*/



// import PropsExample from "./PropsExample"
// import FuncPropExample from "./FuncPropExample"
// import StateExample from "./StateExample"
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Events from "./Events"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar  from "./components/Navbar"
import NotFound from "./components/NotFound"
function App(){
  return(
    <div>
        {/* <h1>This is about PropsExample</h1>
        <PropsExample name="jahnavi" age="20"/> */}
        {/* <PropsExample framework="Angularjs" year="2008"/>
        <PropsExample framework="Reactjs" year="2013"/>
        <PropsExample framework="Vuejs" year="2017"/> */}
        
        {/* <FuncPropExample framework="React" number="1"/>  */}
        {/* <StateExample/>  */}
        {/* <Events/> */}
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/*" element={<NotFound/>}/>

          </Routes>
        </BrowserRouter>
        
    </div>

    )
}
export default App