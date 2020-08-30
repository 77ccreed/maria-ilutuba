import React from 'react';

import Layout from '../components/Layout';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <section id="one" className="main">
      <div className="container">
        <div className="content">
          <header className="major">
            <h2>Teie kiri on saadetud.</h2>
          </header>
          <section>
            <p>Äitäh kirja eest! Vastame esimesel võimalusel.</p>
            <Link to="/">Tagasi pealehele</Link>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
