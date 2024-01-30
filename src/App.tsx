import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import PersonalData from "./Components/PersonalData";
import SchoolData from "./Components/SchoolData";
import WorkData from "./Components/WorkData";


type Schools = {
  abschluss: string;
  nameSchule: string;
  fach: string;
  datumAbschluss: string;
};

type Workplaces = {
  firmenname: string;
  position: string;
  aufgaben: string;
  start: string;
  ende: string
};

function App() {

  const initPerson = {
    vorname: "",
    nachname: "",
    //dateOfBirth: new Date(),
    strasse: "",
    plz: "",
    land: "",
    telefon: 0,
  }

  const initSingleSchool = {
    abschluss: "",
    nameSchule: "",
    fach: "",
    datumAbschluss: "",
  }

  const initSingleWorkplace = {
    firmenname: "",
    position: "",
    aufgaben: "",
    start: "",
    ende: "",
  }

  const allSchools: Schools[] = []
  const allWorkplaces: Workplaces[] = []

  const [personData, setPersonData] = useState(initPerson);
  const [singleSchoolData, setSingleSchoolData] = useState(initSingleSchool);
  const [singleWorkData, setSingleWorkData] = useState(initSingleWorkplace);

  const handlePersonInputChange = (e:ChangeEvent<HTMLInputElement>, type:string) => {
    setPersonData({ ...personData, [type]: e?.target?.value })
  }

  const handleSchoolInputChange = (e:ChangeEvent<HTMLInputElement>, type:string) => {
    setSingleSchoolData({ ...singleSchoolData, [type]: e?.target?.value })
  }

  const handleWorkInputChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    setSingleWorkData({...singleWorkData, [type]: e.target.value})
  }

  const saveSchool = (e: FormEvent<Element>) => {
    e.preventDefault();
    allSchools.push(singleSchoolData);
    console.log(allSchools)
  }

  const saveWorkplaces = (e: FormEvent<Element>) => {
    e.preventDefault();
    allWorkplaces.push(singleWorkData);
    console.log(allWorkplaces)
  }
  
  return (
    <>
      <PersonalData personData={personData} handleInputChange={handlePersonInputChange}/>
      <SchoolData schoolData={singleSchoolData} handleInputChange={handleSchoolInputChange} schoolToList={(e) => saveSchool(e)}/>
      <WorkData workData={singleWorkData} handleInputChange={handleWorkInputChange} workplacesToList={(e) => saveWorkplaces(e)}/>
    </>
  );
}

export default App;
