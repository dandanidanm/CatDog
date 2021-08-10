import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { theme } from "../styles/theme";
import AdopcionHome from "../container/AdopcionHome";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';


const AppRouter = () => {

  return (
    <ChakraProvider theme={theme}>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/login' />
                <Route exact path='/pets' component={AdopcionHome} />
                <Route exact path='/' />
            </Switch>
            <Redirect to='/' />
        </Router>
    </ChakraProvider>
  )
}

export default AppRouter;