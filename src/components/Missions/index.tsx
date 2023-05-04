import MissionCard from "../MissionCard";
import Missions from "../../data/missions"
import Title from "../Title";

export default function Mission() {
  const setMissions = () => {
    const dados = Missions.map((e) => (
      <MissionCard
        name={ e.name }
        year={ e.year }
        country={ e.country }
        destination={ e.destination }
        key={ e.name }
      />
    ));
    return dados;
  }
  return (
    <div>
        <Title headline="Missões" />
        <div>
          { setMissions() }
        </div>
      </div>
  )
}