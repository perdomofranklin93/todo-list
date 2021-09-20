import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
interface TodoProps {
  id?: string;
  text: string;
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <nav>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={props.text} />
          </ListItemButton>
        </ListItem>
      </nav>
    </Box>
  );
};

export { Todo };
