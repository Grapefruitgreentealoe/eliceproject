
import React from "react";

export default function RadioInput({onClick,name,values,state}){
    return(
        <div>
            {
                values.map((value)=>
                (
                    <div key={value.num}>
                        {value.label}
                        <input name={name} defaultChecked={value.num === state} onClick = {onClick} type="radio" value={value.num}/>
                    </div>
                ))
            }
        </div>
    )
}

