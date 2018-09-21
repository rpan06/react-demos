import React from 'react';
import {BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Reddit from './articles-reddit'

export default props => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/articles/reddit">Reddit</Link>
                </li>
            </ul>
            <Route path="/articles/reddit" component={Reddit}/>
        </div>
    </Router>
)
