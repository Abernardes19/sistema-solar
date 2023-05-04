import { IPlanetCard } from "./PlanetCard.structure";

export default function PlanetCard(props: IPlanetCard) {
  return (
    <div>
      <p>{ props.planetName }</p>
      <img src={ props.planetImage } alt={ `Planeta ${props.planetName}` } />
    </div>
  )
}