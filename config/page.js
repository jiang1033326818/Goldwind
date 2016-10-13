module.exports = {
    header: {
        userinfo: {
            username: 'xinyao.wang',
            header: require('../app/routes/pages/mainPage/img/comp/pic.png')
        },
        method: [
            {
                icon:require('../app/routes/pages/mainPage/img/comp/sitting.png')
            },
            {
                icon:require('../app/routes/pages/mainPage/img/comp/todo.png')
            },
            {
                icon:require('../app/routes/pages/mainPage/img/comp/message.png')
            }
        ]
    },
    tree: [
        {
            title:'主页',
            page:'main',
            iconNormal: require('../app/routes/pages/mainPage/img/comp/main_normal.png'),
            iconActive: require('../app/routes/pages/mainPage/img/comp/main_active.png'),
        },
        {
            title:'图表',
            page:'chart',
            iconNormal: require('../app/routes/pages/mainPage/img/comp/chart_normal.png'),
            iconActive: require('../app/routes/pages/mainPage/img/comp/chart_active.png'),
        },
        {
            title:'表单',
            page:'from',
            iconNormal: require('../app/routes/pages/mainPage/img/comp/form_normal.png'),
            iconActive: require('../app/routes/pages/mainPage/img/comp/form_active.png'),
        },
        {
            title:'表格',
            page:'table',
            iconNormal: require('../app/routes/pages/mainPage/img/comp/table_normal.png'),
            iconActive: require('../app/routes/pages/mainPage/img/comp/table_active.png'),
        }
    ],
};
