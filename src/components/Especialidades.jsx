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
import medico from '../assets/medico.png';
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
import { MdFoodBank } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { IoEarOutline } from "react-icons/io5";
import { GiStomach } from "react-icons/gi";
import { MdAddHomeWork } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { GiPelvisBone } from "react-icons/gi";
import { MdElderly } from "react-icons/md";
import { FaTeamspeak } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";


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
        { nome: 'Dra. Janiffer Lacet', foto: jannifer, Dias: '15 em 15 Sexta ou Sábado', Horarios: "A partir de 8h" },
        { nome: 'Dr. Luciano Chagas', foto: luciano, Dias: 'Quinta-feira', Horarios: "A partir das 10h" },
        { nome: 'Dr. Ariquenes Lyra', foto: medico , Dias: 'De 15 em 15', Horarios: "Horário marcado" },
        { nome: 'Dr. Janio Araruna', foto: medico , Dias: 'De 15 em 15', Horarios: "Horário marcado" },

      ]
    },
    {
      nome: 'Pediatria',
      icone: <FaChild />,
      medicos: [
        { nome: 'Dra. Mônica Amélia', foto: monica, Dias: 'Segunda a sexta', Horarios: "10h às 20h" },
        { nome: 'Dra. Camila Gerbi', foto: medico, Dias: 'Segunda a sexta', Horarios: "10h às 20h" },
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
        { nome: 'Dr. Janio Maciel', foto: janio, Dias: 'Segunda a sexta', Horarios: "8h às 16h" },
        { nome: 'Dra. Flávia Melina', foto: janio, Dias: 'Segunda a sexta', Horarios: "8h às 16h" },
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
      nome: 'Otorrinolaringologista',
      icone: <IoEarOutline/>,
      medicos: [
        { nome: 'Dra. Nathália Uchoa', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dr. Wesley Vilela', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },

      ]
    },
    {
      nome: 'Oftamologista',
      icone: <IoIosEye/>,
      medicos: [
        { nome: 'Dr. Andre Gusmão', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },

      ]
    },
    {
      nome: 'Gerontologista',
      icone: <IoIosEye/>,
      medicos: [
        { nome: 'Dr. Crismédio Costa', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },

      ]
    },
    {
      nome: 'Terapeuta Ocupacional',
      icone: <IoIosEye/>,
      medicos: [
        { nome: 'Dra. Elizabete Carvalho', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },

      ]
    },
    {
      nome: 'Coloproctologista',
      icone: <GiPelvisBone/>,
      medicos: [
        { nome: 'Dr. Arthur Manoel', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },

      ]
    },
    {
      nome: 'Fonoaudiologia',
      icone: <FaTeamspeak/>,
      medicos: [
        { nome: 'Dr. Mylena Dias', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },

      ]
    },
    {
      nome: 'Endocrinologia',
      icone: <GiStomach/>,
      medicos: [
        { nome: 'Dr. Sirlean Sena', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Regina Cavalcante', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },

      ]
    },
    {
      nome: 'Neurologia',
      icone: <FaBrain/>,
      medicos: [
        { nome: 'Dr. Matheus Pires', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
      ]
    },
    {
      nome: 'Médico do Trabalho',
      icone: <MdAddHomeWork/>,
      medicos: [
        { nome: 'Dr. Israel Gomes', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
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
        { nome: 'Dr. Rivaldo Cavalcante', foto: rivaldoj, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Marcela Almeida', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
      ]
    },
    {
      nome: 'Dermatologia',
      icone: <FaHandHoldingMedical/>,
      medicos: [
        { nome: 'Dra. Daniela Azevedo', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" }
      ]
    },
    {
      nome: 'Nutricionista',
      icone: <MdFoodBank />,
      medicos: [
        { nome: 'Dra. Risoneide Vasconcelos ', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Beatriz Gnoatto', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Barbara Gabriela', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dr. Gabriel de Sena', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Kelly Lima', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Manuele Azevedo', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
      ]
    },
    {
      nome: 'Psicologia',
      icone: <RiSpeakFill />,
      medicos: [
        { nome: 'Dra. Carol Lessa', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Carlony Silva', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Denya Lessa', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Débora Lessa', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Elytania Vasconcelos', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Jayne Limeira', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Késily Lima', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Luana Maria', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Meirielly Ferreira', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Tatiane', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Tereza Neta', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" },
        { nome: 'Dra. Thaysa Vasconcelos', foto: medico, Dias: 'Segunda a sexta', Horarios: "7h às 18h" }
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
                <h3 className='flex items-center font-bold text-[25px] gap-2'>{especialidade.icone} {especialidade.nome}</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-6 ">
                  {especialidade.medicos.map((medico, index) => (
                    <div key={index} className="bg-[rgba(219,235,246,0.5)] w-25 rounded-2xl flex flex-col items-center space-y-2 p-2">
                      <img src={medico.foto} alt={medico.nome} className="w-[120px] h-[120px] rounded-2xl" />
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
