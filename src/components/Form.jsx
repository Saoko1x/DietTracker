import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import dietlogo from "../assets/dietlogo.png";

const supabase = createClient('https://woavvzdhcdrlnxbwlyfr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvYXZ2emRoY2RybG54YndseWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyNTc5MDksImV4cCI6MTk5NjgzMzkwOX0.FMF7dxXeRE4n-W9dJOngXgDnF1bkXZrrXBVVUldPy6s')

const getSession = () => {
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(session.user.id) // Obtenemos la sesion que esta en el navegador del cliente
    });
  };
const uid = getSession();


const { data: { user } } = await supabase.auth.getUser()
const Form  = () => {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  //const [fechaNacimiento, setFechaNacimiento] = useState("");
  //const [sexo, setSexo] = useState("");
  //const [nacionalidad, setNacionalidad] = useState("");
  //const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  //const [curp, setCurp] = useState("");
  //const [clickCount, setClickCount] = useState(0);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: usuarios, error } = await supabase
    .from("usuarios")
    //.limit(1) //limitar querys
    .insert({
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      user_id: user.id,
    });
    }


return (
    <div className="min-h-screen bg-[#121212] items-center justify-center flex">
      <div className="grid tablet:grid-cols-2 py-12 ">
        <div className="col-span-1 flex items-center justify-center">
          <img
            width={"1000"}
            height={"600"}
            src={dietlogo}
            alt="Logo Vaccisign"
          />
        </div>
        <div className="col-span-1 flex items-center justify-center py-12">
          <div className="max-w-md w-full">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="bg-[#1e1e1e] flex flex-col w-96 border border-gray-900 rounded-lg p-4">
                  <form
                    className="flex flex-col space-y-8"
                    onSubmit={handleSubmit}
                  >
                    <label className="font-bold text-xl text-white">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      value={nombre}
                      placeholder="Nombre"
                      className="border rounded-lg py-3 px-3 mt-4 bg-[#121212] border-[#0CF25D] placeholder-white-500 text-white"
                      onChange={(e) => setNombre(e.target.value)}
                    />
                    <label className="font-bold text-xl text-white">
                      Apellido
                    </label>
                    <input
                      id="apellido"
                      type="text"
                      value={apellido}
                      placeholder="Apellido"
                      className="border rounded-lg py-3 px-3 mt-4 bg-[#121212] border-[#0CF25D] placeholder-white-500 text-white"
                      onChange={(e) => setApellido(e.target.value)}
                    />
                    <label htmlFor="telefono" className="font-bold text-xl text-white">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="text"
                      value={telefono}
                      maxLength={13}
                      placeholder="000000000000"
                      inputMode="numeric" // Solo permite la entrada de números
                      className="border rounded-lg py-3 px-3 mt-4 bg-[#121212] border-[#0CF25D] placeholder-white-500 text-white"
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-[#0CF25D] text-white rounded-full py-2 px-4 mt-6 font-bold hover:bg-green-700"
                    >
                      Registrarse
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;