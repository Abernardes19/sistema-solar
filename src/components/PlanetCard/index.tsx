import { IPlanetCard } from "./PlanetCard.structure";

export default function PlanetCard(props: IPlanetCard) {
  return (
    <div className=" flex flex-col w-screen sm:w-[25%] items-center gap-2 pb-10">
      <p className="text-white">{ props.planetName }</p>
      <img className=" w-[300px]" src={ props.planetImage } alt={ `Planeta ${props.planetName}` } />
    </div>
  )
}