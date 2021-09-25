import { AppBar, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

const Header = (): React.ReactElement => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 5 }}>
      <Container maxWidth="md">
        <AppBar
          position={"static"}
          elevation={0}
          sx={{ padding: 3 }}
          color={"primary"}>
          <Typography sx={{ marginTop: 5 }} variant="h2" component="div">
            Todo Web App
          </Typography>
        </AppBar>
      </Container>
    </Box>
  );
};

export { Header };
