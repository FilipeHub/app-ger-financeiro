import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Optometrist from './pages/Optometrist';
import OptometristDetail from './pages/OptometristDetail';
// import Registro from './pages/Registro';
import Service from './pages/Service';
import Login from './pages/Login';
import Home from './pages/Home';
import ListRegistro from './pages/ListRegistro';
import SignUp from './pages/SignUp';

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/registro" component={ListRegistro} />
            <Route path="/signup"  component={SignUp} />
        </Switch>

    );
}
