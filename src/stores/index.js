import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        url: 'http://kpakn8889.com/index.php/api', //全局变量
        zimu: '', //成语大全当前字母
        zimubox: [],
        pinyinlist: [],
        cybox: [],
        typebox2: [], //存放所有的类型
        caodai: [],
        caodaistr: '',
        type: [],
        dragon: '',
        isdead: false,
    },
    getters: {
        geturl(state) {
            return state.url
        },
        getzimu(state) {
            return state.zimu
        },
        getzimubox(state) {
            return state.zimubox
        },
        getpinyinlist(state) {
            return state.pinyinlist
        },
        getcybox(state) {
            return state.cybox
        },
        gettypebox(state) {
            return state.typebox2
        },
        getcaodai(state) {
            return state.caodai
        },
        gettype(state) {
            return state.type
        },
        getdragon(state) {
            return state.dragon
        },
        get(state) {
            return state.isdead
        },
        getcaodaistr(state) {
            return state.caodaistr
        },
    },
    actions: {
        setzimu({ commit, state }, value) {
            commit("setZimu", value)
        },
        setzimubox({ commit, state }, value) {
            commit("setZimubox", value)
        },
        setpinyinlist({ commit, state }, value) {
            commit("setPinyinlist", value)
        },
        setcybox({ commit, state }, value) {
            commit("setCybox", value)
        },
        settypebox({ commit, state }, value) {
            commit("setTypebox", value)
        },
        setcaodai({ commit, state }, value) {
            commit("setCaodai", value)
        },
        settype({ commit, state }, value) {
            commit("setType", value)
        },
        setdragon({ commit, state }, value) {
            commit("setDragon", value)
        },
        set({ commit, state }, value) {
            commit("seT", value)
        },
        setcaodaistr({ commit, state }, value) {
            commit("seTcaodaistr", value)
        },
    },
    mutations: {
        setZimu(state, value) {
            state.zimu = value;
        },
        setZimubox(state, value) {
            state.zimubox = value;
        },
        setPinyinlist(state, value) {
            state.pinyinlist = value;
        },
        setCybox(state, value) {
            state.cybox = value;
        },
        setTypebox(state, value) {
            state.typebox2.length = 0
            state.typebox2 = value;
        },
        setCaodai(state, value) {
            state.caodai = value;
        },
        setType(state, value) {
            state.type = value;
        },
        setDragon(state, value) {
            state.dragon = value;
        },
        seT(state, value) {
            state.isdead = value;
        },
        seTcaodaistr(state, value) {
            state.caodaistr = value;
        },
    }
})