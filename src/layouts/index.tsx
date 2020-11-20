import React from 'react'
import styles from './index.module.scss'
import AboutUs from '../pages/AboutUs'
import News from '../pages/News'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Layout = () => (
    <div>
        <div>
            Header
        </div>
        <Router>
            <Route path="/about">
                <AboutUs />
            </Route>
            <Route path="/news">
                <News />
            </Route>
        </Router>

        <div>
            Footer
        </div>
    </div>
)

export default Layout
