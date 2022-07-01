<script setup>
// import { computed } from "vue";

// methods
function showConsent() {
   console.log("show/hide the consent");
}

// TODO: fetch the list of studies (bonus points if you use the VUEXORM model setup in the project)
// computed properties
</script>

<template>
   <div class="about">
      <div class="text-center mb-6">
         <h1 class="text-2xl">Studies list</h1>
      </div>

      <!-- TODO: Load a modal when the button is clicked -->
      <div data-info="This is the consent document" class="hidden">
         <!-- Generated using cupcakeipsum -->
         Caramels marzipan cheesecake lemon drops biscuit cookie. Pudding topping marzipan brownie oat cake pudding bonbon. Cupcake tootsie roll oat cake
         chocolate cake halvah tiramisu candy tiramisu candy canes. Danish chocolate fruitcake jelly-o halvah apple pie bear claw. Croissant caramels ice cream
         sweet tart. Gummies lollipop sugar plum biscuit tiramisu pudding donut tiramisu wafer. Liquorice toffee lemon drops danish sesame snaps toffee jujubes
         lollipop. Biscuit candy canes dragée oat cake jelly-o powder bear claw candy candy canes. Gummi bears carrot cake biscuit chocolate bar tart wafer
         candy jelly-o. Dessert jelly beans pudding dessert tiramisu. Bonbon carrot cake powder jujubes chocolate bar jelly gingerbread dragée apple pie. Pie
         caramels cotton candy chocolate bar oat cake. Cupcake jujubes caramels soufflé liquorice jujubes lollipop tart. Macaroon chocolate bar dessert apple
         pie tart bear claw sweet roll.
      </div>
      <p class="mb-6">
         Before you join any study, it would be great if you could read the
         <button type="button" class="consent rounded px-2" @click="showConsent">consent sheet</button>.
      </p>

      <!-- TODO: Create the study list -->
      <p>This is where your magic will happen developing a study list ✨.</p>
   </div>
</template>

<style>
button.consent {
   background-color: var(--vt-sano-green);
   color: var(--vt-white);
   border: 1px solid var(--vt-white);
}
</style>
