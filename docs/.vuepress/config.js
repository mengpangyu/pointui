module.exports = {
  title: 'Point UI',
  description: '一个基于Vue的UI库',
  themeConfig: {
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['install.md', '安装'],
            ['get-start.md', '开始使用']
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            ['button.md', 'Button'],
              ['input.md', 'Input'],
              ['layout.md', 'Layout'],
              ['popover.md', 'Popover'],
              ['tab.md', 'Tab'],
            ['toast.md', 'Toast'],
            ['responsive.md', 'Grid'],
            ['collapse.md', 'Collapse'],
          ]
        }
      ],
    },
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      {text: '首页', link: '/'},
      {text: 'github', link: 'https://github.com/mxylovezh/pointui', target: '_blank'}
    ]
  }
}