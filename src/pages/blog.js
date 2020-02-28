// Modules
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

// Image Processing
import Img from 'gatsby-image';

// Styles
import styled from '@emotion/styled';

// Animations
import posed, { PoseGroup } from 'react-pose';

// Framework
import { Section, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';

// Containers
import Layout from '../containers/Layout';

// UI Components
import Banner from '../components/ui/Banner';
import { linkResolver } from '../util/links';
import { Plus } from '../components/ui/Icons';

// Site Level GraphQL Fragments
import { SiteFragment } from '../fragments/global/site';

// Page Level GraphQL Fragments
import {
  PrismicBlogFragment,
  BlogImageEdgeFragment,
  ModernBlogEdgeFragment,
} from '../fragments/pages/blog';

export const pageQuery = graphql`
  query Blog {
    site {
      ...SiteFragment
    }
    fallBackImages: allFile(
      filter: { relativePath: { regex: "/BlogFallback/" } }
    ) {
      edges {
        ...BlogImageEdgeFragment
      }
    }
    legacyBlogs: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        ...LegacyBlogEdgeFragment
      }
    }
    modernBlogs: allPrismicArticle(
      sort: { fields: first_publication_date, order: DESC }
    ) {
      edges {
        ...ModernBlogEdgeFragment
      }
    }
    prismicBlog {
      ...PrismicBlogFragment
    }
  }
`;

const CustomContent = styled(Content)`
  text-align: center;
  padding: 20px 35px;
  background: #fafafa;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    font-size: 21px;
    margin-bottom: 20px;
    font-weight: 500;
    text-align: center;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
    &:first-of-type {
      margin-top: 20px;
    }
  }
  p {
    color: #000000;
    text-align: center;
  }
  time {
    display: block;
    margin-bottom: 10px;
    color: #959595;
    font-size: 15px;
    font-weight: 300;
  }
`;

const ShowMore = styled.div`
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  div {
    cursor: pointer;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 10px;
    }
  }
`;

const CustomColumnGroup = styled(ColumnGroup)`
  margin-top: 60px !important;
`;

const PosedColumn = posed(Column)({
  enter: {
    opacity: 1,
    transition: {
      duration: 400,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 400,
      ease: 'easeInOut',
    },
  },
});

const FilterList = styled.ul`
  display: flex;
  margin: calc(1.5rem - 0.75rem) 0 calc(1.5rem - 0.75rem) 0;
  padding: 0 1.5rem;
  width: 100%;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    margin: 0;
    justify-content: center;
    padding: 0;
  }
  li {
    list-style: none;
    margin-top: 8px;
    margin-right: 15px;
    @media screen and (max-width: 768px) {
      width: 47%;
      margin-right: 0;
      margin-top: 0;
      margin-bottom: 15px;
      &:nth-of-type(2n-1) {
        margin-right: 15px;
      }
    }
    &:last-of-type {
      margin-right: 0;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      color: #fff;
      background-color: #ce0527;
      border-radius: 10px;
      transition: all 0.3s ease;
      text-decoration: none !important;
      &:hover {
        color: #ce0527;
        box-shadow: 0 0 0 1px #ce0527;
        background-color: #fff;
        text-decoration: none !important;
      }
      &.active {
        color: #ce0527;
        box-shadow: 0 0 0 1px #ce0527;
        background-color: #fff;
      }
    }
  }
`;

const CustomSection = styled(Section)`
  padding: 0 1.5rem 9rem 1.5rem;
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem 3rem 1.5rem;
  }
`;

const TextWrapper = styled.div`
  padding: 0 1.5rem;
  margin: 15px 0 25px 0;
  color: #000;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Blog = ({
  data: { fallBackImages, legacyBlogs, modernBlogs, site, prismicBlog },
}) => {
  const allArticles = [...modernBlogs.edges, ...legacyBlogs.edges];
  const [filters] = useState([
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
  ]);
  const [blogs, setBlogs] = useState(allArticles.slice(0, 9));
  const [limit, setLimit] = useState(false);

  const handleClick = () => {
    if (blogs.length >= allArticles.length) {
      setLimit(true);
    } else {
      setBlogs(allArticles.slice(0, blogs.length + 9));
    }
  };

  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: `en`,
        }}
        title={
          prismicBlog.data.title && prismicBlog.data.title.text
            ? prismicBlog.data.title.text
            : site.siteMetadata.title
        }
        meta={[
          {
            name: `description`,
            content:
              prismicBlog.data.description && prismicBlog.data.description.text
                ? prismicBlog.data.description.text
                : site.siteMetadata.description,
          },
        ]}
      />
      {prismicBlog.data.body.map((section, index) => {
        if (section.slice_type === 'banner') {
          return (
            <Banner
              key={index}
              primary={section.primary}
              featuredLogos={prismicBlog.data.featured}
            />
          );
        }
        return null;
      })}
      {filters && filters.length > 0 && (
        <ColumnGroup className="is-mobile is-multiline is-vcenterd">
          <Column
            mobile={{ size: 12 }}
            tablet={{ size: 12 }}
            desktop={{ size: 12 }}
          >
            <TextWrapper style={{ textDecoration: 'underline', fontSize: 18 }}>Filter By:</TextWrapper>
            <FilterList>
              {filters.map(filter => (
                <li key={filter.tag}>
                  <Link activeClassName="active" to={`/blog/tag/${filter.tag}`}>
                    {filter.label}
                  </Link>
                </li>
              ))}
            </FilterList>
          </Column>
        </ColumnGroup>
      )}
      {blogs.length > 0 && (
        <CustomSection>
          <ColumnGroup className="is-mobile is-multiline">
            <PoseGroup>
              {blogs.map((blog, index) => {
                const randomNum = Math.floor(Math.random() * (14 - 0 + 1)) + 0;
                const randomImage = fallBackImages.edges[randomNum];
                return (
                  <PosedColumn
                    mobile={{ size: 12 }}
                    tablet={{ size: 6 }}
                    desktop={{ size: 4 }}
                    key={index}
                    as={Link}
                    to={
                      !blog.node.frontmatter
                        ? linkResolver(
                          blog.node.type,
                          blog.node.uid,
                          blog.node.data.postUrl
                        )
                        : linkResolver(
                          'article',
                          blog.node.fileAbsolutePath
                            .split('/')
                          [
                            blog.node.fileAbsolutePath.split('/').length - 1
                          ].replace('.md', ''),
                          blog.node.frontmatter.postUrl
                        )
                    }
                    initialPose="exit"
                  >
                    {!blog.node.frontmatter && (
                      <div>
                        <Img
                          fluid={
                            blog.node.data.list_image.localFile.childImageSharp
                              .fluid
                          }
                          alt={blog.node.data.list_image.alt}
                          backgroundColor="#959595"
                        />
                        <CustomContent
                          dangerouslySetInnerHTML={{
                            __html: `
                      <time>${blog.node.data.date}</time>
                      <p>${blog.node.data.page_title.text}</p>`,
                          }}
                        />
                      </div>
                    )}
                    {blog.node.frontmatter && (
                      <div>
                        <Img
                          fluid={randomImage.node.childImageSharp.fluid}
                          backgroundColor="#959595"
                        />
                        <CustomContent
                          dangerouslySetInnerHTML={{
                            __html: `
                      <time>${blog.node.frontmatter.date}</time>
                      <p>${blog.node.frontmatter.title}</p>`,
                          }}
                        />
                      </div>
                    )}
                  </PosedColumn>
                );
              })}
            </PoseGroup>
          </ColumnGroup>
          {!limit && (
            <CustomColumnGroup>
              <Column>
                <ShowMore>
                  <div onClick={handleClick}>
                    Show more <Plus height={17} fill="#CE0527" />
                  </div>
                </ShowMore>
              </Column>
            </CustomColumnGroup>
          )}
        </CustomSection>
      )}
      {blogs.length === 0 && (
        <Section size="medium">
          <ColumnGroup className="is-mobile is-multiline">
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 12 }}
              desktop={{ size: 12 }}
            >
              <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                No posts found
              </p>
            </Column>
          </ColumnGroup>
        </Section>
      )}
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object.isRequired,
    fallBackImages: PropTypes.object.isRequired,
    modernBlogs: PropTypes.object.isRequired,
    legacyBlogs: PropTypes.object.isRequired,
    prismicBlog: PropTypes.object.isRequired,
  }),
};

export default Blog;
