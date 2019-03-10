import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styles from './styles.less';
import { Landing } from './components/landing';
import { ROUTES, MEDIA_TYPES } from './constants';
import { Details } from './components/details';

const Root = () => (
    <BrowserRouter className={styles.container}>
        <Switch>
            <Route exact path={ROUTES.VIEW_ITEM()} render={( { match } ) => <Details id={match.params.id} type={match.params.type} />} />
            <Route exact path={ROUTES.POPULAR()} render={( { match } ) => <Landing type={match.params.type} />} />
            <Redirect path="/" to={ROUTES.POPULAR( MEDIA_TYPES.MOVIES )} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(
    <Root />,
    document.getElementById('app')
);
