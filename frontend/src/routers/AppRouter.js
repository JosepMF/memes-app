import { Route, Switch } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import AccountPage from '../pages/AccountPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MemesPage from '../pages/admin/MemesPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import SearchPage from '../pages/SearchPage';
import UsersPage from '../pages/admin/UsersPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AdminRoute from './AdminRoute';
import OneMemePage from '../pages/OneMemePage';

export default function AppRouter() {
    return (
        <>
            <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute path="/one" component={OneMemePage}/>

                <Route exact path="/about" component={AboutPage} />

                <PrivateRoute exact path="/search" component={SearchPage} />

                <PrivateRoute exact path="/account" component={AccountPage} />
                <PublicRoute exact path="/register" component={RegisterPage} />
                <PublicRoute exact path="/login" component={LoginPage} />

                <AdminRoute exact path="/admin/users" component={UsersPage} />

                <AdminRoute exact path="/admin/memes" component={MemesPage} />

                <Route path="*" component={NotFoundPage} />
            </Switch>
        </>
    )
}
