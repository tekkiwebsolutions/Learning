/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `http://localhost:8000/`,
   },
  plugins: [
     `gatsby-plugin-smoothscroll`,
     `gatsby-plugin-advanced-sitemap`,
     `gatsby-plugin-react-helmet`,
     {
	 resolve: `gatsby-plugin-react-helmet-canonical-urls`,
	    options: {
	      siteUrl: `http://localhost:8000/`,
	    },
	  },
     {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://localhost:8000/',
        policy: [{ userAgent: '*', allow: '/', disallow: '/contact' }]
      }
    },
    
  ],
}
