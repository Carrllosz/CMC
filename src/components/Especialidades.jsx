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
import adans from '../assets/neuroadans.jpg'
import flavia from '../assets/flavia.png'
import pneumologista from '../assets/pneumologista.png'
import psiquiatra from '../assets/psiquiatra.jpg'
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
import { RiPsychotherapyFill } from "react-icons/ri";
import { FaLungsVirus } from "react-icons/fa";
import { IoIosWoman } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { GiSkeletonInside } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";




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
      nome: 'Angiologista',
      icone: <FaUserDoctor/>,
      medicos: [
        { nome: 'Dr. Luciano Chagas', foto: luciano, Dias: 'CRM/AL: 4416 | RQE: 3917/3971', Horarios: " " }
      ]
    },
    {
      nome: 'Alergista',
      icone: <FaHandDots/>,
      medicos: [
        { nome: 'Dra. Clarissa Tenório', foto: clarissa, Dias: 'CRM/AL: 2341 | RQE: 1569', Horarios: " " }
      ]
    },
    {
      nome: 'Cardiologia',
      icone: <GiHeartOrgan />,
      medicos: [
        { nome: 'Dra. Janiffer Lacet', foto: jannifer, Dias: 'CRM/AL: 5526', Horarios: " " },
        { nome: 'Dr. Ariquenes Lyra', foto: medico , Dias: '', Horarios: " " },
        { nome: 'Dr. Janio Araruna', foto: medico , Dias: '', Horarios: " " },

      ]
    },
    {
      nome: 'Coloproctologista',
      icone: <GiPelvisBone/>,
      medicos: [
        { nome: 'Dr. Arthur Manoel', foto: medico, Dias: 'CRM/AL: 5356 |RQE: 3647/3648 ', Horarios: "" },

      ]
    },
    {
      nome: 'Dermatologia',
      icone: <FaHandHoldingMedical/>,
      medicos: [
        { nome: 'Dra. Daniela Azevedo', foto: medico, Dias: '', Horarios: "" }
      ]
    },
    {
      nome: 'Endocrinologia',
      icone: <GiStomach/>,
      medicos: [
        { nome: 'Dr. Sirlean Sena', foto: medico, Dias: 'CRM 2673 AL | RQE 774', Horarios: "" },
        { nome: 'Dra. Regina Cavalcante', foto: medico, Dias: 'CRM/AL: 2664 | RQE 631', Horarios: " " },

      ]
    },
    {
      nome: 'Fisioterapeuta',
      icone: <MdFoodBank />,
      medicos: [
        { nome: 'Dra. Debora Dias', foto: medico, Dias: 'CREFITO 1 / 394529F', Horarios: " " },
        { nome: 'Dra. Quitéria Batista', foto: medico, Dias: ' ', Horarios: " " },
      ]
    },
    {
      nome: 'Fonoaudiologia',
      icone: <FaTeamspeak/>,
      medicos: [
        { nome: 'Dr. Mylena Dias', foto: medico, Dias: 'CRFa 4-14651', Horarios: "" },

      ]
    },
    {
      nome: 'Ginecologista Obstetra',
      icone: <IoIosWoman/>,
      medicos: [
        { nome: 'Dra. Fernanda Leila', foto: medico, Dias: 'CRM/AL: 6878 | RQE: 4224', Horarios: "" },

      ]
    },
    {
      nome: 'Médico do Trabalho',
      icone: <MdAddHomeWork/>,
      medicos: [
        { nome: 'Dr. Israel Gomes', foto: medico, Dias: ' ', Horarios: " " },
      ]
    },
    {
      nome: 'Neurologia',
      icone: <FaBrain/>,
      medicos: [
        { nome: 'Dr. Adans Soares', foto: adans, Dias: 'CRM/AL: 5608 | RQE 3760', Horarios: "" },
      ]
    },
    {
      nome: 'Nutricionista',
      icone: <MdFoodBank />,
      medicos: [
        { nome: 'Dra. Risoneide Vasconcelos ', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Beatriz Gnoatto', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Barbara Gabriela', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dr. Gabriel de Sena', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Kelly Lima', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Manuele Azevedo', foto: medico, Dias: '', Horarios: "" },
      ]
    },
    {
      nome: 'Optometrista',
      icone: <TbScanEye/>,
      medicos: [
        { nome: 'Dr. Janio Maciel', foto: janio, Dias: 'SROO/AL: 1009 | CBOO: 006', Horarios: "" },
        { nome: 'Dra. Flávia Melina', foto: flavia, Dias: 'SROO/AL: 1338 | CBOO: 02.00401-1', Horarios: "" },
      ]
    },
    {
      nome: 'Otorrinolaringologista',
      icone: <IoEarOutline/>,
      medicos: [
        { nome: 'Dr. Wesley Vilela', foto: medico, Dias: 'CRM/AL: 6144 | RQE: 3447', Horarios: " " },

      ]
    },
    {
      nome: 'Oftamologista',
      icone: <IoIosEye/>,
      medicos: [
        { nome: 'Dr. Andre Gusmão', foto: medico, Dias: 'CRM/AL: 6997 ', Horarios: " " },

      ]
    },
    {
      nome: 'Ortopedista',
      icone: <GiSkeletonInside/>,
      medicos: [
        { nome: 'Dr. Argemiro Neto', foto: medico, Dias: 'CRM/AL: 6997 ', Horarios: " " },

      ]
    },
    {
      nome: 'Pediatria',
      icone: <FaChild />,
      medicos: [
        { nome: 'Dra. Mônica Amélia', foto: monica, Dias: 'CRM/AL: 2187 | RQE: 1.652/2.577', Horarios: "" },
        { nome: 'Dra. Camila Gerbi', foto: medico, Dias: 'CRM/AL: 6888 | RQE: 4770/4771', Horarios: "" },
      ]
    },
    {
      nome: 'Reumatologia',
      icone: <GiSkeletalHand/>,
      medicos: [
        { nome: 'Dra. Ana Gonçalves', foto: ana, Dias: 'CRM/AL: 2901', Horarios: " " }
      ]
    },
    {
      nome: 'Terapeuta Ocupacional',
      icone: <FaHandsHelping/>,
      medicos: [
        { nome: 'Dra. Elizabete Carvalho', foto: medico, Dias: 'CREFITO: 23585', Horarios: " " },

      ]
    },
    {
      nome: 'Pneumologista',
      icone: <FaLungsVirus />,
      medicos: [
        { nome: 'Dra. Thaysa Albuquerque', foto: pneumologista, Dias: 'CRM/AL: 6867 |  RQE 5248', Horarios: "" },
      ]
    },
    {
      nome: 'Psiquiatra',
      icone: <RiPsychotherapyFill />,
      medicos: [
        { nome: 'Dra. Diogo Lima ', foto: psiquiatra, Dias: 'CRM/AL: 8673', Horarios: " " },
      ]
    },
    {
      nome: 'Psicologia',
      icone: <RiSpeakFill />,
      medicos: [
        { nome: 'Dra. Carol Lessa', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Carlony Silva', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Denya Lessa', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Débora Lessa', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Elytania Vasconcelos', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Jayne Limeira', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Késily Lima', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Luana Maria', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Meirielly Ferreira', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Tatiane', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Tereza Neta', foto: medico, Dias: '', Horarios: "" },
        { nome: 'Dra. Thaysa Vasconcelos', foto: medico, Dias: '', Horarios: "" }
      ]
    },
    {
      nome: 'Urologia',
      icone: <BsLungsFill/>,
      medicos: [
        { nome: 'Dr. Eduardo Nunes', foto: eduardo, Dias: 'CRM/AL: 4159 | RQE: 2258', Horarios: "" }
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
