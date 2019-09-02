export default {
    path: '/type',
    component: () =>
        import ('@/views/Type'),
    //点击拼音展示所有包含这个拼音的成语
    children: [{
        path: 'pingyinidiom',
        component: () =>
            import ('@/components/Pingyinidiom')
    }]
}