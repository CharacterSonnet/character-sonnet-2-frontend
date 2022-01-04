import axios from "axios";
import { useState } from "react";

formOneOnSubmit = async (e) => {

    const [name, setName] = useState('');
    const [raceData, setRaceData] = useState({});
    const [classData, setClassData] = useState({});

    e.preventDefault();
    let characterName = e.target.CharacterName.value;
    let chosenRace = e.target.characterRace.value;
    let chosenClass = e.target.characterClass.value;
    let description = e.target.characterDescription.value;

    setName(characterName);
    setRaceData(axios.get(`${process.env.PORT}/race?race=${chosenRace}`));
    setClassData(axios.get(`${proccess.env.PORT}/class?charClass=${chosenClass}`));

    return {name, raceData, classData};
  } 

  export default formOneOnSubmit;
  