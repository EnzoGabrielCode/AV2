import Navbar from "../components/navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Aeronaves() {
    const navigate = useNavigate();
    let [pecas, setPecas] = useState([
        {
            id: 1,
            nome: "Asa",
            tipo: "Nacional",
            fornecedor: "Embraer",
            status: "em produção"
        },
        {
            id: 2,
            nome: "Trem de pouso",
            tipo: "Importado",
            fornecedor: "Boeing",
            status: "em produção"
        },
        {
            id: 2,
            nome: "Trem de pouso",
            tipo: "Importado",
            fornecedor: "Boeing",
            status: "em produção"
        },
        {
            id: 2,
            nome: "Trem de pouso",
            tipo: "Importado",
            fornecedor: "Boeing",
            status: "em produção"
        },
    ]);

    const [etapas, setEtapas] = useState([
        {
            id: 1,
            nome: "Montagem da fuselagem",
            prazo: "2024-07-15",
            status: "em andamento"
        },
        {
            id: 1,
            nome: "Montagem da fuselagem",
            prazo: "2024-07-15",
            status: "em andamento"
        },
        {
            id: 1,
            nome: "Montagem da fuselagem",
            prazo: "2024-07-15",
            status: "em andamento"
        },
        {
            id: 2,
            nome: "Instalação dos motores",
            prazo: "2024-08-01",
            status: "pendente"
        }
    ]);

    const [funcionarios, setFuncionarios] = useState([
        {
            id: 1,
            nome: "Carlos Silva",
            telefone: "(11) 91234-5678",
            endereco: "Rua A, 123, São Paulo, SP",
            user: "carlos.silva",
            senha: "senha123"
        },
    ]);

    return (
    <div className="h-full w-full">
        <Navbar />
        <div className="h-full w-ful py-29 px-18">
            <div className="flex flex-col gap-6 h-full w-full">
                <div className="flex flex-row gap-6">
                    <button onClick={() => {navigate('/home')}} className="bg-slate-400 p-2 w-12 cursor-pointer shadow-md hover:bg-slate-300 transition">
                        <img src="/img/iconBack.png" alt="" />
                    </button>
                    <div className="bg-slate-400 size-fit text-2xl shadow-md font-medium p-2">AERONAVE</div>
                    <button className="bg-slate-400 size-fit text-2xl font-medium p-2 cursor-pointer shadow-md hover:bg-slate-300 transition">
                        TESTES
                    </button>
                    <button className="bg-slate-400 size-fit text-2xl font-medium p-2 cursor-pointer shadow-md hover:bg-slate-300 transition">
                        GERAR RELATÓRIO
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-y-7 gap-x-20 pb-7">
                    <button
                        className="bg-gray-300 flex p-8 flex-col text-[1.25rem] font-medium rounded-lg shadow-md"
                    >
                    <h3 className="text-[1.5rem] pb-6 font-extrabold text-start">
                        DETALHES
                    </h3>

                    <div className="w-full border border-gray-500 rounded-lg overflow-hidden">
                        <div className="flex justify-between border-b border-gray-500 p-2 bg-gray-100">
                            <span >MODELO:</span> 
                            
                        </div>

                        <div className="flex justify-between border-b border-gray-500 p-2">
                            <span>TIPO:</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-500 p-2 bg-gray-100">
                            <span>CAPACIDADE:</span>
                        </div>
                    
                        <div className="flex justify-between p-2">
                            <span>ALCANCE:</span>
                        </div>
                    </div>
                    </button>
                    <button
                        className="bg-gray-300 flex p-8 flex-col text-[1.25rem] font-medium rounded-lg shadow-md"
                    >
                    <div className="flex justify-between place-items-center pb-6">
                        <h3 className="text-[1.5rem] pb-6 font-extrabold text-start">
                            ETAPAS
                        </h3>
                        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-500 transition">ADICIONAR</button>
                    </div>
                    <div className="w-full rounded-lg overflow-hidden flex flex-col gap-2">
                        {pecas.slice(0, 4).map((peca, index) => (
                            <div key={index} className="flex justify-between border border-gray-500 p-2 bg-gray-100 rounded-lg">
                                <span>{peca.nome}</span>
                            </div>
                        ))}
                    </div>
                    </button>
                    <div
                        className="bg-gray-300 flex p-8 flex-col text-[1.25rem] font-medium rounded-lg shadow-md"
                    >
                    <div className="flex justify-between place-items-center pb-6">
                        <h3 className="text-[1.5rem] pb-6 font-extrabold text-start">
                            ETAPAS
                        </h3>
                        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-500 transition">ADICIONAR</button>
                    </div>
                    <div className="w-full rounded-lg overflow-hidden flex flex-col gap-2">
                        {etapas.slice(0, 4).map((etapa, index) => (
                            <div key={index} className="flex justify-between border border-gray-500 p-2 bg-gray-100 rounded-lg">
                                <span>{etapa.nome}</span>
                            </div>
                        ))}
                    </div>
                    </div>
                    <button
                        className="bg-gray-300 flex p-8 cursor-pointer flex-col text-[1.25rem] font-medium rounded-lg shadow-md hover:bg-gray-200 transition"
                    >
                    <h3 className="text-[1.5rem] pb-6 font-extrabold text-start">
                        FUNCIONÁRIOS
                    </h3>
                    <div className="w-full rounded-lg overflow-hidden flex flex-col gap-2">
                        {funcionarios.slice(0, 4).map((funcionario, index) => (
                            <div key={index} className="flex justify-between border border-gray-500 p-2 bg-gray-100 rounded-lg">
                                <span>{funcionario.nome}</span>
                            </div>
                        ))}
                    </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Aeronaves;