import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Section, Container, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import Img from 'gatsby-image';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { linkResolver } from '../../../util/links';

const CustomContent = styled(Content)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 500;
    text-align: center;
    &:first-of-type {
      margin-top: 20px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    text-align: center;
  }
`;

const Divider = styled.div`
  border-top: 1px solid #ebebeb;
  @media screen and (max-width: 768px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ArticleRelated = ({ items, primary, legacyTitles }) => (
  <>
    {items.length > 0 && (
      <>
        <Container>
          <Divider />
        </Container>
        <Section style={{ paddingTop: 0 }}>
          <Container>
            <ColumnGroup className="is-mobile is-multiline is-centered">
              <Column
                mobile={{ size: 12 }}
                tablet={{ size: 10 }}
                desktop={{ size: 10 }}
                paddingless
              >
                {primary.content.html && (
                  <ColumnGroup className="is-mobile is-multiline is-centered">
                    <Column
                      mobile={{ size: 12 }}
                      tablet={{ size: 10 }}
                      desktop={{ size: 10 }}
                    >
                      <CustomContent
                        dangerouslySetInnerHTML={{
                          __html: primary.content.html,
                        }}
                      />
                    </Column>
                  </ColumnGroup>
                )}
                <ColumnGroup className="is-mobile is-multiline is-centered">
                  {items.map((item, index) => {
                    if (item.article) {
                      const { data, type, uid } = item.article.document[0];
                      return (
                        <Column
                          mobile={{ size: 12 }}
                          tablet={{ size: 6 }}
                          desktop={{ size: 4 }}
                          key={index}
                          as={Link}
                          to={linkResolver(type, uid, data.postUrl)}
                        >
                          <Img
                            fluid={
                              data.list_image.localFile.childImageSharp.fluid
                            }
                            alt={data.list_image.alt}
                            style={{ marginBottom: '20px' }}
                          />
                          <CustomContent
                            dangerouslySetInnerHTML={{
                              __html: `<p>${data.page_title.text}</p>`,
                            }}
                          />
                        </Column>
                      );
                    }
                    return null;
                  })}
                  {legacyTitles &&
                    legacyTitles.length > 0 &&
                    legacyTitles.map((title, index) => (
                      <StaticQuery
                        query={graphql`
                          query {
                            allFile(
                              filter: {
                                relativePath: { regex: "/BlogFallback/" }
                              }
                            ) {
                              edges {
                                node {
                                  id
                                  childImageSharp {
                                    fluid(
                                      maxWidth: 600
                                      maxHeight: 350
                                      quality: 100
                                    ) {
                                      ...GatsbyImageSharpFluid
                                    }
                                  }
                                }
                              }
                            }
                            allMarkdownRemark {
                              edges {
                                node {
                                  frontmatter {
                                    title
                                    featured_image
                                    date(formatString: "dddd Do MMMM YYYY")
                                    postUrl: date(formatString: "YYYY/MM")
                                  }
                                }
                              }
                            }
                          }
                        `}
                        render={({ allMarkdownRemark, allFile }) => {
                          const randomNum =
                            Math.floor(Math.random() * (14 - 0 + 1)) + 0;
                          const randomImage = allFile.edges[randomNum];
                          const post = allMarkdownRemark.edges.find(
                            edge =>
                              title.replace(/\s/g, '') ===
                              edge.node.frontmatter.title.replace(/\s/g, '')
                          );

                          if (!post) {
                            return null;
                          }
                          return (
                            <Column
                              mobile={{ size: 12 }}
                              tablet={{ size: 6 }}
                              desktop={{ size: 4 }}
                              key={index}
                              as={Link}
                              to={linkResolver(
                                'article',
                                kebabCase(post.node.frontmatter.title),
                                post.node.frontmatter.postUrl
                              )}
                            >
                              <Img
                                fluid={randomImage.node.childImageSharp.fluid}
                                style={{ marginBottom: '20px' }}
                              />
                              <CustomContent
                                dangerouslySetInnerHTML={{
                                  __html: `<p>${post.node.frontmatter.title}</p>`,
                                }}
                              />
                            </Column>
                          );
                        }}
                      />
                    ))}
                </ColumnGroup>
              </Column>
            </ColumnGroup>
          </Container>
        </Section>
      </>
    )}
  </>
);

export default ArticleRelated;
