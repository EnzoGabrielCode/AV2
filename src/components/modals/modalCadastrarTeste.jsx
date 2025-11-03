import Modal from "./modal.jsx";
import { useState } from "react";

function ModalCadastrarTeste({ open, onClose, onSave }) {
  const [tipo, setTipo] = useState("");
  const [resultado, setResultado] = useState("");

  const handleSave = () => {
    const novoTeste = { tipo, resultado };
    onSave(novoTeste);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Cadastrar Teste</h2>
      <div className="flex flex-col gap-3">
        <label>
          Tipo:
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="border rounded p-1 w-full"
          />
        </label>

        <label>
          resultado:
          <input
            type="resultado"
            value={resultado}
            onChange={(e) => setResultado(e.target.value)}
            className="border rounded p-1 w-full"
          />
        </label>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-200"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500"
          >
            Salvar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalCadastrarTeste;
