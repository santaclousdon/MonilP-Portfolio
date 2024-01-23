import { useEffect, useState } from 'react';
import styles from './Skills.module.css';
import { Meta } from 'components/Meta';
import { skills } from 'data/constants';
import { Footer } from 'components/Footer';
import { DecoderText } from 'components/DecoderText';

export const Skills = () => {
  const [skillList, setSkillList] = useState([]);
  useEffect(() => {
    setSkillList(skills);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <DecoderText text="My Skills" delay={300} />
        </div>
        <div className={styles.desc}>
          Here are some of the abilities I've been developing over the last 7 years as a
          senior web developer.
        </div>
        <div className={styles.skillsContainer}>
          {skillList.map((skill, index) => (
            <div className={styles.skill} key={index}>
              <div className={styles.skillTitle}>{skill.title}</div>
              <div className={styles.skillList}>
                {skill.skills.map((item, index) => (
                  <div className={styles.skillItem} key={index}>
                    <img src={item.image} className={styles.skillImage} />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
