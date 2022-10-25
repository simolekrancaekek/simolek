import Base from './components/Base';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Kategori from './components/kategori/Kategori';
import Box from './components/Box';
import Container from './components/Container';

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route exact path='/' element={<Base />}></Route>
                <Route
                    exact
                    path='/kategori'
                    element={
                        <>
                            <Container>
                                <Box>
                                    <Kategori />
                                </Box>
                            </Container>
                        </>
                    }
                ></Route>
                <Route
                    exact
                    path='/produk'
                    element={
                        <>
                            <Container>
                                <Box>
                                    <div>Produk</div>
                                </Box>
                            </Container>
                        </>
                    }
                ></Route>
                <Route
                    exact
                    path='/berita'
                    element={
                        <>
                            <Container>
                                <Box>
                                    <div>Berita</div>
                                </Box>
                            </Container>
                        </>
                    }
                ></Route>
                <Route
                    exact
                    path='/bumdes'
                    element={
                        <>
                            <Container>
                                <Box>
                                    <div>Bumdes</div>
                                </Box>
                            </Container>
                        </>
                    }
                ></Route>
                <Route
                    exact
                    path='/login'
                    element={
                        <>
                            <Container>
                                <Box>
                                    <div>Login</div>
                                </Box>
                            </Container>
                        </>
                    }
                ></Route>
                <Route
                    exact
                    path='/daftar'
                    element={
                        <>
                            <Container>
                                <Box>
                                    <div>Daftar</div>
                                </Box>
                            </Container>
                        </>
                    }
                ></Route>
                <Route
                    exact
                    path='*'
                    element={
                        <>
                            <Container>
                                <Box>
                                    <div>No Match</div>
                                </Box>
                            </Container>
                        </>
                    }
                ></Route>
            </Routes>
        </>
    );
}

export default App;
