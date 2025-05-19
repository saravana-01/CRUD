import React, { useEffect, useState } from "react";

type Props = {};

export default function Useeefect({}: Props) {
  const [count, setCount] = useState(0);
  const[user,setUser]=useState()
const add = ()=>{
    setCount(count+1)
    console.log("out renedeer",count)
}
 
const decrease = ()=>{
    setCount(count-1)
    console.log("out renedeer",count)
}
  useEffect(() => {
    
    fetch("https://dummyjson.com/users")
  .then(response => response.json())
    .then((res)=>{setUser(res)})
    console.log(user)
    
  }, []);
  return (
    <>
      <button onClick={decrease} >-</button> {count} <button onClick={add}>+</button>
      <p>{count}</p>


    </>
  );
}
function then(arg0: (res: any) => any) {
  throw new Error("Function not implemented.");
}

