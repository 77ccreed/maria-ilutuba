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
              title={data.site.siteMetadata.title}
            >
              <html lang="et" />
              <meta name="google-site-verification" content="mnmzNy-vFEsbgOIFBmDvNuyZ8M8sh5CZPG-rh3VLyeE" />
              <meta name="description" content="Maniküür, pediküür ja näo ning käte hooldus parafiiniga. Depilatsioon. Ripsmete värvimine ning kulmude piiramine ja värvimine. Pakume iluteenus Rõngus ja teostame koduvisiite Tartu- ja Valgamaa piires." />
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
