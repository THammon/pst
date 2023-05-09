import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import twiticon from "../twittericon.png"
import insticon from "../instaicon.png"
import googicon from "../googleicon.png"
import linkicon from "../linkedinicon.png"
import giticon from "../githubicon.png"
import faceicon from "../facebookicon.png"

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.facebook.com'
            role='button'
          >
            <img src={faceicon} alt="facebookicon" width= '35px'/>
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.twitter.com'
            role='button'
          >
            <img src={twiticon} alt="twittericon" width= '30px'/>
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.google.com'
            role='button'
          >
            <img src={googicon} alt="googleicon" width= '30px'/>
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.instagram.com'
            role='button'
          >
            <img src={insticon} alt="instagramicon" width= '30px'/>
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.linkedin.com'
            role='button'
          >
            <img src={linkicon} alt="linkedinicon" width= '30px'/>
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.github.com'
            role='button'
          >
            <img src={giticon} alt="githubicon" width= '35px'/>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-dark' href='https://www.hobbylobby.com/'>
          PinkScissortails.com
        </a>
      </div>
    </MDBFooter>
  );
}