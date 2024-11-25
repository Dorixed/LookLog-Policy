import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '记录穿搭，找到适合自己的风格',
    Img: '/img/journal.png',
    description: (
      <>
        通过每天记录穿搭，逐渐发现哪些衣服是真正适合自己的，避免盲目追随博主推荐，找到属于自己的穿搭风格。
      </>
    ),
  },
  {
    title: '量化单品价值，践行长期主义',
    Img: '/img/wardrobe.png',
    description: (
      <>
        记录每件衣服的穿着次数，分辨哪些是真正物有所值的长期主义单品，避免因为便宜而买入“假划算”的衣物。
      </>
    ),
  },
  {
    title: 'AI智能识别，最小化录入门槛',
    Img: '/img/add.png',
    description: (
      <>
        借助AI技术，自动识别服装类别，减少手动填写，让记录衣物更加轻松高效。
      </>
    ),
  },
];

function Feature({Img, Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Img ? (
          <img src={Img} alt={title} className={styles.featureImg} />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
