import React from 'react';
import bg from '../assets/17.png';
import cmc from '../assets/14.png';
import about from '../assets/about.png';
import Nazare from '../assets/nazare.png';

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const history = {
    backgroundImage: `url(${about})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: '100vh',
    display: 'flex',
  };

  const semicircleStyle = {
    width: '85vw', // Ajuste a largura conforme necessário
    height: '50vh', // Mantenha a altura igual à altura da tela
    backgroundColor: '#322D94', // Cor de fundo do semicírculo
    borderRadius: '0 50vw 50vw 0', // Bordas arredondadas para formar um semicírculo
    position: 'absolute',
    left: 0, // Colado à tela à esquerda
    top: 290,
    overflow: 'hidden', // Oculta a parte do semicírculo que está fora do contêiner
  };

  const textStyle = {
    WebkitTextFillColor: 'transparent', // Deixa o texto transparente
    WebkitTextStroke: '2px #322D94', // Adiciona o contorno
    zIndex: 10, // Certifique-se de que o texto esteja na frente do semicírculo
  };

  const contentStyle = {
    padding: '20px', // Ajuste o preenchimento conforme necessário
  };

  return (
    <div>
      <div style={myStyle}>
        <div className="z-10">
          <h2 className='pb-60 md:pb-40 md:text-[6rem] text-[4rem] font-bold' style={textStyle}>QUEM SOMOS?</h2>
        </div>
        <div style={semicircleStyle} className='grid grid-cols-2'>
            <div className='text-white justify-start items-start text-start p-5' >
                <h1 className='font-bold text-2xl'>Nazaré Ezequeiel</h1>
                <h2>CEO Centro Médico de Coruripe</h2>
                <p className='pt-5 text-[12px] md:text-[15px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <img className='z-20 md:w-[302px]' src={Nazare} />
        </div>
      </div>
      <div style={history} className="flex-col h-[100vh] pb-[250px] bg-white flex justify-center text-white">
      <h2 className=' md:text-[4rem] text-center justify-center items-center text-[2rem] md:text-start md:justify-start md:items-start font-bold p-10' style={textStyle}>Nossa História</h2>
        <div className='grid grid-cols-2 md:grid-cols-2  pl-10 pr-10 gap-4'>
          <div className='bg-[#322D94] text-[15px] rounded-2xl p-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
          <img className='rounded-2xl z-40' src={cmc}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
