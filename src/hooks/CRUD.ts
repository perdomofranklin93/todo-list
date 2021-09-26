import * as React from "react";

type Modality = "input" | "view";
type CRUD = "create" | "_delete" | "edit" | "normal";

const useCRUD = () => {
  const [modality, setModality] = React.useState<Modality>("view");
  const [crud, setCrud] = React.useState<CRUD>("normal");

  const deleteMode = () => setCrud("_delete")

  const editionMode = () => {
    setCrud("edit");
    setModality("input");
  }

  const normalMode = () => {
    setModality("view");
    setCrud("normal");
  }

  const creationMode = () => {
    setCrud("create");
    setModality("input");
  }

  return {
    modality,
    setModality,
    crud,
    setCrud,
    deleteMode,
    editionMode,
    normalMode,
    creationMode,
  };
};

export { useCRUD };
