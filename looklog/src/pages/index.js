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
          <Link
            className={clsx('button button--lg', styles.downloadButton, styles.androidButton)}
            to="https://pub-29c7ca0035d547e9bca6c62edc5749c7.r2.dev/LookLog-release-1.0.1.apk">
            <FaAndroid className={styles.buttonIcon} />
            <Translate id="homepage.downloadAndroid">
              Android下载
            </Translate>
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
