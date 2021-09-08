import { BrowserRouter,Switch,Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Header from "../components/header/Header";

function AppRouter() {
    return(
        <BrowserRouter>
            <Switch>
                <Navbar/>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
            </Switch>
            <Header/>
        </BrowserRouter>
    )
}
export default AppRouter