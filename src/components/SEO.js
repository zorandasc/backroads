import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)
  const { siteDesc, siteTitle } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc}></meta>

      <script>{`
        window.callbellSettings = {
          token: "3nck19ywCuutTYnHhdAkkfH5"
      };
    `}</script>
      <script>{`
        (function(){var w=window;var ic=w.callbell;if(typeof ic==="function"){ic('reattach_activator');ic('update',callbellSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Callbell=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://dash.callbell.eu/include/'+window.callbellSettings.token+'.js';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload', l);}else{w.addEventListener('load', l, false);}}})()
      `}</script>
    </Helmet>
  )
}

export default SEO
