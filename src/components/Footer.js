import React from 'react';
import { Container, Footer } from 'mdbreact';
import "./Footer.css"

// The footer proved to be a challenge. It first loaded into the middle of my page after being put into
// MyGearList.js. However, I found some help online and was able to get it so that it remained at the bottom
// of the page no matter how much data was added in. It also does not scroll with you which I am
// SUPER happy about. It feels less claustrophobic that way.
// BTW my name at the bottom links to my GitHub :)

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="blue" className="font-small pt-4 mt-2 capstoneFooter">
                <div className="footer-copyright text-center py-1">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://kellycook301.github.io/kellycook/" target="_blank"> Kelly Cook </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
