import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _72d8bbce = () => interopDefault(import('..\\pages\\a_gangue.vue' /* webpackChunkName: "pages/a_gangue" */))
const _961dc1b6 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _650b79ba = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _2dc5b468 = () => interopDefault(import('..\\pages\\escolhida.vue' /* webpackChunkName: "pages/escolhida" */))
const _213e511f = () => interopDefault(import('..\\pages\\morte_subita_2.vue' /* webpackChunkName: "pages/morte_subita_2" */))
const _36819be2 = () => interopDefault(import('..\\pages\\noticia-netflix.vue' /* webpackChunkName: "pages/noticia-netflix" */))
const _159d59e5 = () => interopDefault(import('..\\pages\\poster.vue' /* webpackChunkName: "pages/poster" */))
const _9d837302 = () => interopDefault(import('..\\pages\\sangue_de_pelicano.vue' /* webpackChunkName: "pages/sangue_de_pelicano" */))
const _53cbd57f = () => interopDefault(import('..\\pages\\tickets.vue' /* webpackChunkName: "pages/tickets" */))
const _56ae0c2c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/a_gangue",
    component: _72d8bbce,
    name: "a_gangue"
  }, {
    path: "/about",
    component: _961dc1b6,
    name: "about"
  }, {
    path: "/blog",
    component: _650b79ba,
    name: "blog"
  }, {
    path: "/escolhida",
    component: _2dc5b468,
    name: "escolhida"
  }, {
    path: "/morte_subita_2",
    component: _213e511f,
    name: "morte_subita_2"
  }, {
    path: "/noticia-netflix",
    component: _36819be2,
    name: "noticia-netflix"
  }, {
    path: "/poster",
    component: _159d59e5,
    name: "poster"
  }, {
    path: "/sangue_de_pelicano",
    component: _9d837302,
    name: "sangue_de_pelicano"
  }, {
    path: "/tickets",
    component: _53cbd57f,
    name: "tickets"
  }, {
    path: "/",
    component: _56ae0c2c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
