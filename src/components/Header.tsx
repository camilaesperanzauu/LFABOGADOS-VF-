import React from 'react'
import { Scale, Search } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-dark-blue text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Scale size={32} className="mr-2" />
          <span className="text-2xl font-bold">LFABOGADOS</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li><a href="#" className="hover:text-off-white">Inicio</a></li>
            <li><a href="#" className="hover:text-off-white">Servicios</a></li>
            <li><a href="#" className="hover:text-off-white">Equipo</a></li>
            <li><a href="#" className="hover:text-off-white">Blog</a></li>
            <li><a href="#" className="hover:text-off-white">Contacto</a></li>
            <li><a href="#" className="hover:text-off-white">FAQ</a></li>
          </ul>
          <div className="relative">
            <input type="text" placeholder="Buscar..." className="bg-light-blue text-white px-3 py-1 rounded-full focus:outline-none" />
            <Search size={20} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-off-white" />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header