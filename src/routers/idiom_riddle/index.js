export default {
    path: '/riddle',
    component: () =>
        import ('@/views/Riddle'),
    children: [{
            path: 'content',
            component: () =>
                import ('@/components/Riddle/Riddlecontent')
        },
        {
            path: 'list',
            component: () =>
                import ('@/components/Riddle/Riddlelist')
        },
        {
            path: 'face',
            component: () =>
                import ('@/components/Riddle/Riddleface')
        },
        {
            path: '/riddle',
            redirect: '/riddle/face'
        }
    ]
}