module.exports = {
    pathPrefix: "/",
    plugins: [
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            trackingId: "UA-133334387-1",
          },
        },
      ],
}