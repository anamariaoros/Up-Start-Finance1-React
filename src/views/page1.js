import React from 'react'

import { Helmet } from 'react-helmet'

import './page1.css'

const Page1 = (props) => {
  return (
    <div className="page1-container">
      <Helmet>
        <title>Page1 - Up Start Finance1</title>
        <meta property="og:title" content="Page1 - Up Start Finance1" />
      </Helmet>
    </div>
  )
}

export default Page1
