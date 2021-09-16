import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import BuyerLandingPage from '../Components/BuyerComponents/BuyerLandingPage'
import CommonPage from '../Components/CommonComponents/CommonPage'
import SupplierLandingPage from '../Components/SupplierComponents/SupplierLandingPage'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/Supplier' component={SupplierLandingPage}/>
                <Route path='/Buyer' component={BuyerLandingPage}/>
                <Route path='/' exact component={CommonPage}/>
            </Switch>
        </Router>
    )
}

export default Routes
