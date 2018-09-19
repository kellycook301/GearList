import React from 'react';
import { Container, Footer } from 'mdbreact';
import "./Footer.css"

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="blue" className="font-small pt-4 mt-4 capstoneFooter">
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://github.com/kellycook301"> Kelly Cook </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
