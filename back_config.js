// dcos/.vuepress/config.js
module.exports = {
  title: '娃哈哈',  // 设置网站标题
  base: '/Essay/',  // 设置站点根路径
  repo: 'https://github.com/boyhaha/Essay', // 添加 github 链接
  // plugins: ['autobar'],
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: 'Guide', link: '/resource/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: '娃哈哈', link: 'https://github.com/boyhaha' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: [
      {
        title: '数据结构与算法',
        collapsable: true,
        sidebarDepth: 3,
        link: '/resource/algorithm',
        children: [
          {
            title: '数据结构与算法',
            collapsable: true,
            sidebarDepth: 3,
            link: '/resource/algorithm',
            children: [
              '/resource/algorithm/数据结构',
              '/resource/algorithm/树',
              '/resource/algorithm/排序',
            ]
          },
          {
            title: 'LeetCode',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              '/resource/algorithm/algorithm',
              '/resource/algorithm/LeetCode',
            ]
          },
        ]
      },
      {
        title: '课外延伸',
        collapsable: true,
        link: '/resource/blog',
        sidebarDepth: 0,
        children: [
          '/resource/blog/代码评审',
          '/resource/blog/高并发缓存',
          '/resource/blog/接口',
          '/resource/blog/社区',
        ]
      },
      {
        title: 'book',
        collapsable: true,
        sidebarDepth: 0,
        link: '/resource/book',
        children: [
          '/resource/book/csapp'
        ]
      },
      {
        title: '数据库',
        collapsable: true,
        sidebarDepth: 2,
        link: '/resource/database',
        children: [
          {
            title: '连接数据库',
            path: '/resource/database/connect'
          },
          {
            title: 'Redis',
            path: '/resource/database/Redis'
          },
          {
            title: 'SQL',
            link: '/resource/database/SQL',
            children: [
              '/resource/database/SQL/article',
              '/resource/database/SQL/MySQL',
              '/resource/database/SQL/PostgreSQL',
            ]
          },
          {
            title: 'MongoDB',
            link: '/resource/database',
            children: [
              '/resource/database/MongoDB',
              '/resource/database/MongoDB_H',
            ]
          },
          {
            title: 'elasticsearch',
            link: '/resource/database/elasticsearch',
            children: [
              '/resource/database/elasticsearch/基础知识',
              '/resource/database/elasticsearch/ElasticSearch',
              '/resource/database/elasticsearch/Lucene',
            ]
          },
        ]
      },
      {
        title: '面试必看',
        collapsable: true,
        sidebarDepth: 0,
        link: '/resource/interview',
        children: [
          {
            title: '进行时',
            path: '/resource/interview/进行时/',
          },
          // {
          //   title: '面试记录',
          //   path: '/resource/interview/company/'
          // }
        ]
      },
      {
        title: '编程语言',
        collapsable: true,
        sidebarDepth: 0,
        link: '/resource/language',
        path: '/resource/language/',
        children: [
        ]
      },
      {
        title: '网络',
        collapsable: true,
        sidebarDepth: 1,
        link: '/resource/network',
        children: [
          '/resource/network/HTTP',
          '/resource/network/oauth',
        ]
      },
      {
        title: '其他',
        collapsable: true,
        sidebarDepth: 1,
        link: '/resource/others',
        path: '/resource/others/',
        children: [
          '',
        ]
      },
      {
        title: '操作系统',
        collapsable: true,
        sidebarDepth: 1,
        link: '/resource/system',
        path: '/resource/system/',
        children: [
          '',
        ]
      },
      {
        title: '软件',
        collapsable: true,
        sidebarDepth: 1,
        link: '/resource/tools',
        path: '/resource/tools/',
        children: [
          '',
        ]
      },
      {
        title: '旅行规划',
        collapsable: true,
        sidebarDepth: 1,
        link: '/resource/travel',
        path: '/resource/travel/',
      },

    ],
    logo: '/1.gif',
    displayAllHeaders: true,
    lastUpdated: '更新时间',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: 'Refresh'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  },
}
