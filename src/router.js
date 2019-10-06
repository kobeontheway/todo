import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from "./page/login";
import App from "./App";
import Admin from "./admin";
import Buttons from "./page/ui/buttons";
import NoMatch from "./page/nomatch";
import BasicTable from "./page/table/basictable";
import BikeMap from "./page/map/index";

export default class IRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/admin" render={()=>
                            <Admin>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route path="/admin/table/basic" component={BasicTable}/>
                                <Route path="/admin/bikeMap" component={BikeMap}/>
                                <Route component={NoMatch}/>
                            </Admin>
                        } />
                        <Route path="/order/detail" component={Login}/>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}