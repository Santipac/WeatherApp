import { Buscador } from './components/molecules/Buscador';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-l from-[#52E5E7] to-[#130CB7] flex flex-col  justify-center items-center p-12">
      <h1 className="font-bold  text-white text-3xl md:text-4xl">
        Weather App
      </h1>
      <Buscador />
    </div>
  );
}

export default App;

// #061854  #310941
