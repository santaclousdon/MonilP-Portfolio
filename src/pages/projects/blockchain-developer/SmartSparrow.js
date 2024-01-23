import backgroundBlkLarge from 'assets/blk-background-large.jpg';
import backgroundBlkPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundBlk from 'assets/blk-background.jpg';
import imageBlkLessonBuilderDarkLarge from 'assets/blk-lesson-builder-dark-large.jpg';
import imageBlkLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageBlkLessonBuilderDark from 'assets/blk-lesson-builder-dark.jpg';
import imageBlkLessonBuilderLightLarge from 'assets/blk-lesson-builder-light-large.jpg';
import imageBlkLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageBlkLessonBuilderLight from 'assets/blk-lesson-builder-light.jpg';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import imageSprBackDark from 'assets/spr-back-dark.png';
import imageSprBackDarkLarge from 'assets/spr-back-dark-large.png';
import imageSprBackLightLarge from 'assets/spr-back-light-large.png';
import imageSprBackLight from 'assets/spr-back-light.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Button } from 'components/Button';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
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
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() =>
  import('../fullstack-developer/Earth').then(mod => mod.Earth)
);
const EarthSection = dynamic(() =>
  import('../fullstack-developer/Earth').then(mod => mod.EarthSection)
);

const title = 'Blockchain Developer';
const description =
  'I worked as blockchain developer on several products. So I has a wealth of experience about blockchain.';
const roles = [
  'Smart Contract Development',
  'Web3 Development',
  'DeFi/NFT Development',
  'P2E Game Development',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();

  const isDark = themeId === 'dark';

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundBlk}
          srcSet={`${backgroundBlk.src} 1080w, ${backgroundBlkLarge.src} 2160w`}
          placeholder={backgroundBlkPlaceholder}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageBlkLessonBuilderDark, imageBlkLessonBuilderDarkLarge]
                  : [imageBlkLessonBuilderLight, imageBlkLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageBlkLessonBuilderDarkPlaceholder
                  : imageBlkLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Achievements</ProjectSectionHeading>
              <ProjectSectionText>
                - Built pixel-perfect pages such as SpaceY2025 landing page followed by
                Figma design for MetaSpace project.
              </ProjectSectionText>
              <ProjectSectionText>
                - Carried out several events including mint followed by the diverse
                eco-system.
              </ProjectSectionText>
              <ProjectSectionText>
                - Populated user trades by subscribing contract events using subgraph.
              </ProjectSectionText>
              <ProjectSectionText>
                - Implemented IPFS hosting and storage using Fleek service. - Performed
                code reviews for other team members and advised the best solution to fix
                issues.
              </ProjectSectionText>
              <ProjectSectionText>
                - Performed code reviews for other team members and advised the best
                solution to fix issues.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                className={styles.linkButton}
                icon="chevronRight"
                href="https://game.spacey2025.com/"
              >
                Visit website
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Achievements</ProjectSectionHeading>
              <ProjectSectionText>
                - Designed and built multi-chain IDO platforms from scratch as a core
                member of the Synergia team to provide tools and support throughout the
                entire project timeline.
              </ProjectSectionText>
              <ProjectSectionText>
                - Consulted with other members of the Synergia team to advance the
                features and set a new standard.
              </ProjectSectionText>
              <ProjectSectionText>
                - Implemented SkyLaunch IDO & Whitelisting such as KYC process to conduct
                automatically using an on-chain, automated KYC service.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                className={styles.linkButton}
                icon="chevronRight"
                href="https://skylaunch.finance/"
              >
                Visit website
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprBackDark, imageSprBackDarkLarge]
                  : [imageSprBackLight, imageSprBackLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Achievements</ProjectSectionHeading>
              <ProjectSectionText>
                - Built UI/UX based on the design using React and Web3 for their
                transparent and flexible DeFi Index platform
              </ProjectSectionText>
              <ProjectSectionText>
                - Established a local Avalanche network using hardhat and tested front-end
                features with it
              </ProjectSectionText>
              <ProjectSectionText>
                - Built CI/CD pipline with GitHub Actions for staging and production
                environment
              </ProjectSectionText>
              <ProjectSectionText>
                - Mentored other team members through reviewing PRs via Git
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                className={styles.linkButton}
                icon="chevronRight"
                href="https://www.cook.finance/"
              >
                Visit website
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            labels={useMemo(
              () => [
                {
                  position: [0.54, 0.19, 0.18],
                  text: 'Pacific ring of fire',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'Ruapehu',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'St. Helens',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'Krakatoa',
                  hidden: true,
                },
                {
                  position: [0.11, 0.2, -0.56],
                  text: 'Parícutin',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Kīlauea',
                  hidden: true,
                },
                {
                  position: [-0.24, 0.75, 0.24],
                  text: 'Mantle',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.55, 0.24],
                  text: 'Outer core',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.35, 0.24],
                  text: 'Inner core',
                  delay: 800,
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                      Next-generation learning experiences
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      The flexibility of the product allowed for developers to create
                      engaging interactive experiences as highly configurable plugins that
                      could then be used and manipulated by learning designers.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Bringing 3D into learning
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      One really cool example is the 3D screen plugin. Learning designers
                      can load any model into it and then configure camera positions to
                      animate to for each section.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Interactivity
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Learners can then be directed to specific parts of the model and
                      shown labels. They’re also able to click and drag to orbit around
                      and freely explore at any time.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Mantle', 'Outer core', 'Inner core']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Animation
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Learning designers can pick an animation included in the model to
                      play or loop for any section without having to use any complex
                      animation tools.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
