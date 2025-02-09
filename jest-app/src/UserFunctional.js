import { useState } from "react";


function UserFunction(){
    
    const [data, setData] = useState('___');
    const handleData=()=>{
        let val = "User"
        setData(val);
    }

    return(
        <>
        <h1>Hello {data}</h1>
        <button data-testid='btn1' onClick={handleData}>Click me</button> {/* testing of method using event */}

        </>
    );
    
}


export default UserFunction;