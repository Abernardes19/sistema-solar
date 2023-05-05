import Planets from "../../data/planets"
import PlanetCard from "../PlanetCard";
import Title from "../Title";

export default function SolarSystem() {
  const allPlanets = () => {
    const data = Planets.map((e) => (
      <PlanetCard
        planetName={ e.name }
        planetImage={ e.image }
        key={ e.name }
      />
    ));
    return data;
  }
  return (
    <div className=" flex flex-col bg-gray-6 mt-[150px] w-screen items-center gap-10 pb-20 border-b-[1px]">
      <Title headline="Planetas" />
      <div className="flex flex-wrap w-screen sm:w-[50%]">
        { allPlanets() }
      </div>
    </div>
  )
}