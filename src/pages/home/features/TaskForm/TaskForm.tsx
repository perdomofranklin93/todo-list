import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import "./TaskForm.scss";

const TaskForm = () => {
  return (
      <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 5 }}>
        <Card variant="outlined">
          <CardContent>
            <Grid container className="flex-center">
              <Grid
                container
                item
                xs={10}
                direction="column"
                sx={{
                  pr: 1,
                }}
              >
                <TextField
                  size="small"
                  fullWidth
                  id="task"
                  label="Crear una nueva tarea"
                  name="task"
                  autoComplete="email"
                />
              </Grid>
              <Grid
                container
                item
                xs={2}
                direction="column"
                sx={{
                  pl: 1,
                }}
              >
                <Button
                  fullWidth
                  type="button"
                  size={"medium"}
                  variant="contained">
                  AGREGAR
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
  );
};

export { TaskForm };
