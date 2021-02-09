import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFoundPage from '../../components/NotFoundPage';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

function TodoListApp() {
    const match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={DetailPage} exact />

                <Route component={NotFoundPage} />
            </Switch>
        </div>
    )
}

export default TodoListApp;
