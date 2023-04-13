import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  "https://woavvzdhcdrlnxbwlyfr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvYXZ2emRoY2RybG54YndseWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyNTc5MDksImV4cCI6MTk5NjgzMzkwOX0.FMF7dxXeRE4n-W9dJOngXgDnF1bkXZrrXBVVUldPy6s"
);

const Login = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-100'>
    <div className='bg-white p-8 rounded-md shadow-md max-w-sm w-full'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Iniciar sesión</h2>
      <Auth supabaseClient={supabase} providers={[]} />
    </div>
  </div>
);

export default Login;
