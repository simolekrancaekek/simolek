import React from 'react';
import Banner from '../Components/banner/Banner';
import Box from '../Components/Box';
import Container from '../Components/Container';
import Kategori from '../Components/kategori/Kategori';

function Home() {
    return (
        <div className='antialiased font-Poppins'>
            <Container>
                <Box>
                    <Banner></Banner>
                    <Kategori></Kategori>
                </Box>
            </Container>
        </div>
    );
}

export default Home;
