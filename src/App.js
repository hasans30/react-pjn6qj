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
      <Child h2='v1'
      cDate={parentState.cDate} 
      cName={parentState.cName}
      cEmail={parentState.cEmail}
      onChange={onChange}
      />
    </div>
  );
}
