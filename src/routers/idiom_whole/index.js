export default {
    path: '/idiom_whole',
    component: () =>
        import ('@/views/Whole'),
    meta: {
        title: '成语大全',
    },
    children: [{
            path: 'idiomcontent',
            component: () =>
                import ('@/components/Whole/Idiomcontent')
        },
        {
            path: "wholeface",
            name: 'wholeface',
            component: () =>
                import ('@/components/Whole/Wholeface'),

        }, {
            path: 'word',
            component: () =>
                import ('@/components/Whole/Wholesingleword')
        },
        {
            path: 'wholetype',
            component: () =>
                import ("@/components/Whole/Wholetype"),
            children: [{
                path: 'list',
                component: () =>
                    import ('@/components/Whole/Wholetype/Wholetypelist')
            }, {
                path: '/idiom_whole/wholetype',
                redirect: '/idiom_whole/wholetype/list'
            }, {
                path: 'all',
                component: () =>
                    import ('@/components/Whole/Wholetype/Wholetypeall')
            }]
        },
        {
            path: 'all',
            component: () =>
                import ('@/components/Whole/Alldragon')
        },
        {
            path: 'wholezimu',
            name: 'idiom_whole/wholezimu',
            component: () =>
                import ('@/components/Whole/Wholezimu'),
            children: [{
                    path: 'all',
                    component: () =>
                        import ('@/components/Whole/Wholezimu/Wholezimuall')
                },
                {
                    path: 'single',
                    component: () =>
                        import ('@/components/Whole/Wholezimu/Wholezimusingle')
                },
                {
                    path: '/idiom_whole/wholezimu',
                    redirect: '/idiom_whole/wholezimu/all'
                }
            ]
        },
        {
            path: '/idiom_whole',
            redirect: '/idiom_whole/wholeface',
            meta: {
                keepAlive: true
            }
        }
    ]

}