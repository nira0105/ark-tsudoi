import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const DOCUSAURUS = "/img/docusaurus.png";
const FeatureList = [
  {
    title: '充実したサポート',
    path:"/img/join/setting1.png",
    description: (
      <>
      バグによるロストのサポートにより、サバイバーロストや死体が埋まる　などのバグ被害の心配が必要なく　ほとんどのバグ等のサポートをしているので安心して遊べます
      </>
    ),
  },
  {
    title: '遊びやすい設定',
    path: DOCUSAURUS,
    description: (
      <>
      社会人や学生など時間がない人　たまにしかログインできない人でも遊びやすい楽しめるように、テイム倍率　ブリーディング　採取などの設定が高めに設定されています
      </>
    ),
  },
  {
    title: 'しっかりとしたルール',
    path: DOCUSAURUS,
    description: (
      <>
      しっかりとしたルールがあるから　MPK 窃盗　場所取りなどがなく安心して遊べる　また違反者の対処も迅速に行われるので安心して楽しくプレイしていただけます
      </>
    ),
  },
  {
    title: '楽しいオリジナルイベント',
    path: DOCUSAURUS,
    description: (
      <>
      公式が行うサマーバッシュイベントなどはもちろん　夏祭りイベントや　運動会など定期的にイベントが開催されています　シングルでは味わえない楽しみが体験できます
      </>
    ),
  },
  {
    title: '全てのマップが遊べる',
    path: "/img/join/ARKultimate.png",
    description: (
      <>
      日本では数少ない　全てのマップが遊べるサーバとなっています　またイベントマップとして縛りマップやMODマップもあります 現在はMODマップタエニアステラが開かれています
      </>
    ),
  },
];

function Feature({path, title, description}) {
  return (
    <div className={clsx('col col--6 text--center')}>
     <img src={path} className={styles.featureSvg} role="img" />
      <div className={clsx("text--center padding-horiz--md")}>
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
        <div className={clsx('row')}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
