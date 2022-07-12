import { Buscador } from './components/molecules/Buscador';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-l from-[#061854] to-[#310941] flex flex-col  items-center p-16">
      <h1 className="font-bold text-4xl text-white">Weather App</h1>
      <Buscador />
    </div>
  );
}

export default App;
