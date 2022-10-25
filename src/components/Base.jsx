import React from 'react';
import Banner from './banner/Banner';
import Box from './Box';
import Container from './Container';
import Kategori from './kategori/Kategori';

function Base() {
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

export default Base;
