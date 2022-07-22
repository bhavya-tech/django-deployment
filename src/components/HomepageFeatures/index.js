import React, { useEffect,useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

const FeatureList = [
  {
    title: 'Quick and Easy',
    Svg: require('@site/static/img/pinch-easy.svg').default,
    description: (
      <>
        The guide is designed to help you deploy your project in minutes.
      </>
    ),
  },
  {
    title: 'Beginner Friendly',
    Svg: require('@site/static/img/beginner-friendly.svg').default,
    description: (
      <>
        The guide contains detailed instructions for each process step and is easy to follow.
      </>
    ),
  },
  {
    title: 'Production Ready',
    Svg: require('@site/static/img/production-ready.svg').default,
    description: (
      <>
        Repetitive tasks are automated so the server can run with minimal monitoring.      
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  var [svgColor, setSvgColor] = useState(0);
  const { colorMode } = useColorMode();

  useEffect(() => {
    setSvgColor(
      colorMode === 'dark' ? 'white' : 'black'
    );
  }, [colorMode]);

  if(colorMode == undefined){
    return <>Loading...</>;
  }

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-vert--md">
        <Svg className={styles.featureSvg} role="img" fill={svgColor} test={svgColor} />
      </div>
      <div className="text--center padding-horiz--md padding-vert--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
