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
            <div class="slide"><img src="/img/hero/1.jpg" alt="" /></div>
        </div>

        <div class="slide-wrap">
            <div class="slide"><img src="/img/hero/1.jpg" alt="" /></div>
            <div class="slide"><img src="/img/hero/2.jpg" alt="" /></div>
            <div class="slide"><img src="/img/hero/3.jpg" alt="" /></div>
            <div class="slide"><img src="/img/hero/4.png" alt="" /></div>
        </div>
      </div>
      <header id="header" className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundColor: "transparent"}}>

        <div className="container heroContainer">
          <h1 className="hero__title heroFont">{siteConfig.title}</h1><br /><br />
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/join">
              参加方法はこちらから
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
      description="ぜひ参加してください">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
