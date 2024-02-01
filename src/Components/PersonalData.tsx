import { ChangeEvent } from "react";

type Person = {
  vorname: string;
  nachname: string;
  dateOfBirth: string;
  strasse: string;
  plz: string;
  stadt: string;
  land: string;
  telefon: string;
};

interface Props {
  personData: Person;
  handleInputChange(e: ChangeEvent<HTMLInputElement>, type: string): void
}

export default function PersonalpersonData({ personData, handleInputChange }: Props) {

  return (
    <>
      <form id="personalInputs">
        <h2>Persönliche Daten</h2>
        <div className="pData">
          <label className="personalLabel">Vorname:</label>
          <input
            className="personalInput"
            type="text"
            name="vorname"
            value={personData.vorname}
            onChange={(e) => handleInputChange(e, "vorname")}
          />
        </div>
        <div className="pData">
          <label className="personalLabel">Nachname:</label>
          <input
            className="personalInput"
            type="text"
            value={personData.nachname}
            onChange={(e) => handleInputChange(e, "nachname")}
          />
        </div>
        <div className="pData">
          <label className="personalLabel">Geburtsdatum</label>
          <input
            className="personalInput"
            type="date"
            value={(personData.dateOfBirth).toString()}
            onChange={(e) => handleInputChange(e, "dateOfBirth")}
          />
        </div>
        <div className="pData">
          <label className="personalLabel">Straße:</label>
          <input
            className="personalInput"
            type="text"
            value={personData.strasse}
            onChange={(e) => handleInputChange(e, "strasse")}
          />
        </div>
        <div className="pData">
          <label className="personalLabel">PLZ:</label>
          <input
            className="personalInput"
            type="text"
            value={personData.plz}
            onChange={(e) => handleInputChange(e, "plz")}
          />
        </div>
        <div className="pData">
          <label className="personalLabel">Stadt:</label>
          <input
            className="personalInput"
            type="text"
            value={personData.stadt}
            onChange={(e) => handleInputChange(e, "stadt")}
          />
        </div>
        <div className="pData">
          <label className="personalLabel">Land:</label>
          <input
            className="personalInput"
            type="text"
            value={personData.land}
            onChange={(e) => handleInputChange(e, "land")}
          />
        </div>
        <div className="pData">
          <label className="personalLabel">Telefonnummer:</label>
          <input
            className="personalInput"
            type="text"
            value={personData.telefon}
            onChange={(e) => handleInputChange(e, "telefon")}
          />
        </div>
      </form>
    </>
  );
}
