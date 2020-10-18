import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>

    <section id="one" className="main">
      <div className="container">
        <div className="content">

          <header className="major">
            <h2>Hinnakiri</h2>
          </header>
          <div className="table-wrapper">
            <table className="alt">
              <thead>
                <tr>
                  <th>Teenus</th>
                  <th>Hind</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Laste maniküür</td>
                  <td>5€</td>
                </tr>
                <tr>
                  <td>Geellaki maniküür ühevärviline</td>
                  <td>18€</td>
                </tr>
                <tr>
                  <td>Geellaki maniküür disainiga</td>
                  <td>23€</td>
                </tr>
                <tr>
                  <td>Geellaki eemaldamine ja hooldus</td>
                  <td>10€</td>
                </tr>
                <tr>
                  <td>Maniküür naistele, meestele</td>
                  <td>10€</td>
                </tr>
                <tr>
                  <td>Maniküür koos parafiini hooldusega</td>
                  <td>18€</td>
                </tr>

                <tr>
                  <td>Parafiini hooldus kätele</td>
                  <td>8€</td>
                </tr>
                <tr>
                  <td>Pärlite kasutamine (1 pärl), kleepsud</td>
                  <td>0,15€</td>
                </tr>
                <tr>
                  <td>Küünte poleerimine</td>
                  <td>3€</td>
                </tr>
                <tr>
                  <td>Küünte parandus hoolduse väliselt</td>
                  <td>3€</td>
                </tr>
                <tr>
                  <td>Ripsmete värvimine</td>
                  <td>7€</td>
                </tr>
                <tr>
                  <td>Külmude piiramine</td>
                  <td>5-7€</td>
                </tr>
                <tr>
                  <td>Kulmude värvimine</td>
                  <td>7€</td>
                </tr>
                <tr>
                  <td>Pediküür naistele</td>
                  <td>20€</td>
                </tr>
                <tr>
                  <td>Pediküür lakiga</td>
                  <td>21€</td>
                </tr>
                <tr>
                  <td>Pediküür geellakiga</td>
                  <td>23€</td>
                </tr>
                <tr>
                  <td>Pediküür geellaki ja kaunistustega</td>
                  <td>25€</td>
                </tr>
                <tr>
                  <td>Pediküür meestele</td>
                  <td>25-30€</td>
                </tr>
                <tr>
                  <td>Vuntside depileerimine</td>
                  <td>2€</td>
                </tr>
                <tr>
                  <td>Kaenla depileerimine</td>
                  <td>5-8€</td>
                </tr>
                <tr>
                  <td>Jalgade depileerimine</td>
                  <td>15€</td>
                </tr>
              </tbody>
            </table>
            <Link to="/">Tagasi avalehele</Link>
          </div>

        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
