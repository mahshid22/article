import React, { lazy, Suspense } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/NavBar'
const Article = lazy(() => import('./components/Article'/* webpackChunkName: "Article", webpackPrefetch: true  */))
const Page404 = lazy(() => import('./components/Page404'/* webpackChunkName: "Page404", webpackPrefetch: true  */))
const NewPost = lazy(() => import('./components/NewPost'/* webpackChunkName: "NewPost", webpackPrefetch: true  */))
const SignUp = lazy(() => import('./components/SignUp'/* webpackChunkName: "SignUp", webpackPrefetch: true  */))
const SignIn = lazy(() => import('./components/SignIn'/* webpackChunkName: "SignIn", webpackPrefetch: true  */))
const Articles = lazy(() => import('./components/Articles'/* webpackChunkName: "Articles", webpackPrefetch: true  */))
const Settings = lazy(() => import('./components/Settings'/* webpackChunkName: "Settings", webpackPrefetch: true  */))
function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path='/' component={Articles} />
          <Route path='/SignIn' component={SignIn} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/NewPost' component={NewPost} />
          <Route path='/settings' component={Settings} />
          <Route path='/article/:slug' component={Article} />
          <Route path='*' component={Page404} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
