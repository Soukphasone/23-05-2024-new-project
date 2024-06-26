import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Const, { TYPE_GAME } from "../constant";

//------------ pages
import Login from "../pages/Login";
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
import UploadSleep from "../pages/lobby/UploadSleep";

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
                  <PrivateRoute exact path={Const.TYPE_GAME} component={GameType} />
                  <PrivateRoute exact path={Const.PROFILE} component={Profile} />
                  <PrivateRoute exact path={Const.PROMOTION} component={Promotion} />
                  <PrivateRoute exact path={Const.DEPOSIT_WITHDRAW} component={DepositWithdraw} />
                  <PrivateRoute exact path={Const.DEPOSIT} component={Deposit} />
                  <PrivateRoute exact path={Const.WITHDRAW} component={Withdraw} />
                  <PrivateRoute exact path={Const.BANK_LIST} component={BankList} />
                  <PrivateRoute exact path={Const.BAG } component={Bag} />
                  <PrivateRoute exact path={Const.CASH_BACK } component={Cashback} />
                  <PrivateRoute exact path={Const.UPLOAD_SLEEP } component={UploadSleep} />
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
