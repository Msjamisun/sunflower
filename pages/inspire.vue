<template>
  <main>
    <section>
      <h1>Projects</h1>
      <div v-for="project in githubProjects" :key="project.id" class="project">
        <h3>
          <a :href="project.html_url">💮 {{ project.name }}</a>
        </h3>
        <v-spacer></v-spacer>
        <p>{{ project.description }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["githubProjects"])
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 80vw;
  margin: 2% 8%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  section {
    grid-area: 1 / 1 / 2 / 2;
    background: white;
    color: black;
    padding: 30px;
    h1 {
      margin-bottom: 2px;
    }
    a {
      color: black;
    }
    aside {
      grid-area: 1 / 2 / 2 / 3;
    }
  }
}

.stars {
  color: orangered;
}

.project {
  margin-bottom: 30px;
}
</style>