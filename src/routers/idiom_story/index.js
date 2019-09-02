export default {
    path: '/story',
    component: () =>
        import ('@/views/Story'),
    children: [{
            path: 'face',
            component: () =>
                import ('@/components/Story/Storyface')
        }, {
            path: 'content',
            component: () =>
                import ('@/components/Story/StoryContent')
        },
        {
            path: 'list',
            component: () =>
                import ('@/components/Story/Storylist')
        },
        {
            path: '/story',
            redirect: '/story/face',
        },

    ]

}