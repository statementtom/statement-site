const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Shopify Plus eCommerce Agency in Leeds & London | Statement`,
    siteUrl: `https://www.statementagency.com`,
    httpSiteUrl: `http://www.statementagency.com`,
    description: `Statement is a specialist Shopify Plus eCommerce agency, with offices in Leeds and London. We work with leading brands & creative agencies and are dedicated to creating online stores that not only look good but also sell more.`,
    author: `Statement Agency`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`, `blog`),
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`, `assets`),
        name: `assets`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: `gatsby-remark-copy-linked-files`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 100,
              withWebp: true
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank"
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Statement Agency`,
        short_name: `Statement Agency`,
        start_url: `/`,
        background_color: `#CE0527`,
        theme_color: `#CE0527`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "ttv3oam"
        }
      }
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: "statement-site", // (REQUIRED, replace with your own)
        accessToken:
          "MC5YVXJGM2hFQUFDQUExQ2Yt.VO-_vTXvv73vv73vv70BZzwn77-9Be-_ve-_vW4k77-977-977-9En3vv73vv70A77-9IWku77-9bO-_vR4", // (optional API access token)
        linkResolver: () => doc => {
          if (doc.type === "page") {
            return `/${doc.uid}/`;
          }
          if (doc.type === "case") {
            return `/results/${doc.uid}/`;
          }
          if (doc.type === "event") {
            return `/events/${doc.uid}/`;
          }
          if (doc.type === "career") {
            return `/careers/${doc.uid}/`;
          }
          if (doc.type === "resource") {
            return `/resource/${doc.uid}/`;
          }
          // Backup for all other types
          return "/";
        },
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          const customResolver = (type, uid, date = null) => {
            if (uid === "home") {
              return `/`;
            }
            if (uid === "contact-us") {
              return "/contact-us/";
            }
            if (type === "contact") {
              return "/contact-us/";
            }
            if (type === "page") {
              return `/${uid}/`;
            }
            if (type === "case") {
              return `/results/${uid}/`;
            }
            if (type === "event") {
              return `/events/${uid}/`;
            }
            if (type === "career") {
              return `/careers/${uid}/`;
            }
            if (type === "article") {
              return `/blog/${date}/${uid}/`;
            }
            if (type === "resource") {
              return `/resource/${uid}/`;
            }
            return "/";
          };
          if (type === "hyperlink") {
            return `<a href=${
              element.data.link_type === "Web"
                ? element.data.url
                : customResolver(element.data.type, element.data.uid)
            }>${children}</a>`;
          }
          return null;
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-MZ4C36R",
        includeInDevelopment: true
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "463198437390176"
      }
    },
    {
      resolve: `gatsby-plugin-linkedin-insight`,
      options: {
        partnerId: `56747`,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: "141288",
        sv: "5"
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-netlify-cache`,
      options: {
        extraDirsToCache: ["content"],
        cachePublic: true
      }
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["SITE_RECAPTCHA_KEY"]
      }
    },
    `gatsby-plugin-anchor-links`
  ]
};
