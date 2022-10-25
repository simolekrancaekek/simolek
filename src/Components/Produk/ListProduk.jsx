import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import React from 'react';

function ListProduk() {
    return (
        <div className='my-10'>
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-base text-emerald-900'>
                    Rekomendasi Produk
                </p>
                <p className='font-light text-sm text-slate-500'>
                    Lihat Produk Lainya
                </p>
            </div>
            <div className='mt-4'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-x-6 md:gap-y-0'>
                    <div className='bg-white shadow-xl w-full h-[29.875rem] md:h-[21.875rem] flex flex-col items-start justify-start rounded-lg p-3'>
                        <div className='relative overflow-hidden w-full h-5/6'>
                            <img
                                src='https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Produk'
                                className='absoloute w-full h-full object-cover rounded-lg'
                            />
                        </div>
                        <div className='my-4 w-full flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <div className='font-medium text-[12px] text-slate-900'>
                                    Distro Rancaekek
                                </div>
                                <div className='text-[10px] font-medium text-slate-900'>
                                    Baju Polos Lengan Pendek
                                </div>
                            </div>
                            <div className='text-xs font-medium text-slate-900'>
                                Rp. 3.000.000
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <button className='w-full rounded-lg shadow-md px-6 py-2 bg-yellow-400 text-slate-900 font-semibold text-[10px]'>
                                Beli Produk
                            </button>
                        </div>
                    </div>

                    <div className='bg-white shadow-xl w-full h-[29.875rem] md:h-[21.875rem] flex flex-col items-start justify-start rounded-lg p-3'>
                        <div className='relative overflow-hidden w-full h-5/6'>
                            <img
                                src='https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Produk'
                                className='absoloute w-full h-full object-cover rounded-lg'
                            />
                        </div>
                        <div className='my-4 w-full flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <div className='font-medium text-[12px] text-slate-900'>
                                    Distro Rancaekek
                                </div>
                                <div className='text-[10px] font-medium text-slate-900'>
                                    Baju Polos Lengan Pendek
                                </div>
                            </div>
                            <div className='text-xs font-medium text-slate-900'>
                                Rp. 3.000.000
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <button className='w-full rounded-lg shadow-md px-6 py-2 bg-yellow-400 text-slate-900 font-semibold text-[10px]'>
                                Beli Produk
                            </button>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl w-full h-[29.875rem] md:h-[21.875rem] flex flex-col items-start justify-start rounded-lg p-3'>
                        <div className='relative overflow-hidden w-full h-5/6'>
                            <img
                                src='https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Produk'
                                className='absoloute w-full h-full object-cover rounded-lg'
                            />
                        </div>
                        <div className='my-4 w-full flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <div className='font-medium text-[12px] text-slate-900'>
                                    Distro Rancaekek
                                </div>
                                <div className='text-[10px] font-medium text-slate-900'>
                                    Baju Polos Lengan Pendek
                                </div>
                            </div>
                            <div className='text-xs font-medium text-slate-900'>
                                Rp. 3.000.000
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <button className='w-full rounded-lg shadow-md px-6 py-2 bg-yellow-400 text-slate-900 font-semibold text-[10px]'>
                                Beli Produk
                            </button>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl w-full h-[29.875rem] md:h-[21.875rem] flex flex-col items-start justify-start rounded-lg p-3'>
                        <div className='relative overflow-hidden w-full h-5/6'>
                            <img
                                src='https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Produk'
                                className='absoloute w-full h-full object-cover rounded-lg'
                            />
                        </div>
                        <div className='my-4 w-full flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <div className='font-medium text-[12px] text-slate-900'>
                                    Distro Rancaekek
                                </div>
                                <div className='text-[10px] font-medium text-slate-900'>
                                    Baju Polos Lengan Pendek
                                </div>
                            </div>
                            <div className='text-xs font-medium text-slate-900'>
                                Rp. 3.000.000
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <button className='w-full rounded-lg shadow-md px-6 py-2 bg-yellow-400 text-slate-900 font-semibold text-[10px]'>
                                Beli Produk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-x-6 md:gap-y-0'>
                    <div className='bg-white shadow-xl w-full h-[29.875rem] md:h-[21.875rem] flex flex-col items-start justify-start rounded-lg p-3'>
                        <div className='relative overflow-hidden w-full h-5/6'>
                            <img
                                src='https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Produk'
                                className='absoloute w-full h-full object-cover rounded-lg'
                            />
                        </div>
                        <div className='my-4 w-full flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <div className='font-medium text-[12px] text-slate-900'>
                                    Distro Rancaekek
                                </div>
                                <div className='text-[10px] font-medium text-slate-900'>
                                    Baju Polos Lengan Pendek
                                </div>
                            </div>
                            <div className='text-xs font-medium text-slate-900'>
                                Rp. 3.000.000
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <button className='w-full rounded-lg shadow-md px-6 py-2 bg-yellow-400 text-slate-900 font-semibold text-[10px]'>
                                Beli Produk
                            </button>
                        </div>
                    </div>

                    <div className='bg-white shadow-xl w-full h-[29.875rem] md:h-[21.875rem] flex flex-col items-start justify-start rounded-lg p-3'>
                        <div className='relative overflow-hidden w-full h-5/6'>
                            <img
                                src='https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Produk'
                                className='absoloute w-full h-full object-cover rounded-lg'
                            />
                        </div>
                        <div className='my-4 w-full flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <div className='font-medium text-[12px] text-slate-900'>
                                    Distro Rancaekek
                                </div>
                                <div className='text-[10px] font-medium text-slate-900'>
                                    Baju Polos Lengan Pendek
                                </div>
                            </div>
                            <div className='text-xs font-medium text-slate-900'>
                                Rp. 3.000.000
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <button className='w-full rounded-lg shadow-md px-6 py-2 bg-yellow-400 text-slate-900 font-semibold text-[10px]'>
                                Beli Produk
                            </button>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl w-full h-[29.875rem] md:h-[21.875rem] flex flex-col items-start justify-start rounded-lg p-3'>
                        <div className='relative overflow-hidden w-full h-5/6'>
                            <img
                                src='https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Produk'
                                className='absoloute w-full h-full object-cover rounded-lg'
                            />
                        </div>
                        <div className='my-4 w-full flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <div className='font-medium text-[12px] text-slate-900'>
                                    Distro Rancaekek
                                </div>
                                <div className='text-[10px] font-medium text-slate-900'>
                                    Baju Polos Lengan Pendek
                                </div>
                            </div>
                            <div className='text-xs font-medium text-slate-900'>
                                Rp. 3.000.000
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <button className='w-full rounded-lg shadow-md px-6 py-2 bg-yellow-400 text-slate-900 font-semibold text-[10px]'>
                                Beli Produk
                            </button>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl w-full h-[29.875rem] md:h-[21.875rem] flex flex-col items-start justify-start rounded-lg p-3'>
                        <div className='relative overflow-hidden w-full h-5/6'>
                            <img
                                src='https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Produk'
                                className='absoloute w-full h-full object-cover rounded-lg'
                            />
                        </div>
                        <div className='my-4 w-full flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <div className='font-medium text-[12px] text-slate-900'>
                                    Distro Rancaekek
                                </div>
                                <div className='text-[10px] font-medium text-slate-900'>
                                    Baju Polos Lengan Pendek
                                </div>
                            </div>
                            <div className='text-xs font-medium text-slate-900'>
                                Rp. 3.000.000
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <button className='w-full rounded-lg shadow-md px-6 py-2 bg-yellow-400 text-slate-900 font-semibold text-[10px]'>
                                Beli Produk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProduk;
