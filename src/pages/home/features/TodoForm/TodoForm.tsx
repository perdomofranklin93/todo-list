import * as React from "react";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { useTodoQueries } from "../../../../services";
import { ToSnackbar } from "../../../../components";
import { TodoModel } from "../../../../models";
import "./TodoForm.scss";

interface TodoFormProps {
  onAddTodo: (todo: TodoModel) => void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  // Todo Queries hook - GraphQL
  const { createTodo } = useTodoQueries();

  // Refs
  const errorMessageRef = React.useRef<any>();
  const successMessageRef = React.useRef<any>();

  // react hook form
  const { reset, handleSubmit, control, formState } = useForm({
    mode: "onChange",
  });

  /**
   * Handle submit
   * @param {any} data
   */
  const onSubmit = async (data: any, e: any) => {
    const res = await createTodo({ ...data }); // make request

    if (res) {
      successMessageRef.current.open(); // show message
      props.onAddTodo(res); // emite add todo
      reset({ text: "" }); // reset form
    } else {
      errorMessageRef.current.open(); // show error message
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
                defaultValue=""
                control={control}
                rules={{
                  required: true,
                  min: 5,
                  minLength: 5,
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    id="create-input"
                    name="text"
                    label="Crear una nueva tarea"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={!!error}
                    helperText={error ? error.message : null}
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
                id="add-button"
                disableElevation
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
