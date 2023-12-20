import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header id="header" className="hero wallpaper-slide">
      <div className="inner">
        <h1 className="title">{siteConfig.title}</h1>

        <Link
          className="button button--secondary button--lx"
          to="/docs/ase/join"
        >
          <img src="/img/logos/ASElogo2.png" alt="logo" height="30px" style={{verticalAlign: "middle"}}></img>
          ASEサーバー参加方法はこちらから
        </Link>

        <Link
          className="button button--secondary button--lx"
          to="/docs/asa/join"
        >
          <img src="/img/logos/ASAlogo2.png" alt="logo" height="30px" style={{verticalAlign: "middle"}}></img>
          ASAサーバー参加方法はこちらから
        </Link>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="このサーバーは日本最大のサーバーです。24時間365日ASE・ASAともに全てのマップを提供していますぜひ参加して下さい">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
