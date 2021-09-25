import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const TodoSkeleton = () => {
  const mockArray = new Array(10).fill("");
  return (
    <Box sx={{ width: "100%" }}>
      {mockArray.map((item, index) => (
        <Skeleton variant="text"  key={index} height={48} />
      ))}
    </Box>
  );
};

export { TodoSkeleton };
