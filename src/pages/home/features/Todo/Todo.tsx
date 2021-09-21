import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
  IconButton,
  ListItem,
  ListItemText
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
interface TodoProps {
  id?: string;
  text: string;
}

type Modality = "input" | "view";
type Crud = "_delete" | "edition" | "normal";

const Todo: React.FC<TodoProps> = (props) => {
  const [modality, setModality] = React.useState<Modality>("view");
  const [crud, setCrud] = React.useState<Crud>("normal");

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav>
        <ListItem
          secondaryAction={
            <>
              {crud !== "normal" ? (
                <>
                  <IconButton 
                    onClick={() => {

                    }}
                    color={"info"} 
                    aria-label="confirm">
                    <CheckIcon />
                  </IconButton>
                  <IconButton onClick={() => {
                    setCrud("normal");
                   }} color={"info"} aria-label="confirm">
                    <CloseIcon />
                  </IconButton>
                </>
              ) : null}
              {crud === "normal" ? (
                <IconButton
                  onClick={() => {
                    setCrud("_delete");
                  }}
                  color={"warning"}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              ) : null}
            </>
          }
        >
          <ListItemText 
            style={{ cursor:"pointer" }}
            onDoubleClick={() => {
             console.log("se ha hecho doble click")
          }} primary={props.text} />
        </ListItem>
      </nav>
    </Box>
  );
};

export { Todo };
