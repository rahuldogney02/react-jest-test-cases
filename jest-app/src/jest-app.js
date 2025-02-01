import { useState } from "react";


const MyJestApp = () =>{
    const [data , setName] = useState("");
    const [btn, setBtn] = useState("");

    function printData(e){
        e.preventDefault();
        const valueData = e.target.value+"Test";
        setName(valueData);
        console.log(data);

    }

    function toggle(){
        setBtn(btn ? '' : "My data is updated"); 
              
    }

    return(
        <>
        <div style={{border: '2px dashed black' , padding:'10px', background:'black' , color:'red',display:'flex'} }>
            <h1>Hello Jest test case</h1>
            <p>DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.</p>
            <img  title='freepik images' width={'100px'} height={'100px'} src="https://img.freepik.com/free-psd/black-ink-splatter-abstract-art-design-graphic_84443-35548.jpg?ga=GA1.1.1057615231.1738340637&semt=ais_hybrid"/>
        </div>
        <div style={{border: '2px dashed black' , padding:'40px', background:'gray' , color:'blue',display:'flex'} }>
            <div>
                <label>First Name</label>
                <input type='text' name="firstname" placeholder="Enter first name" value={data} onChange={printData}  />
            </div>
        </div>
        <div>
            <button onClick={toggle}>Update Data</button>
            <h1>{btn}</h1>
        </div>
        <h2>Snapshot testing</h2>
        </>
    )
}

export default MyJestApp;