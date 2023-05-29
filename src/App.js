import React from "react";
import Child from './Child';
import "./style.css";

export default function App() {
  const [parentState,setParentState]=React.useState({
    cName:"Hasan", cEmail:"hasan@live.com", cDate:new Date("2023-04-14")
  })

  const onChange=React.useCallback((newDate)=>{
    setParentState({...parentState,cDate:(newDate)});
  });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h2>{'v1'}</h2>
  <input type="text" id="name" name="name" value={parentState.cName} />
      <Child 
      cDate={parentState.cDate} 
      cName={parentState.cName}
      cEmail={parentState.cEmail}
      onChange={onChange}
      />
          <input type="email" id="email" name="email" placeholder={"email@domain.om"} value={parentState.cEmail}/>
          <div>New Value {parentState.cDate?.toString()}</div>
  <button > my button </button>
    </div>
  );
}
