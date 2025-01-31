

const MyJestApp = ()=>{
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
                <input type='text' placeholder="Enter first name" name="firstname" />
            </div>
        </div>
        </>
    )
}

export default MyJestApp;