---
path: /tutorial/part-zero
title: Getting started with Gatsby themes
---

### Install our forked gatsby-cli tool
`$ npm i -g @nodox/gatsby-cli`

Note: You might need to uninstall the official `gatsby-cli` tool.

### Using @nodox/gatsby-cli tool

1. Create a new themes project
  > `gatsby new gatsbymanor/gatsby-themes-starter`

2. Change directory to your project
  > `cd gatsby-themes-starter`

3. Install your theme
  > `gatsby new themes/gatsby-theme-identity gatsbymanor/gatsby-theme-identity`

4. Develop your theme
  > `gatsby develop --enabled-themes`

5. Build your theme
  > `gatsby build --enabled-themes`

6. Copy the target theme for production
  > `gatsby build --copy-theme gatsby-theme-identity`

7. Test your built theme project locally
  > `gatsby serve`

### Next Steps
* [Configure your theme](/tutorial/part-one)
