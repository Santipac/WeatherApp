export const useApi = async ubicacion => {
  try {
    let res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=d41543a57e194e51b0701639220707&q=${ubicacion}`
    );
    const data = await res.json();
    return data;
  } catch {
    console.log('algo salio mal');
  }
};
