import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Center from "./Center";
import Spin from "./Spin";
const Home = lazy(() => import('../pages/Home'));
const Repository = lazy(() => import('../pages/Repository'));

const AppRouter = () => <Suspense fallback={<Center><Spin/></Center>}>
  <Router>
    <Route key={"/"} exact={true} path={"/"} component={Home} />
    <Route key={"/repository/:owner/:reponame"} path={"/repository/:owner/:reponame"} component={Repository} />
  </Router>
</Suspense>;

export default AppRouter;
