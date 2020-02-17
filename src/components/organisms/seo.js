/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import "../../assets/spotlight-slider";

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    >
      {" "}
      <link
        rel="stylesheet"
        media="all"
        href="https://www.vistra.com/sites/default/files/css/css_M6pc-GYw22dDiRaui8SbPRLCvV-A2flRjLvgnW9T1rE.css?q585kf"
      />
      <link
        rel="stylesheet"
        media="screen and (min-width: 768px)"
        href="https://www.vistra.com/sites/default/files/css/css_l2-dzx3XkWBMvxvlgRwHhoL4wXOYUPOb-sY9gJ7LOqo.css?q585kf"
      />
      <link
        rel="stylesheet"
        media="screen and (min-width: 992px)"
        href="https://www.vistra.com/sites/default/files/css/css_2X7_ORve7IoWSPCAtcaJwYZ_ax9rZVPMMeo49qtDjBs.css?q585kf"
      />
      <link
        rel="stylesheet"
        media="screen and (min-width: 1200px)"
        href="https://www.vistra.com/sites/default/files/css/css_HC8WLg5nzJaOHnLU5LcQ2aOfWmQrpm_4lu2I3nvgn70.css?q585kf"
      />
    </Helmet>
  );
}
// <script
// src="https://code.jquery.com/jquery-3.4.1.min.js"
// integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
// crossorigin="anonymous"
// ></script>
// <script src="https://www.vistra.com/themes/custom/vistra/dist/js/app.min.js?q585kf"></script>
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
