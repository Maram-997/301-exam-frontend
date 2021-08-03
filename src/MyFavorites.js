import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import FavsCard from './components/FavsCard';

class MyFavorites extends React.Component {
  render() {
    return(
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <FavsCard/>
      </>
    )
  }
}

export default withAuth0(MyFavorites);

