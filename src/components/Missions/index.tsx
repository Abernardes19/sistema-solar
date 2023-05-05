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
    <div className=" bg-gray-5 text-white flex flex-col items-center">
        <Title headline="Missões" />
        <div className=" lg:w-[80%] flex flex-wrap justify-center">
          { setMissions() }
        </div>
      </div>
  )
}