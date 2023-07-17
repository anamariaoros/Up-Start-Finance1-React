import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Up Start Finance1</title>
        <meta property="og:title" content="Page - Up Start Finance1" />
      </Helmet>
    </div>
  )
}

export default Page
