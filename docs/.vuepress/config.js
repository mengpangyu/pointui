module.exports = {
  title: 'Point UI',
  description: '一个基于Vue的UI库',
  themeConfig: {
    sidebar: [
      {
        title: '指南',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/guide/',
        ]
      },
      {
        title: '组件',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/components/button.md',
          '/components/input.md',
          '/components/layout.md',
          '/components/responsive.md',
          '/components/toast.md',
          '/components/tab.md',
          '/components/popover.md',
          '/components/collapse.md',
        ]
      },

    ],
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      {text: '指南', link: '/install/', target: '_self'},
      {text: '组件', link: '/components/', target: '_self'},
      {text: '关于我', link: '/about/', target: '_self'},
      {text: 'github', link: 'https://github.com/mxylovezh/pointui', target: '_blank'}
    ]
  }
}