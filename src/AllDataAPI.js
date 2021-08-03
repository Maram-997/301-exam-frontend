import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import ApiData from './components/ApiData';


class AllDataAPI extends Component {
    
    render() {
        const { user } = this.props.auth0

        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
                <ApiData/>
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
