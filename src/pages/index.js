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
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Iluteenus ja juuste lõikus</h2>
          </header>
          <p>
            Ilusalong Pukas, Ääre tn. 10-6. Pakume iluteenust nii täiskasvanutele kui lastele. Maniküür, pediküür ja näohooldus. Juuste lõikus naistele ja meestele. Habemeajamine.
          </p>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="" />
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
                  <td>Juukselõikus meestele</td>
                  <td>25€</td>
                </tr>
                <tr>
                  <td>Juukselõikus naistele</td>
                  <td>30€</td>
                </tr>
                <tr>
                  <td>Maniküür</td>
                  <td>18€</td>
                </tr>
                <tr>
                  <td>Pediküür</td>
                  <td>25€</td>
                </tr>

              </tbody>
            </table>
            <Link to="/hinnakiri">Täielik hinnakiri</Link>
          </div>


        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Broneeri aeg</h2>
          </header>
          <p>
            Aja broneerimiseks helista numbril 55638016 või saada sõnum allpool. Iluteenus meie salongis. Valgamaa piires teeme koduvisiite.
          </p>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <header className="major">
          <h2>Saada kiri</h2>
        </header>
        <form method="post" data-netlify="true" name="kontakt" >

          <div className="row gtr-uniform">
            <input type="hidden" name="kontakt" value="kontakt" />


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
