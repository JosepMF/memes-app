import { Redirect, Route } from "react-router-dom"
import useAuth from "../auth/useAuth"

export default function PrivateRoute(props) {
    const { isLogged, hasRole } = useAuth();

    if (!isLogged()) return <Redirect to="/login"/>
    if (hasRole !== 'admin') return <Redirect to="/"/>

    return <Route {...props}/>
}
