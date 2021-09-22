import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
  Grid,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { useTodoQueries } from "../../../../services";
import { Box } from "@mui/system";
import * as React from "react";
import { TodoModel } from "../../../../models";
import { preProcessFile } from "typescript";
interface TodoProps {
  id?: string;
  text: string;
  onDelete?: () => void;
  onUpdate?: (todo:Partial<TodoModel>) => void;
}

type Modality = "input" | "view";
type Crud = "_delete" | "edition" | "normal";

const Todo: React.FC<TodoProps> = (props) => {
  const { deleteTodo, updateTodo } = useTodoQueries();

  const [text, setText] = React.useState<string>(props.text);
  const [modality, setModality] = React.useState<Modality>("view");
  const [crud, setCrud] = React.useState<Crud>("normal");

  const deleteMode = () => {
    setCrud("_delete");
  };

  const editionMode = (): void => {
    setCrud("edition");
    setModality("input");
  };

  const clear = (): void => {
    setModality("view");
    setCrud("normal");
  };

  const handleUpdate = async () => {
    const response = await updateTodo({
      id: props.id,
      text: text,
      completed: null,
    });

    if (response)  {
      clear();
      if (props.onUpdate) props.onUpdate( { text: text } )
    }
  };

  const handleDelete = async () => {
    const response = await deleteTodo(props.id as string);

    if (response) {
      clear();
      if (props.onDelete) props.onDelete();
    }
  };

  React.useEffect(() => {
    return clear;
  }, []);

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav>
        <ListItem
          secondaryAction={
            <React.Fragment>
              {crud !== "normal" ? (
                <React.Fragment>
                  <IconButton
                    onClick={() => {
                      switch (crud) {
                        case "_delete":
                          handleDelete();
                          break;
                        case "edition":
                          handleUpdate();
                          break;
                      }
                    }}
                    color={"info"}
                    aria-label="confirm"
                  >
                    <CheckIcon />
                  </IconButton>
                  <IconButton
                    onClick={clear}
                    color={"info"}
                    aria-label="confirm"
                  >
                    <CloseIcon />
                  </IconButton>
                </React.Fragment>
              ) : null}
              {crud === "normal" ? (
                <IconButton
                  onClick={deleteMode}
                  color={"warning"}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              ) : null}
            </React.Fragment>
          }
        >
          {modality === "view" ? (
            <ListItemText
              style={{ cursor: "pointer" }}
              onDoubleClick={editionMode}
              primary={props.text}
            />
          ) : (
            <Grid container item xs={11} direction="column">
              <TextField
                fullWidth
                size="small"
                id="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                label="Tarea"
                name="text"
                onKeyPress={(ev) => {
                  if (ev.key === "Enter") {
                    handleUpdate();
                    ev.preventDefault();
                  }
                }}
                autoFocus
              />
            </Grid>
          )}
        </ListItem>
      </nav>
    </Box>
  );
};

export { Todo };
