import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Center from "./Center";
import Spin from "./Spin";
const Home = lazy(() => import('../pages/Home'));

const AppRouter = () => <Suspense fallback={<Center><Spin/></Center>}>
  <Router>
    <Route key={"/"} exact={false} path={"/"} component={Home} />
  </Router>
</Suspense>;

export default AppRouter;
