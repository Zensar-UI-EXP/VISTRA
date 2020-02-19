import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  Layout,
  SEO,
  Header,
  BannerCarousel,
  TrendingCardView,
  ConnectLayout,
  QuestionLayout,
  InfoLayout,
  appData,
  LongCard,
  ListFooter,
  SpotLight
} from "../index";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
//<Header siteTitle={data.site.siteMetadata.title} {...appData.header} />
// <BannerCarousel {...appData.banner} />
// <SpotLight {...appData.banner} />
  return (
    <Layout>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} {...appData.header} />
      <div className="home">
        <SpotLight {...appData.banner} />
        <InfoLayout {...appData.infoLayout} />
        <TrendingCardView {...appData.trendcard} />
        <LongCard {...appData.longCard} />
        <ConnectLayout {...appData.connectlayout} />
        <QuestionLayout {...appData.questionLayout} />
        <ListFooter {...appData.listFooter} />
      </div>
    </Layout>
  );
};

export default IndexPage;
