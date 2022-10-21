import { Button, Container, Form, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import Link from "next/link";
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/router';


export default function MainNav(){

    const router = useRouter();
    

    const {register, handleSubmit} = useForm({
      defaultValues:{
        searchField: ''
      }
    })

    function onSubmit(data){
      router.push(`/artwork?title=true&q=${data.searchField}`);
      
    }

    return (
        <div>
        <Navbar bg="light" expand="lg" className="fixed-top  navbar-dark bg-dark">
          <Container>
            <Navbar.Brand>Chi Ming Lai</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
                <Link href="/search" passHref><Nav.Link>Advanced Search</Nav.Link></Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <Link href="/" passHref><NavDropdown.Item>Home</NavDropdown.Item></Link>
                  <NavDropdown.Divider />
                  <Link href="/search" passHref>
                    <NavDropdown.Item>
                        Advanced Search
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Nav>
              <Form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        {...register('searchField')}
                    />
                    <Button  type="submit">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br/><br/>
        </div>
      );


}