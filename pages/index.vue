<template>
  <main>
    <div class="background">
      <app-masthead />
    </div>
    <div class="headings">
      <h1>
        Hello Beautiful,
        <br />You are welcomed here
      </h1>
    </div>
    <div class="links">
      <p>Follow me</p>
    </div>
    <div class="nextpage">Projects ></div>
  </main>
</template>

<script>
import AppMasthead from "~/components/AppMasthead.vue";

export default {
  components: {
    AppMasthead
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  // the entire height but minus the height of the nav
  height: calc(100vw - 100px);
  display: grid;
  grid-template-columns: 100px 100px 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 50px 100px;
  grid-column-gap: 0px;
  .background {
    grid-area: 1 / 3 / 5 / 6;
  }
  .headings {
    grid-area: 2 / 2 / 3 / 6;
  }
  .links {
    grid-area: 5 / 1 / 6 / 5;
    padding: 30px;
  }
  .nextpage {
    background: #eee;
    color: black;
    padding: 20px;
    grid-area: 4 / 5 / 6 / 6;
  }
}
</style>