type Person = {
    vorname: string;
    nachname: string;
    //dateOfBirth: new Date(),
    strasse: string;
    plz: string;
    stadt: string;
    land: string;
    telefon: string;
  };
  
  interface Props {
    allPersonData: Person;
  }

  export default function PersonalView ({allPersonData}: Props) {
    return (
        <>
        <h2 id="pHead">Persönliche Daten</h2>
        <ul id="personalView">
            <li>{allPersonData.vorname}</li>
            <li>{allPersonData.nachname}</li>
            <li>{allPersonData.strasse}</li>
            <li>{allPersonData.plz}</li>
            <li>{allPersonData.stadt}</li>
            <li>{allPersonData.land}</li>
            <li>{allPersonData.telefon}</li>
        </ul>
        </>
      )
  }