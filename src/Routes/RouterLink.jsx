import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Const from "../constant";

//------------ pages
import Login from "../pages/home/Login";
import Lobby from "../pages/lobby/Home";
import GameType from "../pages/lobby/GameType";
import Profile from "../pages/lobby/Profile";
import Promotion from "../pages/lobby/Promotion";
import DepositWithdraw from "../pages/lobby/DepositWithdraw";
import Deposit from "../pages/lobby/Deposit";
import BankList from "../pages/lobby/BankList";
import Withdraw from "../pages/lobby/Withdraw";
import Bag from "../pages/lobby/Bag";
import Cashback from "../pages/lobby/Cashback";
import Upslip from "../pages/lobby/UploadSlip";
import Wheel from "../pages/lobby/Wheel";
import Affiliate from "../pages/lobby/Affiliate";
import Home from "../pages/home/Home";
function RouterLink() {
  return (
    <>
      <Router>
        <Switch>
          <PublicRoute exact path={Const.LOGIN} component={Login} />
          <PublicRoute exact path={Const.PAGE_LOGIN_CAN_LOGIN_PLAY + "/:token"} component={Home} />
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <>
                  {/* <PublicRoute
                    exact
                    path={Const.PAGE_LOGIN_CAN_LOGIN_PLAY + "/:token"}
                    component={Home}
                  /> */}

                  <PrivateRoute
                    exact
                    path={Const.AFTER_LOGIN}
                    component={Lobby}
                  />
                  <PrivateRoute
                    exact
                    path={Const.TYPE_GAME}
                    component={GameType}
                  />
                  <PrivateRoute
                    exact
                    path={Const.PROFILE}
                    component={Profile}
                  />
                  <PrivateRoute
                    exact
                    path={Const.PROMOTION}
                    component={Promotion}
                  />
                  <PrivateRoute
                    exact
                    path={Const.DEPOSIT_WITHDRAW}
                    component={DepositWithdraw}
                  />
                  <PrivateRoute
                    exact
                    path={Const.DEPOSIT}
                    component={Deposit}
                  />
                  <PrivateRoute
                    exact
                    path={Const.WITHDRAW}
                    component={Withdraw}
                  />
                  <PrivateRoute
                    exact
                    path={Const.BANK_LIST}
                    component={BankList}
                  />
                  <PrivateRoute exact path={Const.BAG} component={Bag} />
                  <PrivateRoute
                    exact
                    path={Const.CASH_BACK}
                    component={Cashback}
                  />
                  <PrivateRoute
                    exact
                    path={Const.UPLOAD_SLIP}
                    component={Upslip}
                  />
                  <PrivateRoute exact path={Const.WHEEL} component={Wheel} />
                  <PrivateRoute
                    exact
                    path={Const.AFFILIATE}
                    component={Affiliate}
                  />
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
