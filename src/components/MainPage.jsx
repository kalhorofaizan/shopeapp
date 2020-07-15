import React, { Component } from 'react'
import Header from "./Header"
import Container from "@material-ui/core/Container"
import LandingPage from "./LandingPage"
export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container>

                    <LandingPage />
                </Container>
            </div>
        )
    }
}
