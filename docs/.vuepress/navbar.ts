import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '博客',
    items: [{ text: '文章总览', link: '/blog/' },
    { text: '分类', link: '/blog/categories/' },
    { text: '标签', link: '/blog/tags/' },
    { text: '归档', link: '/blog/archives/' },]
  },
  // { text: '分类', link: '/blog/categories/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  {
    text: 'Blog', items: [{ text: 'Overall', link: '/blog/' },
    { text: 'Categories', link: '/blog/categories/' },
    { text: 'Tags', link: '/blog/tags/' },
    { text: 'Archives', link: '/blog/archives/' },]
  },
  // { text: 'Categories', link: '/en/blog/categories/' },
  // { text: 'Tags', link: '/en/blog/tags/' },
  // { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  },
])

