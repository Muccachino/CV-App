import { ChangeEvent, FormEvent } from "react";

type Workplaces = {
  firmenname: string;
  position: string;
  aufgaben: string;
  start: string;
  ende: string
};

interface Props {
  workData: Workplaces;
  handleInputChange(e: ChangeEvent<HTMLInputElement>, type: string): void;
  workplacesToList(e: FormEvent):void
}

export default function WorkData({ workData, handleInputChange, workplacesToList }: Props) {
  return (
    <>
      <form id="allWorkInputs" onSubmit={(e) => workplacesToList(e)}>
        <h2>Berufslaufbahn</h2>
        <div className="wData">
          <label className="workLabel">Firmenname:</label>
          <input
            className="workInput"
            type="text"
            value={workData.firmenname}
            onChange={(e) => handleInputChange(e, "firmenname")}
          />
        </div>

        <div className="wData">
          <label className="workLabel">Position:</label>
          <input
            className="workInput"
            type="text"
            value={workData.position}
            onChange={(e) => handleInputChange(e, "position")}
          />
        </div>

        <div className="wData">
          <label className="workLabel">Aufgaben:</label>
          <input
            className="workInput"
            type="text"
            value={workData.aufgaben}
            onChange={(e) => handleInputChange(e, "aufgaben")}
          />
        </div>

        <div className="wData">
          <label className="workLabel">Beginn:</label>
          <input
            className="workInput"
            type="text"
            value={workData.start}
            onChange={(e) => handleInputChange(e, "start")}
          />
        </div>

        <div className="wData">
          <label className="workLabel">Ende:</label>
          <input
            className="workInput"
            type="text"
            value={workData.ende}
            onChange={(e) => handleInputChange(e, "ende")}
          />
        </div>
        <button type="submit">Hinzufügen</button>
      </form>
    </>
  );
}