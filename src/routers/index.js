import Vue from 'vue'
import Router from 'vue-router'
import idiom_story from './idiom_story'
import idiom_whole from './idiom_whole'
import idiom_dragon from './idiom_dragon'
import idiom_parallel from './idiom_parallel'
import idiom_riddle from './idiom_riddle'
import idiom_most from './idiom_most'
import idiom_carton from './idiom_carton'
import idiom_guess from './idiom_guess'
import idiom_search from './idiom_search'






Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        idiom_story,
        idiom_whole,
        idiom_dragon,
        idiom_parallel,
        idiom_riddle,
        idiom_most,
        idiom_carton,
        idiom_guess,
        idiom_search,
        {
            path: '/*',
            redirect: '/idiom_whole'
        },

    ]
})