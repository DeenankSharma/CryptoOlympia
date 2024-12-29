import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "./components/ThemeProvider";
import { useAuth } from "./context/AuthContext";
import { ProfilePage } from "./pages/ProfilePage";

export default function AppRouter(){
  const {userLoggedIn} = useAuth()
 return(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
          <Route element={<LandingPage />} path="/"></Route>
          <Route element={userLoggedIn ? <ProfilePage />:<LandingPage/>} path="/profile"></Route>
          </Routes>
        </Router>
    </ThemeProvider>
 )
}