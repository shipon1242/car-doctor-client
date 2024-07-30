import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";


const Team = () => {
  const   [teams,setTeam]=useState([])

    useEffect(()=>{
        fetch("team.json")
        .then(res=>res.json())
        .then(data=>{
          
            setTeam(data)
            console.log(teams)
        })


    },[])
    return (
        <div>
            <h3 className="text-xl font-bold text-center mt-24 text-orange-400">Team</h3>
            <div className="text-center mt-6 space-y-5 mb-4 lg:mb-6">
            <h1 className="text-4xl font-semibold ">Meet Our Team</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="lg:flex gap-4 lg:gap-6">
           {
            teams.map(team=> <TeamCard key={team.id} team={team}></TeamCard> )
           }
            </div>
        </div>
    );
};

export default Team;