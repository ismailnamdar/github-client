import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import Center from "./Center";
import Spin from "./Spin";
import PageTransition from "react-router-page-transition";
// const Home = lazy(() => import('../pages/Home'));
// const Repository = lazy(() => import('../pages/Repository'));
import Home from '../pages/Home';
import Repository from '../pages/Repository';

const AppRouter = () => {
  return <Suspense fallback={<Center><Spin/></Center>}>
    <Router>
      <Route
        render={({ location }) => (
          <PageTransition timeout={500}>
            <Switch location={location}>
              <Route key={"/"} exact={true} path={"/"} component={Home} />
              <Route key={"/repository/:owner/:reponame"} path={"/repository/:owner/:reponame"} component={Repository} />
            </Switch>
          </PageTransition>)}/>
    </Router>
  </Suspense>;
}

export default AppRouter;
