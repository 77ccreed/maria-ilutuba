import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title="Maniküür, pediküür ja muud iluteenused - FIE Maria Arak"
            >
              <html lang="et" />
              <meta name="google-site-verification" content="mnmzNy-vFEsbgOIFBmDvNuyZ8M8sh5CZPG-rh3VLyeE" />
              <meta name="description" content="FIE Maria Arak.  Ilusalong Rõngus. Teostame koduvisiite. Telli iluteenus Tartu- või Valgamaa piires endale koju. Maniküür, pediküür ja näohooldus parafiiniga." />

              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "http://schema.org",
                  "@type": "LocalBusiness",
                  "openingHours": "Mo,Tu,We,Th,Fr, 09:00-17:00",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "Estonia",
                    "addressLocality": "Rõngu",
                    "streetAddress": "Valga mnt. 9",
                    "postalCode": "61001"
                  },
                  "description": "Iluteenus - maniküür, pediküür ja näohooldus.",
                  "name": "Maria Arak FIE",
                  "telephone": "+372 5563 8016",
                  "priceRange": "€€",
                  "areaServed": "Valga vald, Tartu vald",
                  "founder": "Maria Arak",
                  "url": "https://mariailutuba.ee/",
                  "sameAs": ["https://www.facebook.com/mariailutuba"],
                  "image": [
                    "https://mariailutuba.ee/static/pic01-e728cd3e575ab0cdb887c62a4006723a.jpg",
                    "https://mariailutuba.ee/static/pic02-8dfa0c41640f28a8d1ad5afa4b79855d.jpg"
                  ]
                })}
              </script>
            </Helmet>
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              {children}
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
