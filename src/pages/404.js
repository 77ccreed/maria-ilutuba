import React from 'react';

import Layout from '../components/Layout';

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
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
