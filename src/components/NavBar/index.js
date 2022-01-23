import React,{useState} from "react";
import { Navbar,Nav,Button,FormControl,Form,NavDropdown,Container} from 'react-bootstrap';
import ModalAddPlayer from "../ModalAddPlayer";
import ModalRatePlayers from "../ModalRatePlayers";
import './style.css';

const NavBar = () => {

    const [visibleModalVote, setVisibleModalVote] = useState(false);
    const [visibleModalAddPlayer, setVisibleModalAddPlayer] = useState(false);

    return (
        <Navbar  expand="lg">
            <Container fluid>
            <Navbar.Brand href={"/"} className="d-none d-md-block "><h2 className="d-inline font-weight-bold title-url label-brand-1">ClasSifica</h2><p className="d-inline font-weight-bold label-brand-2">.com</p></Navbar.Brand>
                <Navbar.Brand href={"/"} className="d-none d-sm-block d-md-none d-block d-sm-none mt-2"><h5 className="d-inline font-weight-bold">ReporRekt</h5><p className="d-inline font-weight-bold">.com</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                <Button  className="btn01 mr-3"  onClick={()=>setVisibleModalVote(true)}>Vota </Button>
                <Button   className="btn02"  onClick={()=>setVisibleModalAddPlayer(true)}>add player </Button>
                </Navbar.Collapse>
                <ModalAddPlayer visible={visibleModalAddPlayer} onPressClose={() => setVisibleModalAddPlayer(false)} />
                <ModalRatePlayers visible={visibleModalVote} onPressClose={() => setVisibleModalVote(false)} />
            </Container>
        </Navbar>
    );
}

export default NavBar;