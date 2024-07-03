import react, { useEffect, useRef, useState } from "react"

const StopWatch = ()=>{
const [second , setSecond] = useState(0)
const [minute , setMinute] = useState(0)
const [isActive , setIsActive] = useState(false)
const intervalRef = useRef(0)



useEffect(()=>{
 if(isActive){
    intervalRef.current = setInterval(()=>{
        setSecond(prevSecond =>{
            if(prevSecond === 59){
                setMinute(prevMinute => prevMinute + 1)
                return 0
            }else{
                return prevSecond + 1
            }
        })
    },1000)
 }else if(!isActive && intervalRef.current){
    clearInterval(intervalRef.current)
 }

 return ()=> clearInterval(intervalRef.current)
},[isActive])

const handleReset = ()=>{
    setSecond(0)
    setMinute(0)
    setIsActive(false)
}
    return(
        <div >
            <h1>Stopwatch</h1>
            <p>{`Time: ${String(minute)} : ${String(second).padStart(2 , "0")}`}</p>
            <button onClick={()=> setIsActive(prevValue => !prevValue)}>{!isActive ? "Start" : "Stop"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default StopWatch