import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { useState } from "react";

function HomeAdm() {
  const navigate = useNavigate();
  const [aeronaves, setAeronaves] = useState([
    {
      id: 1,
      cod: "PT-ABC",
      modelo: "Cessna 172",
      tipo: "militar",
      capacidade: 4,
      alcance: 1289,
    },
    {
      id: 2,
      cod: "PT-DEF",
      modelo: "Boeing 737",
      tipo: "comercial",
      capacidade: 189,
      alcance: 6570,
    },
  ]);

  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="h-full w-ful py-29 px-18">
        <div className="flex flex-col gap-6 h-full w-full">
          <div className="flex flex-row gap-6">
            <button className="bg-slate-400 size-fit text-2xl font-medium p-2 cursor-pointer shadow-md hover:bg-slate-300 transition">
              AERONAVES
            </button>
            <button className="bg-slate-400 size-fit text-2xl font-medium p-2 cursor-pointer shadow-md hover:bg-slate-300 transition">
              FUNCIONÁRIOS
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-7 gap-x-20 pb-7">
            {aeronaves.map((aeronave) => (
              <button
                key={aeronave.id}
                className="bg-gray-300 flex p-8 cursor-pointer flex-col text-[1.25rem] font-medium rounded-lg shadow-md hover:bg-gray-200 transition"
              >
                <h3 className="text-[1.5rem] pb-6 font-extrabold text-start">
                  {aeronave.cod}
                </h3>
                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                  <span>MODELO:</span>
                  <span>{aeronave.modelo}</span>

                  <span>TIPO:</span>
                  <span>{aeronave.tipo}</span>

                  <span>CAPACIDADE:</span>
                  <span>{aeronave.capacidade}</span>

                  <span>ALCANCE:</span>
                  <span>{aeronave.alcance}</span>
                </div>
              </button>
            ))}
            <button className="bg-gray-300 flex p-8 cursor-pointer justify-center items-center rounded-lg shadow-md hover:bg-gray-200 transition">
              <img className="w-15" src="/img/iconAdd.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdm;
