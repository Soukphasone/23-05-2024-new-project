import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Const from "../constant";

//------------ pages
import Login from "../pages/Login";
import Lobby from "../pages/lobby/Home";

function RouterLink() {
  return (
    <>
      <Router>
        <Switch>
          <PublicRoute exact path={Const.LOGIN} component={Login} />

          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <>
                  <PrivateRoute exact path={Const.AFTER_LOGIN} component={Lobby} />
                  {/* <PrivateRoute exact path={Const.AFTER_LOGIN_MOBILE} component={AfterLoginMobile} />
                  <PrivateRoute exact path={Const.GAME_LIST_MOBILE} component={AfterLoginMobileAllGame} /> */}
                </>
              </React.Fragment>
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default RouterLink;
