import { useState, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useApi } from '../../hooks/useApi';
import { InfoGrid } from '../organism/InfoGrid';

export const Buscador = () => {
  const [input, setInput] = useState('');
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(undefined);
  const handlerChange = ({ target }) => {
    setInput(target.value);
  };
  const HandlerClick = e => {
    e.preventDefault();
    if (input != '') {
      setCity(input);
      setInput('');
    } else return;
  };

  const getWeather = async () => {
    if (city != '') {
      const data = await useApi(city);
      setWeather(data);
    } else return;
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  return (
    <div className="grid auto-rows-min mt-16 ">
      <form className="flex items-center justify-center">
        <input
          className=" h-8 bg-[#ffffff85]  rounded-md px-4 border-none focus:ring-black focus:border-none text-slate-800"
          type="text"
          value={input}
          onChange={handlerChange}
        />
        <button
          className="ml-2 min-w-[2rem] rounded-full h-8 bg-[#ffffff85] text-slate-800 flex justify-center"
          onClick={HandlerClick}
        >
          <IoSearchOutline size="20px" className="mt-1.5 " />
        </button>
      </form>

      {weather == undefined ? null : <InfoGrid weather={weather} />}
    </div>
  );
};
