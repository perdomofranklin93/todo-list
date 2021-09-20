import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

const Header = (): React.ReactElement => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Container fixed>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Task List
            </Typography>
            <Button color="inherit">CERRA SESION</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export { Header };
