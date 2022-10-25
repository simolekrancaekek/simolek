import React from 'react';

function ProdukUnggulan({ children }) {
    return (
        <div className='my-10'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-x-8'>
                <div className='w-full h-64 md:w-8/12 md:h-[720px] shadow-2xl bg-cyan-50 overflow-hidden relative rounded-3xl mt-8 md:mt-0'>
                    <img
                        src='https://images.unsplash.com/photo-1598276223578-f16e0efa9920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNuYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Produk'
                        className='absolute object-cover object-center w-full h-full'
                    />
                    {/* <div className=' w-full h-full bg-black/20 backdrop-opacity-10'></div> */}
                </div>
                <div className='w-full mt-4 md:mt-0 md:w-4/12'>
                    <div>
                        <h1 className='font-medium text-2xl text-emerald-900 leading-relaxed tracking-tight'>
                            Produk Unggulan Minggu Ini
                        </h1>
                        <h3 className='font-bold text-2xl text-slate-900 leading-relaxed tracking-normal mt-4'>
                            Bolu Coklat Ma Cici
                        </h3>
                        <p className='mt-4 font-light leading-relaxed tracking-wide'>
                            Bola cokelat adalah permen yang terbuat dari atau
                            dicelupkan ke dalam cokelat. Bola Coklat bukan
                            sembarang bola Bahan-bahan lain mungkin termasuk
                            selai kacang atau marzipan. Di negara-negara Nordik,
                            terutama Swedia, Denmark dan Islandia, chokladboll
                            atau kokosbollar adalah bola cokelat yang sebagian
                            besar tertutup kelapa.
                        </p>
                        <p className='font-semibold mt-4  text-slate-900'>
                            Alamat Toko :
                        </p>
                        <p className='font-light mt-2 leading-relaxed tracking-wide  text-slate-900'>
                            Jl. Rancaekek No 48 Desa Bojongloa Kecamatan
                            Rancaekek Kabupaten Bandung
                        </p>
                        <p className='font-semibold mt-4  text-slate-900'>
                            Hubungi Penjual :
                        </p>
                        <p className='font-light mt-2 leading-relaxed tracking-wide  text-slate-900'>
                            0813 2023 2267
                        </p>
                        <div className='flex items-center mt-4 gap-x-2'>
                            <p className='font-light text-slate-900'>Harga :</p>
                            <p className='font-semibold leading-relaxed tracking-wide  text-slate-900'>
                                Rp. 2000.000.00;
                            </p>
                        </div>
                        <div className='mt-8'>
                            <button className='px-6 py-4 w-full font-medium shadow-md rounded-md bg-yellow-300 text-slate-900'>
                                Beli Produk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProdukUnggulan;
