import React from 'react'
import { NavbarItem } from './NavbarItem'
import HomeIcon from '@/icons/Home'
import SearchIcon from '@/icons/Search'
import ExplorerIcon from '@/icons/Explorer'
import ReelIcon from '@/icons/Reel'
import MessageIcon from '@/icons/Message'
import HearthIcon from '@/icons/Hearth'
import AddIcon from '@/icons/Add'

export const Navbar = () => {
    return (
        <nav className='flex flex-col'>
            <h3 className="pb-8 text-2xl">Instagram</h3>
            <ul className='flex flex-col justify-center gap-y-4'>
                <NavbarItem text='Inicio' >
                    <HomeIcon />
                </NavbarItem>
                <NavbarItem text='Buscar'>
                    <SearchIcon />
                </NavbarItem>
                <NavbarItem text='Explorar'>
                    <ExplorerIcon />
                </NavbarItem>
                <NavbarItem text='Reels'>
                    <ReelIcon />
                </NavbarItem>
                <NavbarItem text='Mensajes'>
                    <MessageIcon />
                </NavbarItem>
                <NavbarItem text='Notificaciones'>
                    <HearthIcon />
                </NavbarItem>
                <NavbarItem text='Crear'>
                    <AddIcon />
                </NavbarItem>
                <NavbarItem text='Perfil'>
                    <img className='rounded-full w-8 h-8' src="next.svg" alt="imagen del usuario" />
                </NavbarItem>
            </ul>
        </nav>
    )
}
