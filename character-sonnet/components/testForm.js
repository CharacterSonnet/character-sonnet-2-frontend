import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function TestForm(submitForm) {

  // Character creation and Form States 
  const [charName, setCharName] = useState('');
  const [raceData, setRaceData] = useState({});
  const [classData, setClassData] = useState({});
  const [description, setDescription] = useState('');
  const [characterForm, setCharacterForm] = useState(true);
  const [skillsAttributesForm, setSkillsAttributesForm] = useState(false);
  const [equipmentForm, setEquipmentForm] = useState(false);

  const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
  const races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
  return (
          <Form>
            <Form.Group controlId="characterName">
              <Form.Label className='formLabel'>Character Name:</Form.Label>
              <Form.Control className='formControl' type="text" placeholder="Enter your character's name"/>
            </Form.Group>
            <Form.Group controlId='characterRace'>
              <Form.Label className='formLabel'>Character Race:</Form.Label>
              <Form.Control className='formControl' as="select">
                <option value='0'>Choose a race</option>
                {races.map(race => <option key={race} value={race.toLowerCase()}>{race}</option>)}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="characterClass">
              <Form.Label className='formLabel'>Character Class:</Form.Label>
              <Form.Control className='formControl' as="select" defaultValue="Choose your class!">
                <option>Choose One</option>
                {
                  classes.map(cla =>
                    <option key={cla} value={cla.toLowerCase()}>{cla}</option>
                  )
                }
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="characterDescription">
              <Form.Label className='formLabel'>Description:</Form.Label>
              <Form.Control className='formControl' as="textarea" rows={3} placeholder="Describe your character." />
            </Form.Group>
            <Button variant="primary" type="submit"> Submit </Button>
          </Form>
  );
}

export default TestForm;