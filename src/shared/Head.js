import React from "react"
import { Helmet } from "react-helmet";

export default () => 
    <React.Fragment>
        <Helmet>
            {/* <!-- Primary Meta Tags --> */}
            <title>yellowcode</title>
            <meta name="title" cont ent="yellowcode — Software + Digital Marketing" />
            <meta name="description" content="Work with us to build your next application, manage your social media marketing, and learn from our industry resources." />
            <link rel="icon" href="https://yellowcode.co/yellowcodefavicon.ico" /> 

            {/* <!-- Favicons --> */}
            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://yellowcode.co/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://yellowcode.co/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://yellowcode.co/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://yellowcode.co/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://yellowcode.co/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://yellowcode.co/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://yellowcode.co/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://yellowcode.co/apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="https://yellowcode.co/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="https://yellowcode.co/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="https://yellowcode.co/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="https://yellowcode.co/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="https://yellowcode.co/favicon-128.png" sizes="128x128" />
            <meta name="application-name" content="yellowcode"/>
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="/mstile-310x310.png" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://yellowcode.co/" />
            <meta property="og:title" content="yellowcode — Software + Digital Marketing" />
            <meta property="og:description" content="Work with us to build your next application, manage your social media marketing, and learn from our industry resources." />
            <meta property="og:image" content="https://yellowcode.co/img/yellowcode.co_facebook.png" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="Software + Digital Marketing" />
            <meta property="twitter:url" content="https://yellowcode.co/" />
            <meta property="twitter:title" content="yellowcode — Software + Digital Marketing" />
            <meta property="twitter:description" content="Work with us to build your next application, manage your social media marketing, and learn from our industry resources." />
            <meta property="twitter:image" content="https://yellowcode.co/img/yellowcode.co_twitter.png" />
        </Helmet>
    </React.Fragment>