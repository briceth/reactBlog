import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/postsIndex';
import PostNew from './components/postNew';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={PostsIndex}/>
    <Route path='post/new' component={PostNew} />
  </Route>
)
