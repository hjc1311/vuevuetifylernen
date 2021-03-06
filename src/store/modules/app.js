const state = {
  drawer: false,
  gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
  items: [
    { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
    { title: 'Pages', icon: 'mdi-menu', items: [
      { title: 'Authentication', icon: 'mdi-login', items: [
        { title: 'SignIn', to: '/authentication/sign-in' },
        { title: 'SignUp', to: '/authentication/sign-up' },
      ]},
      { title: 'ProductList', to: '/page/product-list' },
    ]},
    { title: 'Grid System', icon: 'mdi-cellphone-arrow-down', to: '/grid-system' },
    { title: 'GridListPage', icon: 'mdi-clipboard-list-outline', to: '/grid-list-page' },
    { title: 'Breakpoints', icon: 'mdi-laser-pointer', to: '/breakpoints' },
    { title: 'Typography', icon: 'mdi-text-account', to: '/typography' },
    { title: 'Tables', icon: 'mdi-file-table-box-multiple-outline', items: [
      { title: 'Basic Table', to: '/tables/basic-table' },
      { title: 'App Table', to: '/tables/app-table' },
    ]},
    { title: 'Forms', icon: 'mdi-format-float-none', items: [
      { title: 'Validation Form', to: '/forms/validation-form' },
      { title: 'App Form', to: '/forms/app-form' },
    ]},
    { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons' },
    { title: 'Icons', icon: 'mdi-sheep', to: '/icons' },

  ],
}

const getters = {
  getDrawer: state => state.drawer
}

const mutations = {
  setDrawer (state, data) {
    state.drawer = data
  }
}

const actions = {
  toggleDrawer ({ commit }, value) {
    commit('setDrawer', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
