import React from 'react';
import {Route,Link} from 'react-router-dom'
import Reddit from './articles-reddit'

export default props => {
    console.log('props', props)
    const path = props.match.path
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${path}/reddit`}>Reddit</Link>
                </li>
            </ul>
            <Route path={`${path}/reddit`} component={Reddit}/>
        </div>
    )
}
