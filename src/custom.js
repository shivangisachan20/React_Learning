import {useState} from 'react'


function useCustomCounter() {
  const [count, setCount] = useState(0) //destructured useState
  const increment = () => setCount(count + 1);
  return { count, increment };

}
export default useCustomCounter;
