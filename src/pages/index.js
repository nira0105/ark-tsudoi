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
    <header id="header" className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundColor: "transparent"}}>
      <div class="css-carousel-slider background">
        <div class="slide-wrap-main">
            <div class="slide"><img src="/img/hero/pc/1.jpg" alt="" /></div>
        </div>

        <div class="slide-wrap for-pc">
            <div class="slide"><img src="/img/hero/pc/1.jpg" alt="" /></div>
            <div class="slide"><img src="/img/hero/pc/2.jpg" alt="" /></div>
            <div class="slide"><img src="/img/hero/pc/3.jpg" alt="" /></div>
            <div class="slide"><img src="/img/hero/pc/4.png" alt="" /></div>
        </div>

        <div class="slide-wrap for-pc-medium">
            <div class="slide"><img src="/img/hero/pc-medium/4 3.jpg" alt="" /></div>
            <div class="slide"><img src="/img2" alt="" /></div>
            <div class="slide"><img src="img3" alt="" /></div>
            <div class="slide"><img src="img4" alt="" /></div>
        </div>

        <div class="slide-wrap for-sp-medium">
            <div class="slide"><img src="/img/hero/sp-medium/3 4.jpg" alt="" /></div>
            <div class="slide"><img src="/img2" alt="" /></div>
            <div class="slide"><img src="img3" alt="" /></div>
            <div class="slide"><img src="img4" alt="" /></div>
        </div>

        <div class="slide-wrap for-sp">
            <div class="slide"><img src="/img/hero/sp/9 16.jpg" alt="" /></div>
            <div class="slide"><img src="/img2" alt="" /></div>
            <div class="slide"><img src="img3" alt="" /></div>
            <div class="slide"><img src="img4" alt="" /></div>
        </div>

      </div>

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
