import React from "react";
import {DatePicker} from "@fluentui/react";

export default function Child({h2,cDate,cName,cEmail,onChange}) {


  const myChangeHandler=(newDate)=>{
    onChange(newDate);
  };
  return (<>
  <h2>{h2}</h2>
  <input type="text" id="name" name="name" value={cName} />

   <DatePicker label="Start date" value={cDate}
 onSelectDate={myChangeHandler}  /> 
    <input type="email" id="email" name="email" placeholder={"email@domain.om"} value={cEmail}/>
  <div>New Value {cDate?.toString()}</div>
  <button > my button </button>
  </>
  );
} 
