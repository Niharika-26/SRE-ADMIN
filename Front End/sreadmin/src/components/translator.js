import { Fragment } from "react"
import Dropdown from "./Dropdown"

const options = [{
    value: 'en',
    label: 'English (Default)',}, {value: 'hi',
    label: 'Hindi',}, {value: 'de',label:"German"}
];



const Translator =()=>{
    return <Fragment><Dropdown  width="200px" default="English (Default)" options={options} /></Fragment>
}

export default Translator