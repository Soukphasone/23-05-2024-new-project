import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import {
  DataLocalStorage,
  TokenLocalStorage,
  LogoutClearLocalStorage,
} from "../helper";
// import { CheckTokenExpire } from "../api/getdatauser.js";
import { useHistory } from "react-router-dom";
import Constant from "../constant";
import { isSessionExpired } from "../utils/sessionCheck";
function PrivateRoute({ component: Component, headerTitle, ...rest }) {
  const history = useHistory();
  const sessionExpireDate = localStorage.getItem(Constant.TOKEN_EXPIRE);
  const isAuthenticated = DataLocalStorage();
  useEffect(() => {
    const getTokenExpire = async () => {
      if (isSessionExpired(sessionExpireDate)) {
        // LogoutClearLocalStorage();
      } else {
      }
    };
    getTokenExpire();
  }, [sessionExpireDate]);
  if (!isAuthenticated) {
    window.location.href = (Constant.LOG_OUT);
    // history.push('/login')
    return <div></div>;
  } else {
    return (
      <Route
        {...rest}
        render={(props) => (
          <div>
            <Component {...props} />
          </div>
        )}
      />
    );
  }
}
export default PrivateRoute;
