import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import {
  Checkbox,
  Grid,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { useTodoQueries } from "../../../../services";
import { Box } from "@mui/system";
import { TodoModel } from "../../../../models";

import * as React from "react";
interface TodoProps {
  data: TodoModel;
  onDelete?: () => void;
  onUpdate?: (todo: Partial<TodoModel>) => void;
  onToggle?: (todo: Partial<TodoModel>) => void;
}

type Modality = "input" | "view";
type Crud = "_delete" | "edition" | "normal";

const Todo: React.FC<TodoProps> = (props): React.ReactElement => {
  const { deleteTodo, updateTodo, toggleTodo } = useTodoQueries();

  const [text, setText] = React.useState<string>(props.data.text);
  const [modality, setModality] = React.useState<Modality>("view");
  const [crud, setCrud] = React.useState<Crud>("normal");

  const deleteMode = () => {
    setCrud("_delete");
  };

  const editionMode = () => {
    setCrud("edition");
    setModality("input");
  };

  const clear = () => {
    setModality("view");
    setCrud("normal");
  };

  const handleUpdate = async () => {
    const response = await updateTodo({
      id: props.data.id,
      text: text,
      completed: null,
    });

    if (response) {
      clear();
      if (props.onUpdate) props.onUpdate({ text: text });
    }
  };

  const handleDelete = async () => {
    const response = await deleteTodo(props.data.id as string);

    if (response) {
      clear();
      if (props.onDelete) props.onDelete();
    }
  };

  const handleToggle = async () => {
    const response = await toggleTodo({
      ...props.data,
      completed: !props.data.completed,
    });

    if (props.onToggle) props.onToggle(response);
  };

  React.useEffect(() => {
    return clear;
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
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
                <React.Fragment>
                  <IconButton
                    onClick={editionMode}
                    color={"default"}
                    aria-label="delete"
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    onClick={deleteMode}
                    color={"default"}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </React.Fragment>
              ) : null}
            </React.Fragment>
          }
        >
          <ListItemIcon
            sx={{ width: "auto", minWidth: "auto", marginRight: 1 }}
          >
            <Checkbox
              color={"success"}
              edge="start"
              size="medium"
              checked={props.data.completed as boolean}
              tabIndex={-1}
              onChange={handleToggle}
              disableRipple
            />
          </ListItemIcon>

          {modality === "view" ? (
            <ListItemText
              style={{
                cursor: "pointer",
                textDecoration: props.data.completed
                  ? "line-through"
                  : "initial",
              }}
              onDoubleClick={editionMode}
              primary={props.data.text}
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
