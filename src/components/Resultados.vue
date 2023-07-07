<script setup>

  defineProps({
    resultado:{
      type:Object,
      required:true
    }
  })

</script>
<template>
  <section
    class="bg-white shadow-md py-6 flex flex-col justify-center items-center gap-2 rounded-md"
  >
    <img
      class="mx-auto w-32 object-cover"
      :src="'https://cryptocompare.com/' + resultado.IMAGEURL"
      alt="imagen reference cryptoMoneda"
    />
    <div>
      <p class="font-bold text-slate-700">
        Precio: <span class="font-normal">{{ resultado.PRICE }}</span>
      </p>
      <p class="font-bold text-slate-700">
        Precio Mas alto:
        <span class="font-normal">{{ resultado.HIGHDAY }}</span>
      </p>
      <p class="font-bold text-slate-700">
        Precio Mas Bajo:
        <span class="font-normal">{{ resultado.LOWDAY }}</span>
      </p>
      <p class="font-bold text-slate-700">
        Ultima Actualizacion:
        <span class="font-normal">{{ resultado.LASTUPDATE }}</span>
      </p>
    </div>
  </section>
</template>
