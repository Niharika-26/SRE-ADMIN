import "./App.css";
import { Fragment } from "react";
import TableComponent from "./components/Table";
import SearchFilter from "./components/SearchBar";
import Modal from "./components/Modal";
function App() {
  return ( <Fragment>
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

