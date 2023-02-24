const API_KEY = 'e3e7101e98715f7c54f69484dcacc43c';

const buscaInformacoes = async () => {
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const weatherInfo = document.getElementById('informacoesTempo');
    weatherInfo.innerHTML = `
      <h2>${data.name}</h2>
      <p>País: ${data.sys.country}</p>
      <p>Temperatura: ${data.main.temp.toFixed(1)}°C</p>
      <p>Sensação térmica: ${data.main.feels_like.toFixed(1)}°C</p>
      <p>Umidade: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    console.log(error);
  }
};
