import React from "react";
import { Link } from "react-router-dom";
import "./page-layout.css"

export function NextButton({state,username,presentURL,nextURL,label}){
    return(
        
      <nav className="navigation">
        <Link
        to={state && username ? nextURL : presentURL}
        style={{ color: "white" }}
      >
          <button onClick={() => console.log(state, username)}>
            {label}
          </button>
          </Link>
        </nav>
 
    );
}

export function PreviousButton({state,username,previousURL,presentURL,label}){
    return(
        
      <nav className="navigation">
        <Link
        to={previousURL}
        style={{ color: "white" }}
      >
          <button onClick={() => console.log(state, username)}>{label}</button>
          </Link>
        </nav>
 
    );
}