<template>
<div id="body">
    <CabeceraHome></CabeceraHome>
    <MenuNavegacion></MenuNavegacion>
    <BannerHome></BannerHome>
    <BodyHome></BodyHome>
    <Barra></Barra>
    <PiePagina></PiePagina>
</div>
</template>

<script>
import CabeceraHome from '../components/componentshome/CabeceraHome.vue'
import MenuNavegacion from '../components/MenuNavegacion.vue'
import BannerHome from '../components/componentshome/BannerHome.vue'
import BodyHome from '../components/componentshome/BodyHome.vue'
import Barra from '../components/Barra.vue'
import PiePagina from '../components/PiePagina.vue'

export default {
  components: { 
    CabeceraHome, 
    MenuNavegacion,
    BannerHome,
    BodyHome,
    Barra,
    PiePagina
    }
  
}
</script>

<style>
#body {
  height: 100%;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-color: blue;
  border-style: solid;
}

#h1prueba1{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(12, 12, 163);
    font-size:xx-large;
    padding-top: 2%;
    font-weight: 1000;
}

#h1prueba2{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(12, 12, 163);
    font-size:x-large;
    padding-top: 1%;
    font-weight: 650;
}
</style>