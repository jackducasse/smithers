import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styles from './styles.less';
import { Landing } from './components/landing';
import { ROUTES } from './constants';
import { Details } from './components/details';

export const GlobalContext = React.createContext( {} );

class Root extends React.Component{
    constructor(){
        super();

        this.state = {
            movies: [],
            isLoading: false,
        };
    }

    componentWillMount(){
    }

    render(){
        const {
            movies,
            isLoading,
        } = this.state;
        if ( isLoading ) return <p>Loading...</p>
        return (
            <BrowserRouter className={styles.container}>
                <GlobalContext.Provider value={this.state}>
                    <Switch>
                        <Route exact path={ROUTES.VIEW_ITEM()} render={( { match } ) => <Details id={match.params.id}/>} />
                        <Route exact path="/" render={() => <Landing movies={movies} />} />
                        <Redirect path="/" to="/" />
                    </Switch>
                </GlobalContext.Provider>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('app')
);
