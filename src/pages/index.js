import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';

const sections = [
  { id: 'one', bg: require('../assets/images/pic01.jpg') },
  { id: 'two', bg: require('../assets/images/pic02.jpg') },
  { id: 'three', bg: require('../assets/images/pic03.jpg') },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[0].bg} alt="Maria Ilutuba - iluteenus Tartus." />
        </span>
        <div className="content">
          <header className="major">
            <h2>Iluteenus Tartus</h2>
          </header>
          <p>Hellita end meie teenustega.
            Telli iluteenus Lõuna-Eestis endale sobival ajal sobivasse kohta. Töötame muuhulgas nii Tartus, Elvas kui ka Valgas. Naudi meie teenuseid mugavalt oma kodus. <b>Teenuse tellimise lisatasu on sõltuvalt asukohast 15-50 €</b>. Või broneeri aeg Ülenurmel, Tartu mnt 1.
          </p>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="Iluteenus Lõuna-Eestis" />
        </span>
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
                  <td>Maniküür</td>
                  <td>15-30 €</td>
                </tr>
                <tr>
                  <td>Pediküür</td>
                  <td>30-45 €</td>
                </tr>
                <tr>
                  <td>Jalgade parafiinihooldus</td>
                  <td>10 €</td>
                </tr>
                <tr>
                  <td>Näo parafiinihooldus</td>
                  <td>25 €</td>
                </tr>
                <tr>
                  <td>Juukselõikus</td>
                  <td>10 €</td>
                </tr>

              </tbody>
            </table>
            <Link to="/hinnakiri">Täielik hinnakiri</Link>
          </div>


        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Järgmine
          </a>
        </Scroll>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="Iluteenus" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Broneeri aeg ja naudi iluteenust!</h2>
          </header>
          <p>
            Helista numbril 55638016 või saada sõnum allpool. Broneeri Sulle sobiv iluteenus. Koduvisiidid Tartus, Elvas ja Valgas.
          </p>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Järgmine
          </a>
        </Scroll>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <header className="major">
          <h2>Saada kiri</h2>
        </header>
        <form method="post" data-netlify="true" name="kontakt" action="/kiri-on-saadetud/" >

          <div className="row gtr-uniform">
            <input type="hidden" name="form-name" value="kontakt" />


            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Nimi" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="email" id="email" placeholder="E-kirja aadress" />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                id="message"
                placeholder="Sinu sõnum"
                rows="4"
              />
            </div>
            <div className="col-12">
              <ul className="actions special">
                <li>
                  <input
                    type="submit"
                    value="Saada"
                    className="primary"
                  />
                </li>
              </ul>
            </div>
          </div>
        </form>
        <Link to="/hinnakiri">Täielik hinnakiri</Link>
      </div>
      <Footer />
    </section>

    <Scrollspy
      items={sections.map(s => s.id)}
      currentClassName="active"
      offset={50}
      componentTag={'div'}
    >
      {sections.map(s => {
        return (
          <div
            key={s.id}
            className="main-bg"
            id={`${s.id}-bg`}
            style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;
