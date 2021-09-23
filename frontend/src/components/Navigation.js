import { useState } from 'react';
import { Button, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import useAuth from '../auth/useAuth';

export default function Navigation() {

    const [search, setSearch] = useState('all')
    const [filter, setFilter] = useState('all');

    const { logout, isLogged, hasRole } = useAuth();

    const handlerChange = (e) => {
        e.preventDefault();
        console.log('clik');
        setSearch(e.target.value)
    }
    const handlerFilter = (type) => setFilter(type)

    return (

        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to="/">
                App-Memes
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{ marginRight: "auto" }}>
                    {/* Search form */}
                    {isLogged() ? <><div className="d-flex" onClick={(e) => e.preventDefault()}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2 text-white"
                            aria-label="Search"
                            name="search"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                            onChange={handlerChange}
                        />
                        <Button as={NavLink} to={`/search?q=${search}&f=${filter}`} variant="outline-success">Search</Button>
                    </div>
                        {/* Filter */}
                        <NavDropdown title="filtres">
                            <NavDropdown.Item as="button" onClick={() => handlerFilter('video')}>
                                Video
                            </NavDropdown.Item>
                            <NavDropdown.Item as="button" onClick={() => handlerFilter('gif')}>
                                gif
                            </NavDropdown.Item>
                            <NavDropdown.Item as="button" onClick={() => handlerFilter('image')}>
                                image
                            </NavDropdown.Item>
                            <NavDropdown.Item as="button" onClick={() => handlerFilter('all')}>
                                all
                            </NavDropdown.Item>
                        </NavDropdown>
                    </> : ''}
                    {/* Admin Navigation */}
                    {hasRole === 'admin' ? <NavDropdown title="admin">
                        <NavDropdown.Item as={NavLink} to="/admin/users">
                            Users
                        </NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/admin/memes">
                            memes
                        </NavDropdown.Item>
                    </NavDropdown> : ''}
                </Nav>
                <Nav>
                    {/* Admin account nav */}
                    {isLogged() &&
                        <><Nav.Link as={NavLink} to="/account">
                            Account
                        </Nav.Link><Nav.Link className="text-danger" onClick={logout}>
                                logout
                            </Nav.Link></>
                    }

                    {/*Singin and Singup nav*/}
                    {!isLogged() &&
                        <><Nav.Link as={NavLink} to="/login">
                            Login
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/register">
                            Register
                        </Nav.Link></>
                    }


                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}
