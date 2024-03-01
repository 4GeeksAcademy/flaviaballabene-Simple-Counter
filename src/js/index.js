//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import CountDown from "./component/countdown.jsx";

//render your react application
ReactDOM.render(<Home 
reset={"Reset"}
stop={"Stop"}
resume={"Resume"}/>, document.querySelector("#app"));
ReactDOM.render(<CountDown 
reset={"Reset"}
stop={"Stop"}
resume={"Resume"}
/>, document.querySelector("#app2"));