import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import "./styles.css";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header id="header" className="hero">
      <div className="hero-wallpaper">
        {/*
          この壁紙ののimgタグを増やすだではバグります。
          もし壁紙の画像の数を増やしたい場合は、`./styes.css`の`.hero-wallpaper`に設定しているスタイルを編集してください。
        */}

        <img src="/img/hero/photo con2-1.jpg" />
        <img src="/img/hero/photo con2-3.png" />
        <img src="/img/hero/photo con2-4.jpg" />
        <img src="/img/hero/photo con2-6.png" />
        <img src="/img/hero/photo con2-5.jpg" />
        <img src="/img/hero/photo con2-7.jpg" />
        <img src="/img/hero/photo con2-2.jpg" />
        <img src="/img/hero/photo con6.jpg" />
      </div>

      <div className="hero-content">
        <h2 className="hero__title heroFont">{siteConfig.title}</h2>

        <Link
          className="button button--secondary button--lg"
          to="/docs/ase/join"
        >
          <img src="/img/logos/ASElogo2.png" className="button-icon" />
          <span className="button-text">ASEサーバー参加方法はこちら</span>
        </Link>

        <Link
          className="button button--secondary button--lg"
          to="/docs/asa/join"
        >
          <img src="/img/logos/ASAlogo2.png" className="button-icon" />
          <span className="button-text">ASAサーバー参加方法はこちら</span>
        </Link>

      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description="このサーバーは日本最大のサーバーです。24時間365日ASE・ASAともに全てのマップを提供していますぜひ参加して下さい"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
