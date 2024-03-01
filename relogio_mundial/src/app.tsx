import { TimerZoneClock } from "./components/timerZoneClock";
import {useState} from "react"

export function App() {
  const fusoHorarios = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
  ]

  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [fusoHorarioSelecionados, setFusoHorarioSelecionado] = useState([fusoHorarioLocal])

  const addFusoHorario = (e) => {
    const novoFuso = e.target.value;

    if(!fusoHorarioSelecionados.includes(novoFuso)) {
      setFusoHorarioSelecionado([...fusoHorarioSelecionados, novoFuso])
    }
  }

  return (
    <div className="flex items-center justify-center flex-col space-y-10 ">
      <h1 className="w-full bg-sky-400 flex items-center justify-center h-16 text-white font-bold text-4xl">Relógio Mundial ⌚</h1>
      <select 
      onChange={(e)=> addFusoHorario(e)}
      className="p-2 border-2 rounded-lg border-sky-400 ">
        <option value="" disabled selected > Selecione um fuso horário</option>
        {fusoHorarios.map((fuso)=> (
          <option key={fuso} value={fuso}>{fuso}</option>
        ))}
      </select>
      <div>
        {fusoHorarioSelecionados.map((fuso: string)=>(
          <TimerZoneClock key={fuso} timeZone={fuso}/>
          ))}
      </div>
    </div>
  )
}


