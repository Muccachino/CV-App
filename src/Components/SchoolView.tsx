
type Schools = {
  abschluss: string;
  nameSchule: string;
  fach: string;
  datumAbschluss: string;
};

interface Props {
  allSchools: Schools[]
  removeSchool(name: string): void
}



export default function SchoolView({allSchools, removeSchool}: Props) {
  return (
    <>
      <h2 id="sHead">Schulbildung</h2>
      {allSchools.map(school => {
        return (
          <ul className="singleSchool" key={school.nameSchule}>
            <li className="sViewData">{school.nameSchule}</li>
            <li className="sViewData">{school.fach}</li>
            <li className="sViewData">{school.abschluss}</li>
            <li className="sViewData">{school.datumAbschluss}</li>
            <button onClick={() => removeSchool(school.nameSchule)}>Löschen</button>
          </ul>
        )
      })}
    </>
  )
}