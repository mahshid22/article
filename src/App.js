import React, { Suspense } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Articles from './components/Articles'
import NavBar from './components/NavBar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import NewPost from './components/NewPost'
import Settings from './components/Settings'
import Article from './components/Article'
import Page404 from './components/Page404'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Articles} />
          <Route path='/SignIn' component={SignIn} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/NewPost' component={NewPost} />
          <Route path='/settings' component={Settings} />
          <Route path='/article/:slug' component={Article} />
          <Route path='*' component={Page404} />
          {/* <Route path='/editor/:slug' component={Editor} /> */}
          {/* <Route path='/@:username/favorites' component={ProfileFavorites} />
          <Route path='/@:username' component={Profile} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
