import RegisterForm from "./pages/RegisterForm"; // Sesuaikan path-nya

function App() {
  return (
    <div className="p-10 bg-slate-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Form Pendaftaran</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;