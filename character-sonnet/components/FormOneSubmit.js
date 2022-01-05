import axios from "axios";
import { useState } from "react";

// Handles the user input for character name, race, and class. Two querys to backend 
formOneOnSubmit = async (e, name, race, charClass, description) => {

    e.preventDefault();
    let charName = e.target.CharacterName.value;
    let chosenRace = e.target.characterRace.value;
    let chosenClass = e.target.characterClass.value;
    let charDescription = e.target.characterDescription.value;

    let raceData = axios.get(`${process.env.PORT}/race?race=${chosenRace}`);
    let classData = axios.get(`${proccess.env.PORT}/class?charClass=${chosenClass}`);

    name = charName;
    race = raceData;
    charClass = classData;
    description = charDescription;
} 

  export default formOneOnSubmit;
  