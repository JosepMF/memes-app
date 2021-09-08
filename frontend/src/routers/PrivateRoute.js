import { Redirect, Route } from "react-router-dom"
import useAuth from "../auth/useAuth"

export default function PrivateRoute(props) {
    const { isLogged } = useAuth();

    if (!isLogged()) return <Redirect to="/login"/>

    return <Route {...props}/>
}
