import 'material-design-lite/material.css';

//import './assets/docs.css';

import css from '../src/index.scss';
import styles from './index.scss';
import React from 'react'
import { render } from 'react-dom';
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'


import {
  About,
  App,
  Components,
  Faq,
  GettingStarted,
  GitHub,
  Home,
  PageNotFound,
  Badges,
  Buttons,
  Cards,
  Chips,
  Dialogs,
  Layout} from './includes/Includes';

const routesData = {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'components',
      component: Components,
      childRoutes: [
        {
          path: 'badges',
          component:Home
        },
        {
          path: 'buttons',
          component:Home
        },
        {
          path: 'cards',
          component:Home
        }
      ]
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
}
//const routes = <Router history={browserHistory} routes={routesData}></Router>

const routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}></Route>
      <Route path="getting-started" component={GettingStarted}></Route>
      <Route path="faq" component={Faq}></Route>
      <Route path="components">
        <IndexRoute component={Components} />
        <Route path="badges" component={Badges}></Route>
        <Route path="buttons" component={Buttons}></Route>
        <Route path="cards" component={Cards}></Route>
        <Route path="chips" component={Chips}></Route>
        <Route path="dialogs" component={Dialogs}></Route>
        <Route path="layout" component={Layout}></Route>
      </Route>
      <Route path="github" component={GitHub}></Route>

      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
);


render(routes, document.querySelector('#docs'));
