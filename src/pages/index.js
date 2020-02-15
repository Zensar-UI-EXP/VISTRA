import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
} from "../index"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} {...appData.header} />
      <div className="home">
        <BannerCarousel {...appData.banner} />
        <InfoLayout {...appData.infoLayout}/>
        <TrendingCardView {...appData.trendcard}/>
        <ConnectLayout {...appData.connectlayout}/>
        <QuestionLayout {...appData.questionLayout}/>
      </div>
    </Layout>
  )
}

export default IndexPage
