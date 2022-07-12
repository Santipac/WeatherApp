import React from 'react';
import { TbWind, TbTemperature, TbDroplet } from 'react-icons/tb';

export const InfoGrid = ({ weather }) => {
  const { location, current, forecast } = weather;
  const { forecastday } = forecast;
  const [{ day }] = forecastday;

  return (
    <div className="grid auto-rows-min  text-center my-16">
      <p className="font-normal text-md text-slate-400 pb-6">
        {location.localtime}
      </p>
      <div className="main-information flex flex-col justify-center items-center ">
        <h2 className="font-semibold text-xl text-slate-200">{`${location.name}, ${location.country}`}</h2>
        <figure>
          <figcaption>
            <img
              src={current.condition.icon.replace('64x64', '128x128')}
              alt="Weather Logo"
            />
          </figcaption>
        </figure>
        <h2 className="text-5xl font-semibold text-white ">
          {current.temp_c} ºC
        </h2>
      </div>
      <div className="secondary-info flex items-center justify-between my-8">
        <p className="flex items-center px-6 text-slate-300">
          <TbDroplet size="25px" className="mr-2 " /> {current.humidity} %
        </p>
        <p className="flex items-center px-6 text-slate-300">
          <TbTemperature size="25px" className="mr-2 " />
          {Math.round(current.feelslike_c)} ºC
        </p>
        <p className="flex items-center px-6 text-slate-300">
          <TbWind size="25px" className="mr-2 " /> {current.wind_kph} km/h
        </p>
      </div>
    </div>
  );
};
