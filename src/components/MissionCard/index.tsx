import { IMissionCard } from "./MissionCard.structure";
import { BsDot} from "react-icons/bs";

export default function MissionCard(props: IMissionCard) {
  return (
    <div className=" flex flex-col border-[1px] p-[5px] items-center sm:w-[25%] w-screen m-2 rounded-xl h-[250px] justify-center">
      <div className=" w-[80%] flex flex-col gap-2" data-testid="missions">
        <div className=" flex items-center gap-[5px]">
          <BsDot className=" min-w-[20px]" size={20} />
          <p id="name" data-testid="mission-name">{ `Nome: ${props.name}` }</p>
        </div>
        <div className=" flex items-center gap-[5px]">
          <BsDot className=" min-w-[20px]" size={20} />
          <p id="year" data-testid="mission-year">{ `Ano: ${props.year}` }</p>
        </div>
        <div className=" flex items-center gap-[5px]">
          <BsDot className=" min-w-[20px]" size={20} />
          <p id="country" data-testid="mission-country">{ `País: ${props.country}` }</p>
        </div>
        <div className=" flex items-center gap-[5px]">
          <BsDot className=" min-w-[20px]" size={20} />
          <p id="destination" data-testid="mission-destination">{ `Destino: ${props.destination}` }</p>
        </div>
      </div>
    </div>
  )
}