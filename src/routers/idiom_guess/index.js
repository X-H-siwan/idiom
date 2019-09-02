export default {
    path: '/guess',
    component: () =>
        import ('@/views/Guess'),
    children: [{
        path: 'face',
        component: () =>
            import ('@/components/Guess/Guessface'),

    }, {
        path: '/guess',
        redirect: '/guess/face'
    }, {
        path: 'content',
        component: () =>
            import ('@/components/Guess/Guesscontent')
    }, ]

}