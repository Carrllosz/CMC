import React from 'react';
import exames from '../assets/exames1.png';
import tubo from '../assets/tubo.png';
import usgmama from '../assets/usg da mama.png';
import usgabd from '../assets/usg abdomen total.png';
import sexagem from '../assets/sexagem fetal.png';
import espirometria from '../assets/espirometria.png';
import eletroencefalograma from '../assets/eletroencefalograma.jpg';
import eletrocardiograma from '../assets/eletrocardiograma.jpg';
import { MdLocalHospital } from "react-icons/md";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${exames})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  // Lista de nomes e imagens correspondentes
  const examesData = [
    { nome: "Eletrocardiograma", imagem: eletrocardiograma },
    { nome: "Eletroencefalograma", imagem: eletroencefalograma },
    { nome: "Espirometria", imagem: espirometria },
    { nome: "Sexagem fetal", imagem: sexagem },
    { nome: "Ultrassom abdome total", imagem: usgabd },
    { nome: "Usg da Mama", imagem: usgmama },
  ];

  const outrosExames = ["Exame de vista", "Exame de sangue", "Exame de urina", "Exame de fezes", "Exame de pele", "Exame de cabelo"];

  return (
    <div>
      <div style={myStyle}>
        <div className="z-10">
          <h2 className="text-6xl sm:text-8xl font-bold text-white">EXAMES</h2>
          <div className="flex justify-center items-center text-sm text-white border-b-2 border-b-[#fff] border border-transparent">
            <p className="w-max text-lg mx-auto">Confira o dia e horário de nossos exames abaixo</p>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#fff]'>
        <div className='container mx-auto p-10'>      
          <h1 className='text-[#322D94] font-bold text-3xl h-[60px] mx-auto'>Principais Exames</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {examesData.map((exame, index) => (
              <div key={index} className="bg-white text-[#322D94] rounded-2xl border border-[#A6A6A6] overflow-hidden"> {/* Adiciona overflow-hidden para cortar a imagem */}
                <img src={exame.imagem} alt={exame.nome} className="w-full h-[200px] object-cover rounded-t-2xl mb-4" /> {/* Define altura fixa e arredonda as bordas da parte superior */}
                <h3 className='font-bold text-center h-10'>{exame.nome}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[100vh] bg-[#fff] flex justify-center items-center text-sm text-[#322D94]">
        <div className='container mx-auto p-10'>
          <h1 className='text-[#322D94] font-bold text-3xl h-[80px] mx-auto'>Outros Exames</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {outrosExames.map((nome, index) => (
              <div key={index} className="bg-white text-[#322D94] p-4 flex items-center">
                <MdLocalHospital className="mr-2" size={20} />
                <h3 className='font-bold text-[17px] text-start'>{nome}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
