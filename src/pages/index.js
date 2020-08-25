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
            <h2>Who I am</h2>
          </header>
          <p>
            Aliquam ante ac id. Adipiscing interdum lorem praesent fusce
            pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed
            adipiscing eu amet interdum lorem blandit vis ac commodo aliquet
            integer vulputate phasellus lorem ipsum dolor lorem magna consequat
            sed etiam adipiscing interdum.
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
                  <th>Kirjeldus</th>
                  <th>Hind</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Laste maniküür</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>5€</td>
                </tr>
                <tr>
                  <td>Geellaki maniküür</td>
                  <td>Vis ac commodo adipiscing arcu aliquet.</td>
                  <td>18€</td>
                </tr>
                <tr>
                  <td>Geellaki eemaldamine ja hooldus</td>
                  <td> Morbi faucibus arcu accumsan lorem.</td>
                  <td>10€</td>
                </tr>
                <tr>
                  <td>Maniküür naistele, meestele</td>
                  <td>Vitae integer tempus condimentum.</td>
                  <td>10€</td>
                </tr>
                <tr>
                  <td>Maniküür koos parafiini hooldusega</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>18€</td>
                </tr>

                <tr>
                  <td>Parafiini hooldus kätele</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>5€</td>
                </tr>
                <tr>
                  <td>Pärlite kasutamine (1 pärl)</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>0,2€</td>
                </tr>
                <tr>
                  <td>Kleepsud</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>0,2€</td>
                </tr>
                <tr>
                  <td>Poleerimine</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>2€</td>
                </tr>
                <tr>
                  <td>Ripsmete värvimine</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>5€</td>
                </tr>
                <tr>
                  <td>Külmude piiramine</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>3-5€</td>
                </tr>
                <tr>
                  <td>Kulmude värvimine</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>3-5€</td>
                </tr>
                <tr>
                  <td>Pediküür</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>18€</td>
                </tr>
                <tr>
                  <td>Pediküür lakiga</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>19€</td>
                </tr>
                <tr>
                  <td>Pediküür geellakiga</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>23€</td>
                </tr>
                <tr>
                  <td>Pediküür geellaki ja kaunistustega</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>25€</td>
                </tr>
                <tr>
                  <td>Vuntside depileerimine</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>1,5€</td>
                </tr>
                <tr>
                  <td>Kaenla depileerimine</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>5-8€</td>
                </tr>
                <tr>
                  <td>Meeste pediküür</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>20€</td>
                </tr>
              </tbody>
            </table>
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
            <h2>One more thing</h2>
          </header>
          <p>
            Aliquam ante ac id. Adipiscing interdum lorem praesent fusce
            pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed
            adipiscing eu amet interdum lorem blandit vis ac commodo aliquet
            integer vulputate phasellus lorem ipsum dolor lorem magna consequat
            sed etiam adipiscing interdum.
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
          <h2>Get in touch</h2>
        </header>
        <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="4"
              />
            </div>
            <div className="col-12">
              <ul className="actions special">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="primary"
                  />
                </li>
              </ul>
            </div>
          </div>
        </form>
        <Link to="/Elements"> Check out Elements page</Link>
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
