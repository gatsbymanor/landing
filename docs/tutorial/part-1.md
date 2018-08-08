---
path: /tutorial/part-one
title: Add data from Contentful
---

**NOTE**: This query will NOT work as its an example. Please supply a valid query from your contentful data.
Themes only supports [Contentful](https://contentful.com). Please create an account before you proceed.

The query section takes a multi-line string for your graphql query.
The mappings section is where you specify what default fields your data will overwrite on the template.

Add your graphql query with the proper data mappings.
Develop your theme with CMS data using the proper Contenful credentials.
  > `CONTENTFUL_SPACE_ID=YOUR_SPACE_ID CONTENTFUL_DELIVERY_TOKEN=YOUR_TOKEN gatsby develop --enabled-themes`

>  
    themesDirectory: themes
    themes:
      gatsby-theme-identity:
        cms: contentful
        develop: true
        build: true
        query: |
          {
            contentfulBio (
              name: {
                regex: "/identity/i"
              }
            )
            {
              name
              displayName
              headline
              photo {
                sizes {
                  src
                }
              }
            }

            allContentfulSocialProfiles (
              filter: {
                name: {
                  regex: "/(github|medium|twitter)/i"
                }
              }
            )
            {
              edges {
                node {
                  name
                  url
                  className
                }
              }
            }


            bgPhoto: contentfulAsset (
              title: {
                regex: "/(nyc)/i"
              }
            )
            {
              title
              sizes(maxWidth: 1200, quality: 95) {
                src
              }
            }

            avatarPhoto: contentfulAsset (
              title: {
                regex: "/(me)/i"
              }
            )
            {
              title
              sizes(maxWidth: 120, quality: 95) {
                src
              }
            }

          }
        mappings:
          displayName:
            querySource: contentfulBio
            field: displayName
          copyright:
            querySource: contentfulBio
            field: displayName
          headline:
            querySource: contentfulBio
            field: headline
          displayPhoto:
            querySource: avatarPhoto
            field: sizes
          socialIcons:
            querySource: allContentfulSocialProfiles
            field: edges
          backgroundImage:
            querySource: bgPhoto
            field: sizes
        styles:


### Next steps
* [Part 2: Customize styles on a theme](/tutorial/part-two).

Send your feedback using Twitter [@TheGatsbyManor](https://twitter.com/thegatsbymanor)
