"use server";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { IconButton } from "@mui/material";
import { ScrollDown } from "./ScrollDown";
import { ScrollUp } from "./ScrollUp";

export const ScrollButton = () => {
  return (
    <>
      <ScrollDown>
        <IconButton color="primary" size="large">
          <KeyboardDoubleArrowUpIcon />
        </IconButton>
      </ScrollDown>
      <ScrollUp>
        <IconButton color="primary" size="large">
          <KeyboardDoubleArrowDownIcon />
        </IconButton>
      </ScrollUp>
    </>
  );
};
