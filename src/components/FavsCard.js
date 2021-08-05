import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import ShowModel from './ShowModel';


class FavsCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            favArr: [],
            index: 0,
            targetedObj: {},
            show: false
        }
    }
    /////////////////////////////////
    componentDidMount = async () => {
        const { user } = this.props.auth0

        let url = `https://exam-301-backend.herokuapp.com/favs?email=${user.email}`
        let result = await axios.get(url)
        this.setState({
            favArr: result.data,
            email: user.email
        })
    }
    ///////////////////////////
    deleteColor = async (idx) => {

        let url = `https://exam-301-backend.herokuapp.com/deleteColor/${idx}?email=${this.state.email}`
        let result = await axios.delete(url)
        this.setState({
            favArr: result.data
        })

    }
    ///////////////
    showForm = (idx) => {
        let obj = {
            title: this.state.favArr[idx].title,
            imageUrl: this.state.favArr[idx].imageUrl
        }


        this.setState({
            show: true,
            targetedObj: obj,
            index: idx
        })
    }
    //////////////
    handleClose=()=> {
        this.setState({
            show: false
        })
    }
    ///////////////////
    updateColor = async (event) => {
        event.preventDefault()
        let selected = {
            title: event.target.title.value,
            imageUrl: event.target.imageUrl.value
        }
        this.setState({
            show: false
        })
        let url = `https://exam-301-backend.herokuapp.com/updatecolor/${this.state.index}?email=${this.state.email}`
        let result = await axios.put(url, selected)
        this.setState({
            favArr: result.data
        })
    }


    render() {
        return (
            <div>
                <ShowModel show={this.state.show} handleClose={this.handleClose} targetedObj={this.state.targetedObj} updateColor={this.updateColor} />
                {this.state.favArr.map((element, idx) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={element.imageUrl} />
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>

                                <Button variant="primary" onClick={() => { this.deleteColor(idx) }} >Delete</Button>
                                <Button variant="primary" onClick={() => { this.showForm(idx) }}>Update</Button>

                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default withAuth0(FavsCard)
