const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicCase {
        edges {
          node {
            id
            uid
            type
          }
        }
      }
      allPrismicPage {
        edges {
          node {
            id
            uid
            type
          }
        }
      }
      allPrismicEvent {
        edges {
          node {
            id
            uid
            type
          }
        }
      }
      allPrismicCareer {
        edges {
          node {
            id
            uid
            type
          }
        }
      }
      allPrismicArticle(limit: 1000, sort: { fields: first_publication_date }) {
        edges {
          node {
            id
            uid
            type
            data {
              date(formatString: "YYYY/MM")
              categories {
                label
                tag
              }
              body {
                ... on PrismicArticleBodyRelatedArticles {
                  slice_type
                  items {
                    legacy_article {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
      allPrismicResource {
        edges {
          node {
            uid
            type
            id
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              title
              date(formatString: "YYYY/MM")
            }
          }
        }
      }
    }
  `);

  const pageTemplates = {
    page: path.resolve('./src/templates/page.js'),
    case: path.resolve('./src/templates/case.js'),
    event: path.resolve('./src/templates/event.js'),
    career: path.resolve('./src/templates/career.js'),
    article: path.resolve('./src/templates/article.js'),
    categories: path.resolve('./src/templates/categories.js'),
    resource: path.resolve('./src/templates/resource.js'),
  };

  pages.data.allPrismicResource.edges.forEach(edge => {
    createPage({
      path: `/resource/${edge.node.uid}/`,
      component: pageTemplates[edge.node.type],
      context: {
        id: edge.node.id,
        uid: edge.node.uid,
      },
    });
  });

  pages.data.allPrismicPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}/`,
      component: pageTemplates[edge.node.type],
      context: {
        id: edge.node.id,
        uid: edge.node.uid,
      },
    });
  });

  pages.data.allPrismicCase.edges.forEach(edge => {
    createPage({
      path: `/results/${edge.node.uid}/`,
      component: pageTemplates[edge.node.type],
      context: {
        id: edge.node.id,
        uid: edge.node.uid,
      },
    });
  });

  pages.data.allPrismicCareer.edges.forEach(edge => {
    createPage({
      path: `/careers/${edge.node.uid}/`,
      component: pageTemplates[edge.node.type],
      context: {
        id: edge.node.id,
        uid: edge.node.uid,
      },
    });
  });

  pages.data.allPrismicEvent.edges.forEach(edge => {
    createPage({
      path: `/events/${edge.node.uid}/`,
      component: pageTemplates[edge.node.type],
      context: {
        id: edge.node.id,
        uid: edge.node.uid,
      },
    });
  });

  pages.data.allPrismicArticle.edges.forEach(article => {
    const titleSet = new Set();
    if (
      article.node.data.body.items &&
      article.node.data.body.items.length > 0
    ) {
      const [{ items: legacyPosts }] = article.node.data.body.filter(
        item => item.slice_type && item.slice_type === 'related_articles'
      );

      legacyPosts.forEach(post => {
        if (post.legacy_article.text) {
          titleSet.add(post.legacy_article.text);
        }
      });
    }
    const { date } = article.node.data;

    const titleList = Array.from(titleSet);

    createPage({
      path: `/blog/${date}/${article.node.uid}/`,
      component: pageTemplates[article.node.type],
      context: {
        id: article.node.id,
        uid: article.node.uid,
        title: titleList,
      },
    });
  });

  pages.data.allMarkdownRemark.edges.forEach(article => {
    const { date } = article.node.frontmatter;
    const { fileAbsolutePath } = article.node;
    const handle = fileAbsolutePath
      .split('/')
      [fileAbsolutePath.split('/').length - 1].replace('.md', '');

    createPage({
      path: `/blog/${date}/${handle}/`,
      component: path.resolve('./src/templates/alt-article.js'),
      context: {
        id: article.node.id,
        uid: _.kebabCase(article.node.frontmatter.title),
        title: article.node.frontmatter.title,
      },
    });
  });

  const coreFilters = [
    {
      label: 'Replatforming',
      tag: 'replatforming',
      description:
        'We’re experts in replatforming - take a look at our eCommerce platform migration blogs, packed with actionable tips and advice.',
    },
    {
      label: 'Design & UX',
      tag: 'ux-design',
      description:
        'Design inspiration and advice, UX best practice and actionable tips to help you stand out from the crowd.',
    },
    {
      label: 'Optimisation',
      tag: 'optimisation',
      description:
        'Our expert advice on how to optimise your eCommerce store to help boost conversions, maximise sales and more. ',
    },
    {
      label: 'Seasonal',
      tag: 'seasonal',
      description:
        'Actionable tips and advice to help you make the busy holiday retail season a highly successful period for your store.',
    },
    {
      label: 'Growth',
      tag: 'growth',
      description:
        'Uncovering the secrets to growth - and how you can scale and sell more on Shopify and Shopify Plus. ',
    },
    {
      label: 'Events',
      tag: 'events',
      description:
        'We’re a social bunch - take a look at the many Shopify Meetups and other eCommerce events we’ve hosted and attended.',
    },
  ];

  coreFilters.forEach(filter => {
    createPage({
      path: `/blog/tag/${filter.tag}/`,
      component: pageTemplates.categories,
      context: {
        category: filter.tag,
        categoryImage: `${filter.tag}-tag.jpg`,
      },
    });
  });
};
