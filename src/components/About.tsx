import React from 'react'

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Nosotros</h2>
        <div className="flex items-center">
          <div className="w-1/2 pr-8 flex space-x-4">
            <div className="w-1/2 h-64 bg-gray-300 rounded-lg"></div>
            <div className="w-1/2 h-64 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-1/2">
            <p className="text-lg mb-6 font-bold">
              En LFABOGADOS, nos dedicamos a proteger tus derechos laborales y familiares con pasión y experiencia. Nuestro equipo de abogados altamente calificados está comprometido a brindarte el mejor asesoramiento legal y representación.
            </p>
            <p className="text-lg font-bold">
              Con años de experiencia en el campo legal, hemos ayudado a numerosas familias y trabajadores a resolver sus conflictos y obtener la justicia que merecen. Tu bienestar es nuestra prioridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About