import React from 'react';
import Banner from '../Components/banner/Banner';
import Box from '../Components/Box';

import Kategori from '../Components/kategori/Kategori';
import ListProduk from '../Components/Produk/ListProduk';
import ProdukUnggulan from '../Components/Produk/ProdukUnggulan';
import Footer from '../Layouts/Footer';

function Home() {
    return (
        <div className='antialiased font-Poppins'>
            <Box>
                <Banner></Banner>
                <Kategori></Kategori>
                <ProdukUnggulan></ProdukUnggulan>
                <ListProduk></ListProduk>
            </Box>
        </div>
    );
}

export default Home;
