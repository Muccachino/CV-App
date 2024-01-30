import { ChangeEvent } from "react";

type Person = {
  vorname: string;
  nachname: string;
  //dateOfBirth: new Date(),
  strasse: string;
  plz: string;
  land: string;
  telefon: number;
};

interface Props {
  personData: Person;
  handleInputChange(e: ChangeEvent<HTMLInputElement>, type: string): void
}

export default function PersonalpersonData({ personData, handleInputChange }: Props) {

  return (
    <>
      <form>
        <h2>Persönliche Daten</h2>
        <div>
          <label>Vorname</label>
          <input
            type="text"
            name="vorname"
            value={personData.vorname}
            onChange={(e) => handleInputChange(e, "vorname")}
          />
        </div>
        <div>
          <label>Nachname</label>
          <input
            type="text"
            value={personData.nachname}
            onChange={(e) => handleInputChange(e, "nachname")}
          />
        </div>
        {/*         <div>
          <label>Date of Birth</label>
          <input
            type="date"
            value={personData.dateOfBirth.toString()}
            onChange={(e) => handleInputChange(e, "dateOfBirth")}
          />
        </div> */}
        <div>
          <label>Straße</label>
          <input
            type="text"
            value={personData.strasse}
            onChange={(e) => handleInputChange(e, "strasse")}
          />
        </div>
        <div>
          <label>PLZ</label>
          <input
            type="text"
            value={personData.plz}
            onChange={(e) => handleInputChange(e, "plz")}
          />
        </div>
        <div>
          <label>Land</label>
          <input
            type="text"
            value={personData.land}
            onChange={(e) => handleInputChange(e, "land")}
          />
        </div>
        <div>
          <label>Telefonnummer</label>
          <input
            type="text"
            value={personData.telefon}
            onChange={(e) => handleInputChange(e, "telefon")}
          />
        </div>
      </form>
    </>
  );
}
