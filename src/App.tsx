import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { NodebRouter } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { AuthenticationContextProvider } from "./contexts/AuthenticationContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthenticationContextProvider>
          <NodebRouter />
        </AuthenticationContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
