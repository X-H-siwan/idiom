export default {
    path: '/dragon',
    component: () =>
        import ('@/views/Dragon'),

    children: [{
            path: 'after',
            component: () =>
                import ('@/components/Dragon/Havedragon'),
        }, {
            path: 'result',
            component: () =>
                import ('@/components/Dragon/Dragonresult')
        },
        {
            path: 'face',
            component: () =>
                import ('@/components/Dragon/Dragonface')
        },
        {
            path: '/dragon',
            redirect: '/dragon/face'
        }
    ]

}