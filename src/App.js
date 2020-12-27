import React, { Suspense, lazy } from 'react';
import Wrapper from './components/Wrapper';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Loader from 'react-loader-spinner';
import routes from './routes';

const HomePageView = lazy(() =>
  import('./views/HomePageView' /* webpackChunkName: "HomePageView" */),
);
const SongsView = lazy(() =>
  import('./views/SongsView' /* webpackChunkName: "SongsView" */),
);
const ArtistDetailsPageView = lazy(() =>
  import(
    './views/ArtistDetailsPageView/ArtistDetailsPageView.js' /* webpackChunkName: "ArtistDetailsPageView" */
  ),
);

export default function App() {
  return (
    <Wrapper>
      <AppBar />
      <Suspense
        fallback={
          <Loader
            type="Bars"
            color="#ce6c10"
            height={50}
            width={100}
            visible={true}
          />
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomePageView} />
          <Route
            path={routes.artistDetails}
            component={ArtistDetailsPageView}
          />
          <Route path={routes.songSearch} component={SongsView} />
          <Route component={HomePageView} />
        </Switch>
      </Suspense>
    </Wrapper>
  );
}
