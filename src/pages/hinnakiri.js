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
                  <th>Maniküür</th>
                  <th>Hind</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Laste maniküür</td>
                  <td>5 €</td>
                </tr>
                <tr>
                  <td>Naiste maniküür</td>
                  <td>10 €</td>
                </tr>
                <tr>
                  <td>Meeste maniküür</td>
                  <td>15 €</td>
                </tr>
                <tr>
                  <td>Geellaki maniküür ühevärviline</td>
                  <td>18 €</td>
                </tr>
                <tr>
                  <td>Geellaki maniküür disainiga</td>
                  <td>23 €</td>
                </tr>
                <tr>
                  <td>Geellaki eemaldamine ja hooldus</td>
                  <td>18 €</td>
                </tr>
                <tr>
                  <td>Maniküür koos parafiini hooldusega</td>
                  <td>18 €</td>
                </tr>
                <tr>
                  <td>Pärlite kasutamine (1 pärl)</td>
                  <td>0,15 €</td>
                </tr>
                <tr>
                  <td>Kleepsud</td>
                  <td>0,15 €</td>
                </tr>
                <tr>
                  <td>Parafiini hooldus kätele</td>
                  <td>8 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-wrapper">
            <table className="alt">
              <thead>
                <tr>
                  <th>Pediküür</th>
                  <th>Hind</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Pediküür naistele</td>
                  <td>25 €</td>
                </tr>
                <tr>
                  <td>Naiste pediküür lakiga</td>
                  <td>25 €</td>
                </tr>
                <tr>
                  <td>Naiste pediküür geellakiga</td>
                  <td>28 €</td>
                </tr>
                <tr>
                  <td>Naiste pediküür geellaki ja kaunistustega</td>
                  <td>35 €</td>
                </tr>
                <tr>
                  <td>Pediküür meestele</td>
                  <td>30 €</td>
                </tr>
                <tr>
                  <td>Jalgade parafiinihooldus</td>
                  <td>10 €</td>
                </tr>
              </tbody>
            </table>
          </div>


          <div className="table-wrapper">
            <table className="alt">
              <thead>
                <tr>
                  <th>Depilatsioon</th>
                  <th>Hind</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Sääre depilatsioon</td>
                  <td>10 €</td>
                </tr>
                <tr>
                  <td>Terved jalad</td>
                  <td>15 €</td>
                </tr>
                <tr>
                  <td>Kaenlaalused</td>
                  <td>5-8 €</td>
                </tr>
                <tr>
                  <td>Kulmude depilatsioon</td>
                  <td>5 €</td>
                </tr>
                <tr>
                  <td>Näopiirkonna depilatsioon</td>
                  <td>8 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-wrapper">
            <table className="alt">
              <thead>
                <tr>
                  <th>Nägu</th>
                  <th>Hind</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Ripsmete värvimine</td>
                  <td>7 €</td>
                </tr>
                <tr>
                  <td>Kulmude värvimine</td>
                  <td>5 €</td>
                </tr>
                <tr>
                  <td>Kulmude piiramine</td>
                  <td>5-7 €</td>
                </tr>

                <tr>
                  <td>Parafiinihooldus näole</td>
                  <td>25 €</td>
                </tr>
              </tbody>
            </table>


            <div className="table-wrapper">
              <table className="alt">
                <thead>
                  <tr>
                    <th>Juukselõikus</th>
                    <th>Hind</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td>Juukselõikus naistele</td>
                    <td>10 €</td>
                  </tr>
                  <tr>
                    <td>Juukselõikus lastele</td>
                    <td>8-10 €</td>
                  </tr>
                  <tr>
                    <td>Juukselõikus meestele</td>
                    <td>10 €</td>
                  </tr>
                </tbody>
              </table>
            </div>


            <Link to="/">Tagasi avalehele</Link>
          </div>


        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
