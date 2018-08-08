import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import styled from "styled-components";
import {
  Grid,
  Icon,
  Card,
  Container,
  Header,
  Button,
  Modal,
  Menu,
} from 'semantic-ui-react'

import { SubscribeForm } from "../components/SubscribeForm"
import { JumprockForm } from "../components/JumprockForm"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout.js"


class DocsPage extends React.Component {

  state = {
    open: false,
  }

  trackClick = (gaEvent) => {
    // need this because of gatsby rendering
    if (window.ga) {
      window.ga('send', gaEvent);
    }
  }

  render() {

    return (
      <Layout>
        <Container>

          <Grid stackable>
            <Grid.Row>
              <Grid.Column>

                <Tutorial />

                <Container style={{
                  padding: '4rem'
                }}>
                  <SubscribeForm
                    mailchimp_url={`https://gatsbymanor.us17.list-manage.com/subscribe/post-json?u=6d5879814f1b3ecd3667f0c47&amp;id=a66cece897`}
                    success_msg="Thanks for signing up! You will get a message when we have a new update!">
                    {(submitHandler, emailHandler) =>
                      <React.Fragment>
                        <h2 style={{
                          fontSize: `2rem`
                        }}>
                          Subscribe to the latest news on Gatsby themes.
                        </h2>
                        <p style={{
                          fontSize: `1.2rem`
                        }}>
                          Get updates on themes announcements, and new features in your inbox!
                        </p>
                        <input
                          style={{
                            borderWidth: `1px`,
                            borderStyle: `solid`,
                            borderRadius: `1px`,
                            width: `250px`,
                            padding: `0.7rem`,
                            margin: `0 0.5rem 0.5rem 0`
                          }}
                          type="email"
                          name="email"
                          placeholder="my@email.com"
                          onChange={emailHandler}
                        />
                        <Button
                          type="submit"
                          color='blue'
                          onClick={(e) => submitHandler(e)}>
                          Click to subscribe
                        </Button>
                      </React.Fragment>
                    }
                  </SubscribeForm>


                </Container>

              </Grid.Column>
            </Grid.Row>
          </Grid>


        </Container>
      </Layout>
    )
  }

}


const Tutorial =  () => (
  <div>
    <h1>Getting started (alpha)</h1>
    <p>Lets get you setup with a Gatsby theme.</p>
    <p>First you need to make sure you are running our forked version of gatsby. You might need to uninstall the offical version of gatsby first.

      <pre><code>
        $ npm i -g @nodox/gatsby-cli
      </code></pre>
    </p>
    <p>(Currently for v1 only.)</p>

    <h1>Install your first theme</h1>
    <p>Here you add a theme in your themes folder</p>
    <p><code>$ gatsby new themes/gatsby-theme-identity gatsbymanor/gatsby-theme-identity</code></p>

    <h1>Configure <code>gatsby-themes.yaml</code></h1>
    <p>You need to configure your themes in <code>gatsby-themes.yaml</code> (create this file if not present).</p>
    <pre><code>
      {`
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
      `}
    </code></pre>

    <p>Here is the purpose of the top level properties.</p>
    <ul>
      <li><code>themesDirectory</code> - tells gatsby where all the themes are stored.</li>
      <li><code>themes</code> - takes a list of theme configurations</li>
    </ul>

    <p>Here is the purpose of each theme configuration</p>
    <ul>
      <li><code>cms</code> - tells gatsby what source plugin to use for our cms. Currently only supports <a href="https://www.contentful.com">Contentful</a></li>
      <li><code>develop</code> - tells gatsby to develop this theme in a new port during <code>$ gatsby develop --enabled-themes</code>. We can support parallel theme development if this property is true for each theme.</li>
      <li><code>build</code> - tells gatsby to build this theme during <code>$ gatsby build --enabled-themes</code></li>
      <li><code>query</code> - tells gatsby what graphql query to use on our data source. The same query you use in your components can be used here.</li>
      <li><code>mappings</code> - tells gatsby how to map data sources from a query to template fields. This is our we overwrite a themes default values with our cms data. The keys denote the content fields you can modify on the theme. These keys will differ between themes.</li>
      <li><code>styles</code> - tells gatsby how to customize the styles of your theme. Takes regular css and applies it to the theme. Supports livereload on save.</li>
    </ul>

    <h1>Develop your theme</h1>
    <p>With the initial configuration, you can run the theme in development mode.</p>
    <p><code>$ gatsby develop --enabled-themes</code></p>
    <p>Your theme should be running on <a href="http://localhost:9000">http://localhost:9000</a>.</p>
    <p>Kill the process using CTRL-C when finished. You might need to hit this a few times to close the current process.</p>


    <h1>Add CMS data using GraphQL</h1>
    <p>In the config, update the query and mappings section with your cms data.</p>
    <p>NOTE: This query will NOT work as its an example. Please supply a valid query for your contetnful data.</p>
    <p>NOTE: Themes only supports <a href="https://www.contentful.com">Contentful</a>. Please create an account before you proceed.</p>

    <pre><code>
      {`
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
      `}

    </code></pre>
    <p>The query section takes a multi-line string for your graphql query.</p>
    <p>The mappings section is where we specify what fields from our data will overwrite the theme default values.</p>
    <p>Use CTRL-C to quit the current process.</p>
    <p>Now develop your theme with CMS data.
      <pre><code>$ CONTENTFUL_SPACE_ID=YOUR_SPACE_ID CONTENTFUL_DELIVERY_TOKEN=YOUR_TOKEN gatsby develop --enabled-themes</code></pre>
    </p>


    <h1>Build your theme</h1>
    <p>You can build you theme for distribution as follow.</p>
    <p>
      <pre><code>
        $ CONTENTFUL_SPACE_ID=YOUR_SPACE_ID CONTENTFUL_DELIVERY_TOKEN=YOUR_TOKEN gatsby build --enabled-themes
      </code></pre>
    </p>

    <h1>Copy your theme to the Gatsby project</h1>
    <p>You can build you theme for distribution as follow.</p>
    <p>
      <pre><code>
        $ CONTENTFUL_SPACE_ID=YOUR_SPACE_ID CONTENTFUL_DELIVERY_TOKEN=YOUR_TOKEN gatsby build --copy-theme gatsby-theme-identity
      </code></pre>
    </p>

    <h1>Preview your theme production ready theme</h1>
    <p>You can preview the current default theme for you project as follows</p>
    <p>
      <pre><code>
        $ gatsby serve
      </code></pre>
    </p>

    <h1>Publish your theme</h1>
    <p>Use your favorite hosting solution to deploy the current project with you default theme. Tutorial completed.</p>

    <h1>Known issues</h1>
    <p>Under the hood
      <pre><code>
        $ gatsby develop --enabled-themes
      </code></pre>

      spins up a process per theme to support parallel theme development.</p>
    <p>To terminte the develop process you will need to CTRL-C multiple times, and press the up arrow key to interrupt any detached processes in the current terminal session.</p>

    <h1>Contribute with Feedback</h1>
    <p>The current product is in alpha stage. There are going to be issues and bugs while you work so please leave feedback. You can do so in a couple of ways.</p>
    <ul>
      <li>
        <div>
          <a href="https://github.com/gatsbymanor/gatsby-themes-starter">gatsby-themes-starter</a> - the core starter support gatsby themes
        </div>
      </li>
      <li>
        <div>
          <a href="https://github.com/gatsbymanor/gatsby-theme-identity">gatsby-theme-identity</a> - the only theme compatible with our gatsby themes cli
        </div>
      </li>
      <li>
        <div>
          <a href="https://github.com/gatsbymanor/gatsby-theme-kit">gatsby-theme-kit</a> - an internal SDK used by gatsby-themes.yaml
        </div>
      </li>
      <li>
        <div>
          <a href="https://github.com/gatsbymanor/www">www</a> - general problems with the site, docs, and everything else
        </div>
      </li>
    </ul>

  </div>


)




export default DocsPage
