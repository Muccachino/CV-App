type Workplaces = {
    firmenname: string;
    position: string;
    aufgaben: string;
    start: string;
    ende: string
  };
  
  interface Props {
    allWorkplaces: Workplaces[]
    removeWork(name: string): void
  }


export default function WorkView({allWorkplaces, removeWork}: Props) {
    return (
      <>
      <h2 id="wHead">Berufslaufbahn</h2>
        {allWorkplaces.map(work => {
          return (
            <ul key={work.firmenname}>
              <li>{work.firmenname}</li>
              <li>{work.position}</li>
              <li>{work.aufgaben}</li>
              <li>{work.start}</li>
              <li>{work.ende}</li>
              <button onClick={() => removeWork(work.firmenname)}>Löschen</button>
            </ul>
          )
        })}
      </>
    )
  }