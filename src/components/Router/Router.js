// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина

import React from 'react';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import Search from "../Search";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path={'/'} exact component={Login} />
			<PrivateRoute path={'/search'} component={Search} />
			<Redirect to={'/'} />
		</Switch>
	</BrowserRouter>
);

export default Router;
