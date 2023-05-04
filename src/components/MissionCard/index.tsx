import { IMissionCard } from "./MissionCard.structure";

export default function MissionCard(props: IMissionCard) {
  return (
    <div>
      <p>{ props.name }</p>
      <p>{ props.year }</p>
      <p>{ props.country }</p>
      <p>{ props.destination }</p>
    </div>
  )
}