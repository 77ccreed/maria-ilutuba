import React from 'react';

import Layout from '../components/Layout';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <section id="one" className="main">
      <div className="container">
        <div className="content">
          <header className="major">
            <h2>Lehte ei leitud</h2>
          </header>
          <section>
            <h4>Sellist URL-i ei ole.</h4>
            <Link to="/">Tagasi pealehele</Link>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
