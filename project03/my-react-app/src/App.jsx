{/* The Poetry Collective React Project uses Bootstrap for CSS */}
{/* For Reference: React Bootstrap Guide (https://react-bootstrap.netlify.app/docs/getting-started/introduction) */}
{/* NOTE TO SELF: Explore Animations through https://mdbootstrap.com/docs/react/content-styles/animations/ */}

import { useState } from 'react'
import { Navbar, Container, Nav, Row, Col, Form, Button, InputGroup} from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import tempImage from './assets/temporary.png';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import './App.css'

{/* QUESTION: How to create multiple pages using React Routers? : https://www.w3schools.com/react/react_router.asp */}

function NavBar () {
  return (
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">The Poetry Collective</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="pages/home">Home</Nav.Link>
              <Nav.Link to="pages/poetry">Poetry</Nav.Link>
              <Nav.Link to="pages/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
    function FirstContainer () {
    return (
        <Container className="bg-light">
        <p className="mt-4 fs-5"><span className="fw-bold">The Poetry Collection</span> engages with a simple promise: to make discovering poetry feel vivid, personal, and beautifully immersive. This is a space where poems aren't just read — they're experienced. Every visit brings a fresh selection of poets and pieces pulled from a rich poetry database, offering readers new voices to explore and unexpected lines to spark inspiration.</p>
        </Container>
    );
    }

    function SecondContainer () {
    return (
        <Container className="bg-light">
        <h1 className="fw-bold mt-5">The Poem</h1>
        <Row>
            <Col md={6}>
                <img src={image1} style={{width: '100%', height: 'auto'}} alt="fog rising from the mountains"></img>
            </Col>
            <Col md={6}>
                <p className="mt-5 fs-5">In our busy world, engaging with poetry on <span className="fw-bold">The Poetry Collection</span> invites us to slow down, reflect, and connect more deeply with our own emotions and the experiences of others. It expands our perspective by introducing new voices and ideas, while also giving language to feelings that are often hard to express. Whether it offers comfort, challenge, or inspiration, poetry encourages creativity and curiosity, making each encounter a meaningful moment of discovery.</p>
            </Col>
        </Row>
    </Container>
    );
    }

    function ThirdContainer () {
    return (
        <Container className="bg-light">
        <h1 className="fw-bold mt-5">The Reaction</h1>
        <Row>
            <Col md={6}>
                <p className="mt-5 fs-5">On <span className="fw-bold">The Poetry Collection</span>, engaging with a poem doesn't end at reading it — you can respond to it in a way that feels personal and expressive. Each poem includes a set of reaction icons that let you share your immediate emotional response, whether it moved you, surprised you, or sparked inspiration. These reactions help create a more interactive experience, turning passive reading into active participation.</p>
            </Col>
            <Col md={6}>
                <img src={image2} style={{width: '100%', height: 'auto'}} alt="flourishing pink tree"></img>
            </Col>
        </Row>
    </Container>
    );
    }

    function FourthContainer () {
    return (
        <Container className="bg-light">
        <h1 className="fw-bold mt-5">The Self</h1>
        <Row>
            <Col md={6}>
                <img src={image3} style={{width: '100%', height: 'auto'}} alt="a flower store with a plethora of bouquets"></img>
            </Col>
            <Col md={6}>
                <p className="mt-5 fs-5">When a poem truly speaks to you, <span className="fw-bold">The Poetry Collection</span> makes it easy to hold onto that moment. With a single click, you can send the poem - along with its title, author, and the additional details — directly to your personal email. This feature lets you revisit your favorite discoveries anytime, whether you want to reflect on a line that moved you, save inspiration for later, or build your own growing archive of meaningful poems. It's a simple way to take the experience beyond the website and keep the words that matter close at hand.</p>
            </Col>
        </Row>
    </Container>
    );
    }

        function PoetryOneContainer () {
        return (
            <Container className="bg-light">
            <h1 className="fw-bold mt-5">Welcome to the Poetry Page</h1>
            <p className="mt-4 fs-5">Welcome to the heart of <span className="fw-bold">The Poetry Collection</span>, where every visit brings you into conversation with a new voice, a new rhythm, a new way of seeing the world Here, poems are presented with care - complete with their authors, context, and details — so you can explore them fully and at your own pace. Whether you're searching for inspiration, hoping to discover a poet you've never reac before, are eager to react to a piece, or simply taking a moment to breathe with language, this page is designed to guide you through that experience. React, reflect, revisit, and let each poem meet you exactly where you are.</p>
            </Container>
        );
        }

        {/* QUESTION: Could we review how to include the Poetry API from Kaggle? We discussed a "reference with Javascript," given that it is a database... */}
        function PoetryAPI () {
        return (
            <Container className="bg-light">
            <h1 className="fw-bold mt-5">INSERT POEM TITLE</h1>
            <p className="mt-4 fs-5">"INSERT POEM"</p>
            <p className="mt-4 fs-5">INSERT POET NAME</p>
            </Container>
        );
        }

        {/* NOTE: I will likely change the emojis to icons... */}
        function MyReact () {
        return (
            <Container className="bg-light">
            {/* QUESTION: How to include these icons? : <a href="https://www.flaticon.com/free-icons/thumbs-up" title="thumbs up icons">Thumbs up icons created by vectorspoint - Flaticon</a> + <a href="https://www.flaticon.com/free-icons/thumbs-down" title="thumbs down icons">Thumbs down icons created by vectorspoint - Flaticon</a>*/}
            <p claassName="mt-4 fs-5">React: &#128077; &#128078;</p>
            </Container>
        );
        }

        {/* QUESTION: How functionable should this portion be? If fully functional, should I use Form Spree? */}
        function MyEmail () {
        return (
            <Form className="bg-dark p-3 w-75 mx-auto rounded-2">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="bg-light fs-5 p-1 rounded-1">Email Address:</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"/>
            </Form.Group>
            </Form>
        );
        }

        function FifthContainer () {
        return (
            <Container className="bg-light">
            <p className="mt-4 fs-5"><span className="fw-bold">The Poetry Collection</span> was born from my own desire to reconnect with poetry--a form of art that once shaped my imagination and continues to ground me in moments of reflection.</p>
            </Container>
        );
        }

        function SixthContainer () {
        return (
            <Container className="bg-light">
            <h1 className="fw-bold mt-5">The Past</h1>
            <Row>
                <Col md={6}>
                    <img src={image4} style={{width: '100%', height: 'auto'}} alt="over the hills of Arthur's Seat"></img>
                </Col>
                <Col md={6}>
                    <p className="mt-5 fs-5">After drifting away from reading poems regularly, I wanted a space that would make rediscovering them feel exciting, accessible, and visually inspiring. Creating <span className="fw-bold">The Poetry Collection</span> became both a personal project and a creative challenge: a way to blend my love for design, technology, and language into something that encourages others to explore poetry alongside me.</p>
                </Col>
            </Row>
        </Container>
        );
        }

        function SeventhContainer () {
        return (
            <Container className="bg-light">
            <h1 className="fw-bold mt-5">The Present</h1>
            <Row>
                <Col md={6}>
                    <p className="mt-5 fs-5">As I continue building and refining this space, my hope is that it becomes a welcoming place for anyone looking to fall back in love with poetry or discover it for the first time. I want it to feel like an open door - a place where curiosity is encouraged, where readers can explore at their own pace, and where poetry feels accessible rather than intimidating. Whether someone rrives with years of experience reading poems or is jus eginning to dip their toes into the world of verse, I want ther to find something here that resonates.</p>
                </Col>
                <Col md={6}>
                    <img src={image5} style={{width: '100%', height: 'auto'}} alt="a Monet painting in a Monet-esque background"></img>
                </Col>
            </Row>
        </Container>
        );
        }

        function EighthContainer () {
        return (
            <Container className="bg-light">
            <h1 className="fw-bold mt-5">The Poetry</h1>
            <Row>
                    <p className="mt-5 fs-5">I believe that the poetry in The Poetry Collection is able to speak for itself. I sincerely hope that it speaks to you.</p>
                    <p className="fs-5">Thank you for visiting my page; I hope to see you again soon!</p>
                    <img src={image6} style={{width: '100%', height: 'auto'}} alt="a Church setting in the fall"></img>      </Row>
        </Container>
        );
        }

function App () {
  return (
    <>
    <NavBar/>
    <FirstContainer/>
    <SecondContainer/>
    <ThirdContainer/>
    <PoetryOneContainer/>
    <PoetryAPI/>
    <MyReact/>
    <MyEmail/>
    <FourthContainer/>
    <FifthContainer/>
    <SixthContainer/>
    <SeventhContainer/>
    <EighthContainer/>
    </>
  );
}

export default App
