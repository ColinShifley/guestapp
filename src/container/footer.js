import React from 'react';
import Footer from '../Components/footer'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href='#'>story</Footer.Link>
                        <Footer.Link href='#'>story</Footer.Link>
                        <Footer.Link href='#'>story</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
