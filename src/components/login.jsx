import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center place-items-center w-full h-screen min-w-[320px]">
      <div className="bg-[rgba(58,58,58,0.596)] flex flex-col place-items-center rounded-[8%] py-[62px] px-8 h-fit w-fit">
        <h1 className="text-white font-bold text-center text-[3.2rem] pb-[10%]">
          AEROCODE
        </h1>
        <form
          className="flex flex-col items-center justify-center gap-[15px] "
          action=""
        >
          <input
            className="bg-gray-100 w-4/5 text-[2rem] text-center rounded-xl"
            type="text"
            name="user"
            id="user"
            placeholder="USER"
          />
          <input
            className="bg-gray-100 w-4/5 text-[2rem] text-center rounded-xl"
            type="password"
            name="password"
            id="password"
            placeholder="SENHA"
          />
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-500 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
