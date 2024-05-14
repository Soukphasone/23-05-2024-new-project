import React from "react";
import { Route } from "react-router-dom";
import { DataLocalStorage } from "../helper";
import { useHistory } from "react-router-dom";
import Constants from "../constant"
function PrivateRoute({ component: Component, headerTitle, ...rest }) {
  const History = useHistory();
  const isAuthenticated = DataLocalStorage();
  if (!isAuthenticated) {
    History.push(Constants.LOGIN);
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
