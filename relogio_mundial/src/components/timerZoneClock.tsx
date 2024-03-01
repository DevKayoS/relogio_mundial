import { useEffect, useState } from "react"

interface Props {
  timeZone: string
}


export function TimerZoneClock({timeZone}: Props){

  const [time, setTime] = useState("")

  useEffect(()=>{
    const intervalId = setInterval(()=> {
      const date = new Date()

      const options = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }

      const timeString = date.toLocaleTimeString("en-US", options)

      setTime(timeString)

    },1000)


  },[timeZone])

  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <div className="flex items-center justify-center flex-col mb-10 bg-zinc-500/30 shadow-md shadow-black border-2 w-72 h-20 rounded-md">
        <h2 className="text-2xl font-bold">{timeZone}</h2>
        <h3 className="text-xl font-bold">{time}</h3>

      </div>
    </div>
  )
}