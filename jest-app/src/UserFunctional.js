import { useState } from "react";
import handleOtherData from './helper';

function UserFunction(){
    
    const [data, setData] = useState('___');
    const handleData=()=>{
        let val = "User"
        setData(val);
    }

    // const handleOtherData = () =>{
    //     console.log("hi")
    //     return "hi"
    // } This function is exported from other file for test-cases

    return(
        <>
        <h1>Hello {data}</h1>
        <button data-testid='btn1' onClick={handleData}>Click me</button> {/* testing of method using event */}
        <button  onClick={handleOtherData}>Click me for other data</button> 
        </>
    );
    
}


export default UserFunction;