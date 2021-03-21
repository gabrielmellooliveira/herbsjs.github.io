import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import theme from 'prism-react-renderer/themes/nightOwlLight';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { GitHub } from '@material-ui/icons';
import Features from './indexComponents/features/features'
import Examples from './indexComponents/examples/examples'
import HowItWorks from './indexComponents/howItWorks/howItWorks'

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img src="img/logo-herbsjs.png"></img>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--primary button--lg',styles.getStarted)}
              to={useBaseUrl('docs/')}>
              Get started
            </Link> 
            {' '}
            <Link
              className={clsx('button button--primary button--md', styles.getStarted)}
              to='https://github.com/herbsjs'>
              <GitHub fontSize="small"/> Start
            </Link>
          </div>
        </div>
      </header>
      <main>

        <Features />
        
        <div className={styles.section}>
          <h1>Add major features, with minimal code.</h1>
          <Examples />
          <h1>Dynamically generate.</h1>
          <div className={styles.badges}>
            <span className="badge badge--primary">Repository</span>
            <span className="badge badge--primary">GraphQL-layer</span>
            <span className="badge badge--primary">REST-layer</span>
            <span className="badge badge--primary">Shelf-project</span>
          </div>
        </div>
        
        <div className={styles.section}>
          <h1>How it works?</h1>
          <HowItWorks/>
        </div>

        <div className={styles.section}>
          <h1>Who is using HerbsJS?</h1>
          <div className={styles.logos}>
            <img src='img/logo-vortx.png' alt='logo-Vórtx' className={styles.logosImage}/>
            <img src='img/logo-vizir.png' alt='logo-Vizir' className={styles.logosImage}/>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
