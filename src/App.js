import "./App.css";
import { CssBaseline, Paper, Switch ,Box} from "@mui/material";
import TodoContainer from "./components/TodoContainer";
 import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Container } from "@mui/system";

function App() {
  const[darkMode , setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <div className="App">
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        CHANGE THEME
        <TodoContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
