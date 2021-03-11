import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@material-ui/core";

import AuthRouter from "../routeComponents/auth/AuthRouter";
import { AuthContextComponent } from "../contexts/authContext";
import Home from "../routeComponents/Home/Home";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <AuthContextComponent>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={AuthRouter} />
          </Switch>
        </AuthContextComponent>
      </Container>
    </BrowserRouter>
  );
}

export default App;
