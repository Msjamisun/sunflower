export const state = () => ({
  githubProjects: []
})

export const mutations = {
  updateGithubProjects: (state, payload) => {
    state.githubProjects = payload
  }
}

export const actions = {
  async getGithubProjects({
    state,
    commit
  }) {

    if (state.githubProjects.length) return

    try {
      let githubProjects = await fetch(
        'http://api.gitHub.com/users/msjamisun/repos?page=1'
      ).then(res => res.json())

      githubProjects = githubProjects.filter(el => el.fork === false)
        .map(
          ({
            id,
            name,
            description,
            stargazers_count,
            homepage,
            html_url
          }) => ({
            id,
            name,
            description,
            stargazers_count,
            homepage,
            html_url
          })
        )

      commit('updateGithubProjects', githubProjects)
    } catch (err) {
      console.log(err);
    }
  }
}
