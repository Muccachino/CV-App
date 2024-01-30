import { ChangeEvent, FormEvent } from "react";

type Schools = {
  abschluss: string;
  nameSchule: string;
  fach: string;
  datumAbschluss: string;
};

interface Props {
  schoolData: Schools;
  handleInputChange(e: ChangeEvent<HTMLInputElement>, type: string): void;
  schoolToList(e: FormEvent):void
}

export default function SchoolData({ schoolData, handleInputChange, schoolToList }: Props) {
  return (
    <>
      <form onSubmit={(e) => schoolToList(e)}>
        <h2>Schulbildung</h2>
        <div>
          <label>Abschluss</label>
          <input
            type="text"
            value={schoolData.abschluss}
            onChange={(e) => handleInputChange(e, "abschluss")}
          />
        </div>

        <div>
          <label>Name der Bildungseinrichtung</label>
          <input
            type="text"
            value={schoolData.nameSchule}
            onChange={(e) => handleInputChange(e, "nameSchule")}
          />
        </div>

        <div>
          <label>Fach</label>
          <input
            type="text"
            value={schoolData.fach}
            onChange={(e) => handleInputChange(e, "fach")}
          />
        </div>

        <div>
          <label>Datum des Abschlusses</label>
          <input
            type="text"
            value={schoolData.datumAbschluss}
            onChange={(e) => handleInputChange(e, "datumAbschluss")}
          />
        </div>
        <button type="submit">Hinzufügen</button>
      </form>
    </>
  );
}
