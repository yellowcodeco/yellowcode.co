module.exports = {
    pathPrefix: "/",
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            trackingId: "UA-133334387-1",
          },
        },
      ],
}