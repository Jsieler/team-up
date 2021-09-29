import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import SingleThoughtFortnite from './pages/SingleThoughtFortnite';
import SingleThoughtApex from './pages/SingleThoughtApex';
import SingleThoughtPubg from './pages/SingleThoughtPubg';
import SingleThoughtMine from './pages/SingleThoughtMine';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Minecraft from './pages/Minecraft';
import ApexLegends from './pages/ApexLegends';
import Fortnite from './pages/Fortnite';
import LeagueOfLegends from './pages/LeagueOfLegends';
import PUBG from './pages/PUBG';
import Game from './pages/Game'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/thought/:id" component={SingleThought} />
              <Route exact path="/thoughtfortnite/:id" component={SingleThoughtFortnite} />
              <Route exact path="/thoughtapex/:id" component={SingleThoughtApex} />
              <Route exact path="/thoughtpubg/:id" component={SingleThoughtPubg} />
              <Route exact path="/thoughtmine/:id" component={SingleThoughtMine} />
              <Route exact path="/minecraft" component={Minecraft} />
              <Route exact path="/fortnite" component={Fortnite} />
              <Route exact path="/apexlegends" component={ApexLegends} />
              <Route exact path="/pubg" component={PUBG} />
              <Route exact path="/leagueoflegends" component={LeagueOfLegends} />
              <Route exact path="/game/:id" component={Game} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
