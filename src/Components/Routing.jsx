import { Redirect, Route, Switch } from "react-router-dom";
import {Page404} from './Page404'
import {Login} from './Login'
import {Logout} from './Logout'
import {Register} from './Register'

export const Routing = () => {
    return(
        <div>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout} />
                <Route path="/register" component={Register} />

                <Redirect exact from="/" to="/login" />
                <Route component={Page404} />
            </Switch>
        </div>
    )
}