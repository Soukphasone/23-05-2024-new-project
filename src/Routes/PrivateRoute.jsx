import React, { useEffect} from 'react';
import { Route } from "react-router-dom";
import { DataLocalStorage, TokenLocalStorage, LogoutClearLocalStorage} from "../helper";
import { CheckTokenExpire } from "../api/getdatauser.js";
import { useHistory } from "react-router-dom";
import Constant from "../constant"
import { isSessionExpired } from '../utils/sessionCheck';
function PrivateRoute({ component: Component, headerTitle, ...rest }) {
  const History = useHistory();
  const _token = TokenLocalStorage()
  const isAuthenticated = DataLocalStorage();
  useEffect(() => {
    const getTokenExpire = async () => {
      const sessionExpireDate = await CheckTokenExpire(_token);
    if (isSessionExpired(sessionExpireDate)) {
      LogoutClearLocalStorage();
    }else{
    }
    };
    getTokenExpire();
  }, [_token]);
  if (!isAuthenticated) {
    History.push(Constant.LOGIN);
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
