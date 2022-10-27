import React from 'react';
import Container from '../Components/Container';
import logo from '../assets/image/logo.png';

function Footer() {
    return (
        <div>
            <div className='bg-slate-200 flex w-full border-t-2 border-emerald-400'>
                <div className='flex my-10 gap-y-4 md:gap-y-0 flex-col md:flex-row  items-center justify-between w-full'>
                    <div className=''>
                        <Container>
                            <img
                                src={logo}
                                alt='Simolek'
                                className='object-cover object-center w-40 h-full'
                            />
                        </Container>
                    </div>
                    <div className=''>
                        <div className=''>
                            <Container>
                                <h1 className='font-medium'>Sitemap</h1>
                                <ul>
                                    <li>Kategori </li>
                                    <li>Produk UMKM </li>
                                    <li>Berota UMKM </li>
                                </ul>
                            </Container>
                        </div>
                    </div>
                    <div className=''>
                        <div className=''>
                            <Container>
                                <h1>Simolek Rancaekek &copy; 2022</h1>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
