//Under Maintanance


import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import First from './First'
import Third from './Third'
import Home from './pages/Home'
import Costs from './Costs'
import Book from './Book'
import Increment from './hooks/Increment'
import Test from './hooks/Test'
import DataFetch from './hooks/DataFetch'
import Main from './hooks/Main'
import Show from './contex/Show'
import FormValidation from './validation/FormValidation'

const Routes = () => {

    return (
        <Router>

            <Switch>


                <Route exact path="/" component={Home} />
                <Route exact path="/test/demo" component={Third} />
                <Route exact path="/costs" component={Costs} />
                <Route exact path="/book" component={Book} />

                <Route exact path="/increment" component={Increment} />
                <Route exact path="/tesst" component={Test} />
                <Route exact path="/data" component={DataFetch} />

                <Route exact path="/prop" component={Main} />
                <Route exact path="/context" component={Show} />

                <Route exact path="/validation" component={FormValidation} />


            </Switch>


        </Router>
    )
}

export default Routes