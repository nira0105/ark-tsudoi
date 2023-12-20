import React from 'react';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: <a href= "docs/support" >充実したサポート</a>,
    path:"/img/join/support1.png",
    description: (
      <>
      バグによるロストななどのサポートにより、サバイバーロストや死体が埋まる などのバグ被害の心配が必要なく ほとんどのバグ等のサポートをしているので安心して遊べます
      </>
    ),
  },
  {
    title: <a href= "docs/ase/setting" >遊びやすい設定</a>,
    path: "/img/join/setting2.png",
    description: (
      <>
      社会人や学生など時間がない人 たまにしかログインできない人でも遊びやすい楽しめるように、テイム倍率 ブリーディング 採取などの設定が高めに設定されています
      </>
    ),
  },
  {
    title: <a href= "docs/rule" >しっかりとしたルール</a>,
    path: "/img/join/rulu.png",
    description: (
      <>
      しっかりとしたルールがあるから MPK 窃盗 場所取りなどがなく安心して遊べる また違反者の対処も迅速に行われるので安心して楽しくプレイしていただけます
      </>
    ),
  },
  {
    title: <a href= "docs/event" > 楽しいオリジナルイベント</a>,
    path: "/img/join/photo3.png",
    description: (
      <>
      公式が行うサマーバッシュイベントなどはもちろん 夏祭りイベントや 運動会など定期的にイベントが開催されています シングルでは味わえない楽しみが体験できます
      </>
    ),
  },
  {
    title: 'ASEすべてのマップが遊べる',
    path: "/img/join/ARKultimate.png",
    description: (
      <>
      日本では数少ない ASE全てのマップが遊べるサーバとなっています またイベントマップとして縛りマップやMODマップなども定期的に開かれます
      </>
    ),
  },
  {
    title: 'ASAサーバーも完備',
    path: "/img/hero/ASAheader.png",
    description: (
      <>
      ARK Survival Evolvedのリメイク版Ark Survival Ascendedのサーバーも24時間開かれています PCはもちろん PS版でもご利用いただけます
      </>
    ),
  },
];


function Feature({path, title, description}) {
  return (
    <div className="col col--6 text--center">
     <img src={path} className={styles.featureSvg} role="img" />
      <div className="text--center padding-horiz--md">
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
