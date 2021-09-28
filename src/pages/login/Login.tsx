import * as React from "react";
import { authClient } from "../../services/aws/AuthClient";

export default function Login(): React.ReactElement {
  React.useEffect(() => {
    const init = async () => {
      if (!authClient.checkIsAuthorized()) {
        authClient.authorize();
      }
    };
    init();
  }, []);

  return (
    // <Container component="main" maxWidth="xs">
    //   <CssBaseline />
    //   <Box
    //     sx={{
    //       marginTop: 8,
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
    //     <Typography component="h1" variant="h5">
    //       Iniciar sesión
    //     </Typography>
    //     <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         size="small"
    //         id="email"
    //         label="Correo"
    //         name="email"
    //         autoComplete="email"
    //         autoFocus
    //       />
    //       <TextField
    //         size="small"
    //         margin="normal"
    //         required
    //         fullWidth
    //         name="password"
    //         label="Contraseña"
    //         type="password"
    //         id="password"
    //         autoComplete="current-password"
    //       />
    //       <Button
    //         disableElevation
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         sx={{ mt: 3, mb: 2 }}>
    //         INICIAR
    //       </Button>
    //     </Box>
    //   </Box>
    // </Container>
    <></>
  );
}
