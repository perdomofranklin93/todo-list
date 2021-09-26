import * as React from "react";
import { AppBar, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props): React.ReactElement => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 5 }}>
      <Container maxWidth="md">
        <AppBar
          position={"static"}
          elevation={0}
          sx={{ padding: 3 }}
          color={"primary"}>
          <Typography sx={{ marginTop: 5 }} variant="h2" component="div">
            {props.title}
          </Typography>
        </AppBar>
      </Container>
    </Box>
  );
};

export { Header };
