import React from 'react';
import { Section, Container, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { useInView } from 'react-intersection-observer';
import { useMedia } from 'react-use';

const CustomContent = styled(Content)`
  text-align: center;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #ce0527;
    font-size: 69px;
    letter-spacing: -0.62px;
    font-weight: 500;
    margin: 0 0 20px 0;
    @media screen and (max-width: 768px) {
      font-size: 42px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    font-weight: 300;
    margin: 0 !important;
  }
`;

const CustomSection = styled(Section)`
  background-color: ${props => props.background};
`;

const PosedColumn = posed(Column)({
  enter: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    transform: 'translateY(-100%)',
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
});

const PosedColumnGroup = posed(ColumnGroup)({
  enter: {
    opacity: 1,
    staggerChildren: 50,
  },
  exit: {
    opacity: 1,
    staggerChildren: 50,
  },
});

const Stats = ({ items, size, background }) => {
  const [desktopRef, desktopInView] = useInView({
    triggerOnce: true,
  });
  const [mobileRef, mobileInView] = useInView({
    triggerOnce: true,
  });
  const mobile = useMedia('(max-width: 768px)');
  return (
    <>
      {items.length > 0 && (
        <CustomSection size={size} background={background}>
          <Container>
            {!mobile && (
              <PosedColumnGroup
                pose={desktopInView ? 'enter' : 'exit'}
                className="is-mobile is-multiline"
                ref={desktopRef}
                style={{ minHeight: '145px' }}
              >
                {desktopInView &&
                  items.map((item, index) => (
                    <PosedColumn
                      initialPose="exit"
                      pose={desktopInView ? 'enter' : 'exit'}
                      key={index}
                    >
                      <CustomContent
                        dangerouslySetInnerHTML={{
                          __html: `${item.figure.html} ${item.content.html}`,
                        }}
                      />
                    </PosedColumn>
                  ))}
              </PosedColumnGroup>
            )}
            {mobile && (
              <PosedColumnGroup
                pose={mobileInView ? 'enter' : 'exit'}
                className="is-mobile is-multiline"
                ref={mobileRef}
                style={{ minHeight: '145px' }}
              >
                {mobileInView &&
                  items.map((item, index) => (
                    <PosedColumn
                      initialPose="exit"
                      pose={mobileInView ? 'enter' : 'exit'}
                      key={index}
                    >
                      <CustomContent
                        dangerouslySetInnerHTML={{
                          __html: `${item.figure.html} ${item.content.html}`,
                        }}
                      />
                    </PosedColumn>
                  ))}
              </PosedColumnGroup>
            )}
          </Container>
        </CustomSection>
      )}
    </>
  );
};

export default Stats;
