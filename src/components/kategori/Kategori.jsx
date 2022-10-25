import React from 'react';
import { NavLink } from 'react-router-dom';
function Kategori() {
    return (
        <div className='my-10'>
            <div className='flex items-center justify-between'>
                <div className='font-semibold text-emerald-800 text-base'>
                    Kategori UMKM
                </div>
                <div className='text-sm font-light text-emerald-600'>
                    Lihat Lainya
                </div>
            </div>
            <div className='mt-4 flex items-center justify-between gap-5'>
                <div className='relative overflow-hidden rounded-lg h-36 w-full  flex justify-center items-center'>
                    <img
                        src='https://images.unsplash.com/photo-1622445275992-e7efb32d2257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRzaGlydCUyMG1vY2t1cHxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60'
                        alt='Pakaian'
                        className='w-full h-full object-cover bg-center'
                    />
                    <div className='bg-black/40 absolute w-full h-full backdrop-opacity-10'></div>
                    <h3 className='absolute font-semibold text-lg text-white'>
                        <NavLink to='/kategori/pakaian'>Pakaian</NavLink>
                    </h3>
                </div>

                <div className='relative overflow-hidden rounded-lg h-36 w-full  flex justify-center items-center'>
                    <img
                        src='https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Otomotif'
                        className='w-full h-full object-cover bg-center'
                    />
                    <div className='bg-black/40 absolute w-full h-full backdrop-opacity-10'></div>
                    <h3 className='absolute font-semibold text-lg text-white'>
                        Otomotif
                    </h3>
                </div>
                <div className='relative overflow-hidden rounded-lg h-36 w-full  flex justify-center items-center'>
                    <img
                        src='https://plus.unsplash.com/premium_photo-1661775601929-8c775187bea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60'
                        alt='Kesehatan'
                        className='w-full h-full object-cover bg-center'
                    />
                    <div className='bg-black/40 absolute w-full h-full backdrop-opacity-10'></div>
                    <h3 className='absolute font-semibold text-lg text-white'>
                        Kesehatan
                    </h3>
                </div>
                <div className='relative overflow-hidden rounded-lg h-36 w-full  flex justify-center items-center'>
                    <img
                        src='https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Makanan dan Minuman'
                        className='w-full h-full object-cover bg-center'
                    />
                    <div className='bg-black/40 absolute w-full h-full backdrop-opacity-10'></div>
                    <h3 className='absolute font-semibold text-lg text-white'>
                        Makanan dan Minuman
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Kategori;
