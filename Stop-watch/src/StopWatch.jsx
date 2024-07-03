import react, { useEffect, useRef, useState } from "react"

const StopWatch = ()=>{
const [elapsedTime , setElapsedTime] = useState(0)
const [isActive , setIsActive] = useState(false)
const intervalRef = useRef(0)



useEffect(()=>{
 if(isActive){
    intervalRef.current = setInterval(()=>{
    setElapsedTime(prevElapsedTime => prevElapsedTime +1)
    },1000)
 }else{
    clearInterval(intervalRef.current)
 }

 return ()=> clearInterval(intervalRef.current)
},[isActive])

const handleReset = ()=>{
    setIsActive(false)
    setElapsedTime(0)
}

const timeFormat = (seconds)=>{
    const minute = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minute}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
}
    return(
        <div >
            <h1>Stopwatch</h1>
            <p>Time: {timeFormat(elapsedTime)}</p>
            <button onClick={()=> setIsActive(prevValue => !prevValue)}>{!isActive ? "Start" : "Stop"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default StopWatch