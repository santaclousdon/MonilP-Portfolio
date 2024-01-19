import sliceAppLarge from 'assets/slice-app-large.jpg';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/slice-app.jpg';
import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';
import { Button } from 'components/Button';

const title = 'AI/ML Developer';
const description =
  'I am professional in AI, computer vision, Deep learning, machine learning, I took part in several AI/ML projects.';
const roles = ['Artificial Intelligence', 'Machine Learning', 'Python'];

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[sliceApp, sliceAppLarge]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectTextRow>
          <ProjectSectionHeading>Achievements</ProjectSectionHeading>
          <ProjectSectionText>
            - Achieving high accuracy in detecting and localizing objects within images or
            videos, even under challenging conditions such as varying lighting,
            occlusions, and complex backgrounds
          </ProjectSectionText>
          <ProjectSectionText>
            - Creating object detection models that are robust and resilient, capable of
            accurately detecting objects across different perspectives, scales, and
            orientations.
          </ProjectSectionText>
          <Button
            secondary
            iconHoverShift
            className={styles.linkButton}
            icon="chevronRight"
            href="#"
          >
            Visit website
          </Button>
        </ProjectTextRow>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
