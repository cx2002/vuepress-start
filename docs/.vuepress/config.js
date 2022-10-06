
module.exports = {
    // theme: 'vdoing', // 使用主题插件 vuepress-theme-vdoing
    title: 'Chen xin Blog', // 网站的标题，它将显示在导航栏（navbar）上
    description: '随往的博客', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // <link> 标签，插入到 <head></head>之间
    ],
    themeConfig: {
        sidebarDepth: 2,
        rightMenuBar: true,
        pageButton: true,
        sidebar: {
            mode: 'structuring',
            collapsable: true,
        },
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'Java 面试',
                link: '/web/',
                items: [
                    {
                        text: 'JavaScript',
                        items: [
                            { text: '构造函数和原型', link: '/pages/39a948/' }, // 哈希链接是在你运行项目状态下，新增 markdown 文件自动生成的
                            { text: 'Cookie和Session', link: '/pages/255011/' },
                        ],
                    },
                    { text: 'TypeScript配置', link: '/pages/0bea56/' },
                ],
            },
        ],
    },
}