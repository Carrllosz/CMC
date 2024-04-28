import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import home from '../assets/4.png';
import teste from '../assets/5.png';
import quinta from '../assets/quinta.png';
import luciano from '../assets/luciano.png';
import duplex from '../assets/7.png';
import h1 from '../assets/h1.jpg';
import h2 from '../assets/h2.jpg';
import h3 from '../assets/h3.jpg';
import h4 from '../assets/h4.jpg';

const Home = () => {
  const outrosExames = ["Exame de vista", "Exame de sangue", "Exame de urina", "Exame de fezes", "Exame de pele", "Exame de cabelo"];

  const fotos = [h1, h2, h3, h4];

  const carouselSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Slider {...carouselSettings}>
            <div>
              <img src={home} alt="Home" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src={teste} alt="Teste" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src={quinta} alt="Teste" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src={luciano} alt="Teste" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src={duplex} alt="Teste" className="w-full h-full object-cover" />
            </div>
          </Slider>
        </div>
      </div>
      <div className=" bg-white flex justify-center items-center text-[#322D94]">
        <div className='container mx-auto p-10'>
          <div className="flex justify-center items-center text-sm text-[#322D94]">
            <h1 className='text-center font-bold text-xl border-b-2 border-b-[#322D94]'>Orientações para realização de exames</h1>
          </div>
          <div className="justify-center text-center items-center grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 p-10">
            {outrosExames.map((nome, index) => (
              <div key={index} className="bg-[#322D94] text-white p-4 border rounded-2xl flex text-center justify-center items-center w-[160px] h-[130px]">
                <h3 className='font-bold text-[14px] text-start'>{nome}</h3>
              </div>
            ))}
          </div>
          <div className="flex justify-start items-start text-sm text-[#322D94]">
            <h1 className='text-start font-bold text-xl pl-8'>Especialistas<a className='text-[12px]' href='/Especialidades'> (confira)</a></h1>
          </div>
          <div className="p-4 justify-center items-center grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
            {fotos.map((imagem, index) => (
              <div key={index} className="p-4 relative">
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-50 transition-opacity duration-200"></div>
                <img src={imagem} alt={`Foto ${index}`} className="w-full h-[350px] object-cover shadow-box" style={{ boxShadow: '8px 8px #322D94' }}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
