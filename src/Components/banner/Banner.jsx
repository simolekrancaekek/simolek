import React from 'react';
import banner from '../../assets/image/ImageBanner1.png';
function Banner() {
    return (
        <>
            <div className='w-full h-96  rounded-3xl relative overflow-hidden'>
                <img
                    src={banner}
                    alt='Simole Rancaekek'
                    className='object-cover inset-0 w-full h-full absolute'
                />
                <div className='w-full h-full bg-black/40 absolute backdrop-opacity-10 '></div>
                <div className='absolute left-20 top-20 bottom-20'>
                    <p className='font-bold text-slate-50 text-3xl leading-relaxed tracking-normal '>
                        Tingkatkan Penjualan dan Usaha Anda
                        <br /> Dalam Satu Gemggaman
                    </p>
                    <p className='mt-4 text-white'>
                        Bergabung bersama &nbsp;
                        <b className='font-bold text-white'>Simolek</b>
                    </p>
                    <div className='mt-4'>
                        <a
                            type='button'
                            href='#'
                            className='px-6 py-2 bg-yellow-300 font-semibold text-emerald-900 rounded-lg shadow-md '
                        >
                            Daftar mitra siMolek
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
