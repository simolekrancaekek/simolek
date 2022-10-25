import React from 'react';
import Banner from '../Components/banner/Banner';
import Box from '../Components/Box';
import Container from '../Components/Container';
import Kategori from '../Components/kategori/Kategori';
import ListProduk from '../Components/Produk/ListProduk';
import ProdukUnggulan from '../Components/Produk/ProdukUnggulan';

function Home() {
    return (
        <div className='antialiased font-Poppins'>
            <Container>
                <Box>
                    <Banner></Banner>
                    <Kategori></Kategori>
                    <ProdukUnggulan></ProdukUnggulan>
                    <ListProduk></ListProduk>
                </Box>
            </Container>
        </div>
    );
}

export default Home;
