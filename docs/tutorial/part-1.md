---
path: /tutorial/part-one
title: Configure your theme
---

You need to configure your themes in `gatsby-themes.yaml` (create this file if not present).
  >  
    themesDirectory: themes
    themes:
      gatsby-theme-identity:
        cms: contentful
        develop: true
        build: true
        query:
        mappings:
          displayName:
            querySource:
            field:
          copyright:
            querySource:
            field:
          headline:
            querySource:
            field:
          displayPhoto:
            querySource:
            field:
          socialIcons:
            querySource:
            field:
          backgroundImage:
            querySource:
            field:
        styles:


Here is the purpose of the top level properties.</p>
  * `themesDirectory` - tells gatsby where all the themes are stored.
  * `themes` - takes a list of theme configurations

Here is the purpose of each theme configuration</p>
  * `cms` - tells gatsby what source plugin to use for our cms. Currently only supports [Contentful](https://www.contentful.com)
  * `develop` - tells gatsby to develop this theme in a new port during `$ gatsby develop --enabled-themes`. We can support parallel theme development if this property is true for each theme.
  * `build` - tells gatsby to build this theme during `$ gatsby build --enabled-themes`
  * `query` - tells gatsby what graphql query to use on our data source. The same query you use in your components can be used here.
  * `mappings` - tells gatsby how to map data sources from a query to template fields. This is our we overwrite a themes default values with our cms data. The keys denote the content fields you can modify on the theme. These keys will differ between themes.
  * `styles` - tells gatsby how to customize the styles of your theme. Takes regular css and applies it to the theme. Supports live-reload on save.

### Next steps
* [Add your content to a template](/tutorial/part-two)

Send your feedback using Twitter [@TheGatsbyManor](https://twitter.com/thegatsbymanor)
