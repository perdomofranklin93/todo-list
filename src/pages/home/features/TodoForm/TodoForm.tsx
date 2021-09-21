import * as React from "react";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { useTodoQueries } from "../../../../services";
import { ToSnackbar } from "../../../../components";
import { TodoModel } from "../../../../models";
import "./TodoForm.scss";

interface TodoFormProps {
  onNewTodo: (todo: TodoModel) => void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  // Todo Queries hook - GraphQL
  const todos = useTodoQueries();

  // Refs
  const errorMessageRef = React.useRef<any>();
  const successMessageRef = React.useRef<any>();

  // React hook form
  const { reset, handleSubmit, control, formState } = useForm({
    mode: "onChange",
  });

  /**
   * Handle submit
   * @param {any} data
   */
  const onSubmit = async (data: any, e: any) => {
    // Send new task request
    const response = await todos.createTodo({ ...data });

    if (response) {
      // Clear
      reset();
      e.target.reset();
      // Show message success
      successMessageRef.current.open();
      // Emit
      props.onNewTodo(response);
    } else {
      // Show message error
      errorMessageRef.current.open();
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 5 }}>
      <ToSnackbar
        ref={errorMessageRef}
        title={"Error al registrar"}
        status={"error"}
        text={"Problemas para crear la tarea!"}
      />
      <ToSnackbar
        ref={successMessageRef}
        title={"Registro exitoso"}
        status={"success"}
        text={"Tarea creada exitosamente!"}
      />
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
              <Controller
                name="text"
                control={control}
                rules={{
                  required: true,
                  min: 5,
                  minLength: 5,
                }}
                render={({ field: { onChange, onBlur } }) => (
                  <TextField
                    onChange={onChange}
                    onBlur={onBlur}
                    size="small"
                    name="text"
                    label="Crear una nueva tarea"
                    fullWidth
                    variant="outlined"
                    error={formState.errors?.text ? true : false}
                  />
                )}
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
                disabled={!formState.isDirty || !formState.isValid}
                fullWidth
                type={"submit"}
                size={"medium"}
                variant={"contained"}
              >
                AGREGAR
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export { TodoForm };
