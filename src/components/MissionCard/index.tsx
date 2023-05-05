import { IMissionCard } from "./MissionCard.structure";
import { BsDot} from "react-icons/bs";

export default function MissionCard(props: IMissionCard) {
  return (
    <div className=" flex flex-col border-[1px] p-[5px] items-center sm:w-[25%] w-screen m-2 rounded-xl h-[250px] justify-center">
      <div className=" w-[80%] flex flex-col gap-2">
        <div className=" flex items-center gap-[5px]">
          <BsDot className=" min-w-[20px]" size={20} />
          <p>{ `Nome: ${props.name}` }</p>
        </div>
        <div className=" flex items-center gap-[5px]">
          <BsDot className=" min-w-[20px]" size={20} />
          <p>{ `Ano: ${props.year}` }</p>
        </div>
        <div className=" flex items-center gap-[5px]">
          <BsDot className=" min-w-[20px]" size={20} />
          <p>{ `País: ${props.country}` }</p>
        </div>
        <div className=" flex items-center gap-[5px]">
          <BsDot className=" min-w-[20px]" size={20} />
          <p>{ `Destino: ${props.destination}` }</p>
        </div>
      </div>
    </div>
  )
}