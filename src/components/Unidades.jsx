import React from 'react';
import unidades from '../assets/14.png';
import teste from '../assets/teste.jpg';

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${unidades})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div>
      <div style={myStyle}>
        <div className="z-10">
          <h2 className="text-4xl sm:text-8xl font-bold text-white">Unidades</h2>
          <div className="flex justify-center items-center text-sm text-white border-b-4 border-b-[#fff] border border-transparent">
            <p className="w-max text-lg mx-auto">Confira a unidade CMC mais próxima de você!</p>
          </div>
        </div>
      </div>
      <div className=' bg-[#fff] justify-center items-center'>
        <div className='flex p-10 m-auto justify-center items-center'>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-10">
            <div className="bg-[#322D94] text-white p-4 rounded-lg  flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 max-w-[700px] justify-center items-center items md:pr-5" style={{ width: '300px', height: '300px' }}>
                <img src={teste} alt="teste" className="w-full h-auto rounded-lg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className='font-bold text-2xl'>Matriz</h3>
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
            {/* Segundo container */}
            <div className="bg-[#322D94] text-white p-4 rounded-lg  flex flex-col md:flex-row mt-6">
              <div className="w-full max-w-[700px] justify-center items-center items md:pr-5" style={{ width: '300px', height: '300px' }}>
                <img src={teste} alt="teste" className="w-full h-auto rounded-lg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className='font-bold text-2xl'>Filial em Pindorama</h3>
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
