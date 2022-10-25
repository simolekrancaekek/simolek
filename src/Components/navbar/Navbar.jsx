import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import { Bars4Icon } from '@heroicons/react/24/solid';
export default function Navbar({ children }) {
    return (
        <>
            <nav className='bg-white border-b-2 border-emerald-600 sticky top-0 z-50'>
                <div className='flex justify-between items-center mx-auto container h-16'>
                    <div className='w-[90px] h-auto'>
                        <NavLink to='/'>
                            <img
                                src={logo}
                                alt='simolek rancaekek'
                                className='w-auto h-auto'
                            />
                        </NavLink>
                    </div>
                    <div className='font-light text-sm leading-relaxed hidden md:block'>
                        <ul className='flex justify-between items-center gap-x-2 md:gap-x-4 lg:gap-x-8'>
                            <li>
                                <NavLink
                                    to='kategori'
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'font-semibold text-emerald-600'
                                            : 'font-normal text-sm'
                                    }
                                >
                                    Kategori UMKM
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='produk'
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'font-semibold text-emerald-600'
                                            : 'font-normal text-sm'
                                    }
                                >
                                    Produk UMKM
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='berita'
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'font-semibold text-emerald-600'
                                            : 'font-normal text-sm'
                                    }
                                >
                                    Berita UMKM
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='bumdes'
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'font-semibold text-emerald-600'
                                            : 'font-normal text-sm'
                                    }
                                >
                                    Bumdes
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='justify-between items-center gap-x-4'>
                        <div className='items-center justify-between gap-x-4 hidden md:flex'>
                            <NavLink
                                to='login'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-semibold text-emerald-600'
                                        : 'font-semibold text-emerald-900'
                                }
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to='Daftar'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-medium text-slate-100 bg-yellow-500 rounded px-6 py-2'
                                        : 'font-medium text-emerald-900 bg-yellow-300 rounded px-6 py-2'
                                }
                            >
                                Daftar
                            </NavLink>
                        </div>
                        <div className='items-center justify-between gap-x-4 flex md:hidden'>
                            <NavLink
                                to='menu'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-semibold text-emerald-600'
                                        : 'font-semibold text-emerald-900'
                                }
                            >
                                <Bars4Icon className='h-6 w-6 text-emerald-600' />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
