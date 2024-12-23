import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import { ThemeProvider } from "./components/ThemeProvider";

export default function AppRouter(){

 return(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
          <Route element={<LandingPage />} path="/"></Route>
          <Route element={<LoginPage />} path="/login"></Route>
          </Routes>
        </Router>
    </ThemeProvider>
 )
}