/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mata Rocks Resort`,
    description: `Mata Rocks is a boutique beachfront resort located on Ambergris Caye in San Pedro, Belize. The resort is situated south of the main town, approximately a 15 minute golf cart ride from the airport.`,
    author: `Jose Urbina`,
    siteUrl: `https://matarock.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {                             
      resolve: `gatsby-plugin-google-gtag`,
      options: {
          trackingIds: ['G-ED7SSS28RC'],
          pluginConfig: {
            head: true
          },
        },
      },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        downloadLocalImages: true,
        buildMarkdownNodes: true,
        endpoint: "https://api-us-west-2.hygraph.com/v2/cm5hspaao014807ulpx5hu5pr/master",
        token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3Mzg1MjcwMzMsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY201aHNwYWFvMDE0ODA3dWxweDVodTVwci9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC11cy13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiMzE0ODYzNTgtODQzYy00OTg4LThmNzItYWRiM2Y5ZGIxNWVjIiwianRpIjoiY202bzIzd2F4MWRnMzA3bXk5NmFwYXhvZyJ9.IYZNw6_A77_9BIsMzHbcR7xrdk1cZFMnxbYF09BKWEhbfizoNYiRvBwvB2UPafM2bJ174qreT97mgrQDBHYAqyr5f6lSH9DTyWNWsQof9leMzDVXIhQXOZ4jr-n8VnuQaeHsWypvfmKcMqnh1WnWVRBEuqPL7GmWQIpoyAG5-jh46gJO7vjuheETyUn2TnFu46fdU8UV02Q2-LTwTQX_f64_39ygbWViRDGJmV56JNk9fiZ54gLNcbntDJsinRF3RJGgS608u3NPPoKejJFX7l20GBTjcfB_yjfRDoT1cXzDnZxLONvkiPlwFV6w5wou8CSapgVLaf-bh4tbIyQ36KvHpAj1Zq47YedaC8vBxwiW8HOjPERDY_Xv3fSEqt_ckIPznPzi4_QckXE8uzT2YCDviD6VemBKt8VTPDYaPGGmoc3g00nMv-FmCY0wXz2EYNO0mxRwr0hsjjZJmUub-3B4srN1iPtBgXKosVTiLHQQYQlHiwLed5qFJhlx9zEkhsQGHHALIbXMtq5O7dIkTQ69cAn9MgDy1NoP8rC-WH3Dn90ysXTKgIy-GfPjrbeXAhYVwqBzLDVFKJifPd007D7QHF33POJw4s7bWVzJ0YPrOc7fHk9KZIui6TZw1X3o1Mcr7wtGXob6KtpwU8djyXj5TN4593ANbgLFVjVLvI8",
        queryConcurrency: 1,
        apiCacheTTL: 60 * 1000, // 1 minute cache

      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
