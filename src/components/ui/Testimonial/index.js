import React from 'react';
import { Section, Container, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { Speech } from '../Icons';

const CustomContent = styled(Content)`
  p {
    color: #000;
    font-weight: 300;
    letter-spacing: -0.23px;
    margin: 0;
  }
  span {
    color: #959595;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    ${props => (props.alternate ? 'padding: 0 30px' : 'padding: 0')}
  }
`;

const TextWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
`;

const TestimonialWrapper = styled(Section)`
  margin-bottom: -350px;
  @media screen and (max-width: 1407px) {
    margin-bottom: -300px;
  }
  @media screen and (max-width: 1215px) {
    margin-bottom: 0;
  }
`;

const SpeechWrapper = styled.div`
  position: absolute;
  top: ${props => (props.flipped ? 'auto' : '0')};
  bottom: ${props => (props.flipped ? '0' : 'auto')};
  left: ${props => (props.flipped ? 'auto' : '-25px')};
  right: ${props => (props.flipped ? '0' : 'auto')};
  @media screen and (max-width: 768px) {
    left: ${props => (props.flipped ? 'auto' : '0')};
    right: ${props => (props.flipped ? '0' : 'auto')};
  }
  svg {
    transform: ${props => (props.flipped ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

const ContentWrapper = styled.div`
  padding: 0 60px;
  margin-bottom: 220px;
  @media screen and (max-width: 1215px) {
    padding: 0;
    margin-bottom: 0;
  }
`;

const Testimonial = ({ primary }) => (
  <TestimonialWrapper size="medium">
    <Container>
      <ColumnGroup className="is-mobile is-multiline is-vcentered is-reversed-mobile">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 5 }}
          desktop={{ size: 5 }}
          widescreen={{ size: 5 }}
        >
          <ContentWrapper>
            <TextWrapper>
              <SpeechWrapper>
                <Speech height="16" />
              </SpeechWrapper>
              <CustomContent
                dangerouslySetInnerHTML={{
                  __html: primary.content.html,
                }}
              />
              <SpeechWrapper flipped>
                <Speech height="16" />
              </SpeechWrapper>
            </TextWrapper>
            <CustomContent
              style={{ marginTop: 35 }}
              alternate
              dangerouslySetInnerHTML={{
                __html: `${`<span>${primary.person.text}</span>`}`,
              }}
            />
          </ContentWrapper>
        </Column>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 7 }}
          desktop={{ size: 7 }}
          widescreen={{ size: 7 }}
        >
          <Img
            fluid={primary.image.localFile.childImageSharp.fluid}
            alt={primary.image.alt}
          />
        </Column>
      </ColumnGroup>
    </Container>
  </TestimonialWrapper>
);

export default Testimonial;
