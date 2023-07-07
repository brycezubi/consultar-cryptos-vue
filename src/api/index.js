export const obteniendoCryptos = async () => {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error al comunicarse con la ruta");

    const { Data: criptomonedas } = await res.json();
    return criptomonedas
  } catch (error) {
    console.error(error);
  }
};

export const getDataInfo = async (cotizacion) => {
  const { moneda, criptoMoneda } = cotizacion;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error al conectar con la ruta");
    const { DISPLAY:data } = await res.json();
    return data
  } catch (error) {
  }
};
