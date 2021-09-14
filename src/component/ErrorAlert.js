import React, { Component } from 'react'
import {Alert} from "react-bootstrap";

class ErrorAlert extends Component {
    render() {
        return (
            <div>
                <Alert  variant='danger'>
                    Wrong!!!!! Try to input again
                </Alert>
            </div>
        )
    }
}

export default ErrorAlert