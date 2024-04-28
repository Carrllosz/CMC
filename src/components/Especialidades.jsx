import React from 'react';
import exames from '../assets/especialidades.jpg';
import medica from '../assets/medica.png';
import ana from '../assets/draAnaRosa(reumatologista).png';
import clarissa from '../assets/draClarissaAlergista.png';
import monica from '../assets/draMonicaPediatra.png';
import eduardo from '../assets/dreduardoNunesUrologista.png';
import luciano from '../assets/drLucianoChagasAngiologista.jpg';
import rivaldoj from '../assets/drRivaldo.png';
import jannifer from '../assets/Janiffer-Miranda-Lacet-cardiologista.jpg';
import janio from '../assets/janioMacielOptometrista.png';
import { MdHearing } from "react-icons/md";
import { GiHeartOrgan } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { RiSpeakFill } from "react-icons/ri";
import { GiBarefoot } from "react-icons/gi";
import { GiSkeletalHand } from "react-icons/gi";
import { BsLungsFill } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { TbScanEye } from "react-icons/tb";
import { FaHandDots } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa";


const Especialidades = () => {
  const myStyle = {
    backgroundImage: `url(${exames})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const especialidadesEMedicos = [
    {
      nome: 'Cardiologia',
      icone: <GiHeartOrgan />,
      medicos: [
        { nome: 'Dra. Janiffer Lacet', foto: jannifer, Dias: 'Segunda a sexta', Horarios: "9h às 17h" },
        { nome: 'Dr. Luciano Chagas', foto: luciano, Dias: 'Segunda a sexta', Horarios: "9h às 17h" }
      ]
    },
    {
      nome: 'Pediatria',
      icone: <FaChild />,
      medicos: [
        { nome: 'Dra. Mônica Amélia', foto: monica, Dias: 'Segunda a sexta', Horarios: "10h às 20h" }
      ]
    },
    {
      nome: 'Urologia',
      icone: <BsLungsFill/>,
      medicos: [
        { nome: 'Dr. Eduardo Nunes', foto: eduardo, Dias: 'Segunda a sexta', Horarios: "8h às 18h" }
      ]
    },
    {
      nome: 'Optometrista',
      icone: <TbScanEye/>,
      medicos: [
        { nome: 'Dr. Janio Maciel', foto: janio, Dias: 'Segunda a sexta', Horarios: "8h às 16h" }
      ]
    },
    {
      nome: 'Reumatologia',
      icone: <GiSkeletalHand/>,
      medicos: [
        { nome: 'Dra. Ana Gonçalves', foto: ana, Dias: 'Segunda a sexta', Horarios: "7h às 18h" }
      ]
    },
    {
      nome: 'Alergista',
      icone: <FaHandDots/>,
      medicos: [
        { nome: 'Dra. Clarissa Tenório', foto: clarissa, Dias: 'Segunda a sexta', Horarios: "7h às 18h" }
      ]
    },
    {
      nome: 'Clínico Geral',
      icone: <FaNotesMedical/>,
      medicos: [
        { nome: 'Dr. Rivaldo Cavalcante', foto: rivaldoj, Dias: 'Segunda a sexta', Horarios: "7h às 18h" }
      ]
    }
    
  ];

  return (
    <div>
      <div style={myStyle}>
        <div className="z-10">
          <h2 className="text-4xl sm:text-8xl font-bold text-white">Especialidades</h2>
          <div className="flex justify-center items-center text-sm text-white border-b-4 border-b-[#fff] border border-transparent">
            <p className="w-max text-lg mx-auto">Confira as especialidades ofertadas pelo CMC abaixo</p>
          </div>
        </div>
      </div>
      <div className='bg-[#fff] justify-center items-center'>
        <div className='flex-col flex p-10'> 
          <h1 className='text-[#322D94] font-bold text-3xl mx-auto justify-start items-start text-start'>Nossos principais especialistas</h1>         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 p-10">
            {especialidadesEMedicos.map((especialidade, index) => (
              <div key={index} className="bg-[#322D94] text-white p-4 rounded-lg">
                <h3 className='flex items-center font-bold text-[19px] gap-2'>{especialidade.icone} {especialidade.nome}</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-10 ">
                  {especialidade.medicos.map((medico, index) => (
                    <div key={index} className="bg-[rgba(219,235,246,0.5)] w-40 rounded-2xl flex flex-col items-center space-y-2 p-2">
                      <img src={medico.foto} alt={medico.nome} className="w-20 h-20 rounded-2xl" />
                      <div className="text-center">
                        <p className='font-bold text-[13px]'>{medico.nome}</p>
                        <p className='text-[12px]'>{medico.Dias}</p>
                        <p className='text-[12px]'>{medico.Horarios}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Especialidades;
