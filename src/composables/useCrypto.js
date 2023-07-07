import { ref , onMounted, reactive } from "vue";
import { obteniendoCryptos } from "../api";
import { Monedas as money} from "../data/index"

export default function useCrypto(){
  const criptos = ref([]);
  const monedas =  ref(money)
  const cotizacion = reactive({
    moneda: "",
    criptoMoneda: "",
  });
  const alerta = ref("");
  const cargando = ref(false);

  const getDataApi = async()=>{
    try {
      const datos =await obteniendoCryptos()
      criptos.value = datos
    } catch (error) {
      console.log(error)
    }
  }

  onMounted(() => {
    getDataApi();
  });

  return { criptos , monedas , cotizacion , alerta, cargando }
}