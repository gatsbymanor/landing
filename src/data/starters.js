import gatsby_starter_default from '../images/gatsby_starter_default.png'
import gatsby_starter_blog from '../images/gatsby_starter_blog.png'
import gatsby_starter_hello_world from '../images/gatsby_starter_hello_world.png'
import gatsby_material_starter from '../images/gatsby_material_starter.png'
import gatsby_typescript_starter from '../images/gatsby_typescript_starter.png'
import gatsby_bootstrap_starter from '../images/gatsby_bootstrap_starter.png'

export const starters = [
  {
    name: 'gatsby-starter-default',
    source: 'https://github.com/gatsbyjs/gatsby-starter-default',
    perks: '',
    image: gatsby_starter_default,
    demo: 'http://gatsbyjs.github.io/gatsby-starter-default/',
  },
  {
    name: 'gatsby-starter-blog',
    source: 'https://github.com/gatsbyjs/gatsby-starter-blog',
    perks: '',
    image: gatsby_starter_blog,
    demo: 'http://gatsbyjs.github.io/gatsby-starter-blog/',
  },
  {
    name: 'gatsby-starter-hello-world',
    source: 'https://github.com/noahg/gatsby-starter-blog-no-styles',
    perks: 'Same as official gatsby-starter-blog but with all styling removed',
    image: gatsby_starter_hello_world,
    demo: 'http://capricious-spring.surge.sh/',
  },
  {
    name: 'gatsby-material-starter',
    source: 'https://github.com/Vagr9K/gatsby-material-starter',
    perks: 'React-MD for Material design, Sass/SCSS, Categories, Google Analytics, Disqus, SEO, and more',
    image: gatsby_material_starter,
    demo: 'https://vagr9k.github.io/gatsby-material-starter/',
  },
  {
    name: 'gatsby-typescript-starter',
    source: 'https://github.com/fabien0102/gatsby-starter',
    perks: 'Semantic-ui for styling, TypeScript, Offline support,, Web App Manifest, Jest/Enzyme testing, Storybook, Markdown linting and more',
    image: gatsby_typescript_starter,
    demo: 'https://fabien0102-gatsby-starter.netlify.com/',
  },
  {
    name: 'gatsby-starter-bootstrap',
    source: 'https://github.com/jaxx2104/gatsby-starter-bootstrap',
    perks: 'Bootstrap CSS framework, Single column layout, Basic components: SiteNavi, SitePost, SitePage and more',
    image: gatsby_bootstrap_starter,
    demo: 'https://jaxx2104.github.io/gatsby-starter-bootstrap/',
  },
]
