import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface TaskProps {
    title: string;
    description: string;
}

const Todo: React.FC<TaskProps> = (props) => {
  return (
    <Accordion variant="outlined">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        {props.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export { Todo };
