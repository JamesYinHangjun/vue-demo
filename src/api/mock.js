import Mock from 'mockjs'

Mock.mock('/list', {
    // code:200
    'yule':[
        {
            title:"娱乐标题1",
            content:"内容11"
        },
        {
            title:"娱乐标题2",
            content:"内容22"
        }
    ],
    "shehui":[
        {
            title:"社会标题1",
            content:"内容11"
        },
        {
            title:"社会标题2",
            content:"内容22"
        }
    ]
})
