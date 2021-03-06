import React from 'react';
import { TbWind, TbTemperature, TbDroplet } from 'react-icons/tb';

export const InfoGrid = ({ weather }) => {
  const { location, current, forecast } = weather;
  const [{ hour }] = forecast.forecastday;
  const cero = {
    date: hour[0].time.split(' ').pop(),
    img: hour[0].condition['icon'].slice(2),
    temp: hour[0].temp_c,
  };
  const doce = {
    date: hour[12].time.split(' ').pop(),
    img: hour[12].condition['icon'].slice(2),
    temp: hour[12].temp_c,
  };
  const cinco = {
    date: hour[17].time.split(' ').pop(),
    img: hour[17].condition['icon'].slice(2),
    temp: hour[17].temp_c,
  };
  const nueve = {
    date: hour[21].time.split(' ').pop(),
    img: hour[21].condition['icon'].slice(2),
    temp: hour[21].temp_c,
  };

  return (
    <div className="grid auto-rows-min  text-center my-16">
      <p className="font-normal text-md text-slate-200 pb-6 lg:text-xl">
        {location.localtime}
      </p>
      <div className="main-information flex flex-col justify-center items-center ">
        <h2 className="font-semibold text-xl lg:text-2xl text-slate-200">{`${location.name}, ${location.country}`}</h2>
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
      <div className="secondary-info flex items-center justify-between my-8 p-2">
        <p className="flex items-center  text-white  lg:text-xl">
          <TbDroplet size="25px" className="mr-2 " /> {current.humidity} %
        </p>
        <p className="flex items-center sm:px-6 text-white lg:text-xl">
          <TbTemperature size="25px" className="mr-2 " />
          {Math.round(current.feelslike_c)} ºC
        </p>
        <p className="flex items-center text-sm text-white lg:text-xl">
          <TbWind size="25px" className="mr-2 " /> {current.wind_kph} km/h
        </p>
      </div>
      <div className="forecast-hour w-full flex flex-col justify-center p-2">
        <h2 className="text-left text-2xl lg:text-3xl text-white mb-2 font-semibold">
          Forecast
        </h2>
        <div className="line w-full h-[1px] bg-slate-300 flex justify-between ">
          <div className="cero flex flex-col py-4">
            <p className="text-white font-normal text-md lg:text-lg">
              {cero.date}
            </p>
            <figure>
              <figcaption>
                <img src={`https://${cero.img}`} />
              </figcaption>
            </figure>
            <h3 className="text-white font-semibold text-md lg:text-lg">
              {cero.temp} °C
            </h3>
          </div>

          <div className="doce flex flex-col py-4">
            <p className="text-white font-normal text-md lg:text-lg">
              {doce.date}
            </p>
            <figure>
              <figcaption>
                <img src={`https://${doce.img}`} />
              </figcaption>
            </figure>
            <h3 className="text-white font-semibold text-md lg:text-lg">
              {doce.temp} °C
            </h3>
          </div>

          <div className="cinco flex flex-col py-4">
            <p className="text-white font-normal text-md lg:text-lg">
              {cinco.date}
            </p>
            <figure>
              <figcaption>
                <img src={`https://${cinco.img}`} />
              </figcaption>
            </figure>
            <h3 className="text-white font-semibold text-md lg:text-lg">
              {cinco.temp} °C
            </h3>
          </div>

          <div className="nueve flex flex-col py-4">
            <p className="text-white font-normal text-md lg:text-lg ">
              {nueve.date}
            </p>
            <figure>
              <figcaption>
                <img src={`https://${nueve.img}`} />
              </figcaption>
            </figure>
            <h3 className="text-white font-semibold text-md lg:text-lg">
              {nueve.temp} °C
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
