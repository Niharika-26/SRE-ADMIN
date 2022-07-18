import "./App.css";
import { Fragment } from "react";
import TableComponent from "./components/Table";
import SearchFilter from "./components/SearchBar";
import Modal from "./components/Modal";
<link href="https://fonts.googleapis.com/css2?family=Merriweather" rel="stylesheet"/>

function App() {
  return ( <Fragment>
    <div>
      <div  style={{"position":"relative"}}>
        <img style={{"display":"inline-block","position":"absolute","left":200,"width":100}}
        src="https://www.decurtis.com/wp-content/uploads/2019/11/logo-decurtis-corporation.png" alt="Logo"/>
      </div>
      <div  style={{"position":"relative"}}>
        <h1 className="project-title">SRE INSIGHTS ADMIN</h1>
      </div>
    </div>
       
    <div className="top">
      <div className="searchbar">
        <SearchFilter/>     
      </div>
      <div className="modalbtn">  
        <Modal/>
      </div>
    </div>
    
    <div className="App">
      <TableComponent/>
    </div>
    </Fragment>
  );
}

export default App;

