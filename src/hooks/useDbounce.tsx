import {useState,useEffect} from 'react'

function useDebounce(val:any,delay = 300){
  const [debounceValue , setDebounceValue] = useState(val)
  useEffect(()=>{
      const hanlder = window.setTimeout(()=>{
          setDebounceValue(val)
      },delay)
      return ()=>{
          clearTimeout(hanlder)
      }
  },[val,delay])
  return debounceValue
}
export default useDebounce
