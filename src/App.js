import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { SideBar } from "./components/SideBar";
import { Box, Stack } from "@mui/system";

import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
