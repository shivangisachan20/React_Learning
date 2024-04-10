import React, {useState ,useEffect} from 'react';

function App(){
    const[count,setCount] = useState(0);
    const[count1,setCount1] = useState(100);
    const handleDecerement = () => {
        setCount1(count1-1);
    }
    useEffect(()=> {
    console.log('useEffect');
    },[count]);
    return(
        <React.Fragment>
            <h1> Count Up:{count}</h1>
            <button type="button" onClick={()=>setCount(count+1)}>Count Up</button>

            <h1> Count Down:{count1}</h1>
            <button type="button" onClick={handleDecerement}>Count Down</button>
        </React.Fragment>


    )
}
export default App;
