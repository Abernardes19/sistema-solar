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
    <div className=" bg-gray-6 fixed top-[150px] w-screen">
      <Title headline="Planetas" />
      { allPlanets() }
    </div>
  )
}