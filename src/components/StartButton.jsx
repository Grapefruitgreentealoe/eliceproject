import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./page-layout.css"

export default function StartButton({state,username,presentURL,nextURL}){
    return(
        <Link
        to={state && username ? {nextURL} : {presentURL}}
        style={{ color: "white" }}
      >
        <nav className="navigation">
          <button>검사시작</button>
        </nav>
      </Link>
    );
}