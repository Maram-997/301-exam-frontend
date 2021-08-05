import React from 'react';
import {Card, Button} from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class ApiData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            colors: []
        }
    }
    componentDidMount = async () => {
        const  {user}  = this.props.auth0;

        let url = 'http://localhost:3001/colors'
        let result = await axios.get(url)
        this.setState({
            colors: result.data,
            email:user.email
        })
    }

    addToFav= async(idx)=>{
        let url = `http://localhost:3001/addtofav?email=${this.state.email}`
        let obj ={
            title:this.state.colors[idx].title,
            imageUrl:this.state.colors[idx].imageUrl
        
        }
        await axios.post(url, obj)
            }

    render() {
        return (
            <div>
                {this.state.colors.map((element, idx) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={element.imageUrl} />
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                               
                                <Button variant="primary" onClick={()=>{this.addToFav(idx)}}>Add to Favourite</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default withAuth0(ApiData)
