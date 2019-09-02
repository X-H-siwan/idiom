export default {
    path: '/parallel',
    component: () =>
        import ('@/views/Parallel'),
    children: [{
        path: 'face',
        component: () =>
            import ('@/components/Parallel/Parallelface')
    }, {
        path: 'list',
        component: () =>
            import ('@/components/Parallel/Parallellist')
    }, {
        path: 'content',
        component: () =>
            import ('@/components/Parallel/Parallelcontent')
    }, {
        path: '/parallel',
        redirect: '/parallel/face',
    }]

}