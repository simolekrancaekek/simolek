import { Routes, Route } from 'react-router-dom';
import Container from '../Components/Container';
import Box from '../Components/Box';
import Kategori from '../Components/kategori/Kategori';
import Home from '../Pages/Home';
function Index() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
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
                                    <div>Produk UMKM</div>
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
                                    <div>Berita UMKM</div>
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

export default Index;
