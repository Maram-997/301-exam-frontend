import React from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';


class ShowModel extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>update Model</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.props.updateColor}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>color name</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.targetedObj.title} name="title"  />
                       
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>color url image</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.targetedObj.imageUrl}  name='imageUrl' />
                        </Form.Group>
                     
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit' >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                    </Form>
                    
                </Modal>
            </div>
        )
    }
}

export default withAuth0(ShowModel)
