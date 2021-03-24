<template>
  <div class="botiga">
      <br>
    <h1>Botiga</h1>
    <keep-alive>
      <component :is="getCurrent"></component>
    </keep-alive>
  </div>
</template>

<script src="../scripts/botiga.js">
</script>