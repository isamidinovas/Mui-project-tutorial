import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { SideBar } from "./components/SideBar";
import { Box, Stack } from "@mui/system";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Add } from "./components/Add";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar setMode={setMode} mode={mode } />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
