import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';
import { FaApple, FaAndroid } from 'react-icons/fa';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [showAndroidModal, setShowAndroidModal] = useState(false);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="site.tagline">
            长期主义者的衣橱笔记
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.downloadButton, styles.iosButton)}
            to="https://apps.apple.com/cn/app/looklog/id6738351992">
            <FaApple className={styles.buttonIcon} />
            <Translate id="homepage.downloadIOS">
              iOS下载
            </Translate>
          </Link>
          <button
            type="button"
            className={clsx('button button--lg', styles.downloadButton, styles.androidButton)}
            onClick={() => setShowAndroidModal(true)}
          >
            <FaAndroid className={styles.buttonIcon} />
            <Translate id="homepage.downloadAndroid">Android下载</Translate>
          </button>
        </div>
      </div>

      {showAndroidModal && (
        <div className={styles.modalOverlay} onClick={() => setShowAndroidModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowAndroidModal(false)}>
              &times;
            </button>
            <Heading as="h3" className={styles.modalTitle}>
              <Translate id="homepage.modal.title">选择 Android 下载方式</Translate>
            </Heading>
            <div className={styles.modalLinks}>
              <Link
                className={styles.modalLinkItem}
                to="https://pub-29c7ca0035d547e9bca6c62edc5749c7.r2.dev/LookLog-release-1.7.0.apk"
                onClick={() => setShowAndroidModal(false)}
              >
                <Translate id="homepage.downloadDirect">直接下载 (推荐)</Translate>
              </Link>
              <Link
                className={styles.modalLinkItem}
                to="https://pan.quark.cn/s/47086b8f3172"  
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowAndroidModal(false)}
              >
                <Translate id="homepage.downloadQuark">夸克网盘</Translate>
              </Link>
              <Link
                className={styles.modalLinkItem}
                to="https://pan.baidu.com/s/1vzs0b1wE-s2Ype5G4R63LQ?pwd=1111"    
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowAndroidModal(false)}
              >
                <Translate id="homepage.downloadBaidu">百度网盘 (提取码: 1111)</Translate>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
