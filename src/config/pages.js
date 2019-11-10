const pages = [
    {
        segment: undefined,
        href: '.',
        label: 'home'
    },
    {
        segment: 'about',
        href: 'about',
        label: 'about'
    },
    
    // for the blog link, we're using rel=prefetch so that Sapper prefetches
    // the blog data when we hover over the link or tap it on a touchscreen
    {
        rel: 'prefetch',
        segment: 'blog',
        href: 'blog',
        label: 'blog'
    }
]

export default pages;