import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      
      <div class="css-carousel-slider background">
        <div class="slide-wrap-main">
            <div class="slide"><img src="/img/hero/photo con1.png" alt="" /></div>
        </div>

        <div class="slide-wrap">
            <div class="slide"><img src="/img/hero/photo con1.png" alt="" /></div>
            <div class="slide"><img src="/img/hero/photo con2.png" alt="" /></div>
            <div class="slide"><img src="/img/hero/photo con4.jpg" alt="" /></div>
            <div class="slide"><img src="/img/hero/photo con5.png" alt="" /></div>
        </div>
      </div>
      <header id="header" className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundColor: "transparent"}}>

        <div className="container heroContainer">
          <h1 className="hero__title heroFont">{siteConfig.title}</h1><br /><br />
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/ase/join">
              <img src="/img/hero/ASEicon.png" 
alt="ASE" width="25" height="25"></img>ASEサーバー参加方法はこちらから
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/asa/joinasa">
              <img src="/img/hero/ASAicon.png" 
alt="ASE" width="25" height="25"></img>ASAサーバー参加方法はこちらから
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="このサーバーは日本発祥の大規模サーバーです。24時間365日全てのマップを提供していますぜひ参加して下さい">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
