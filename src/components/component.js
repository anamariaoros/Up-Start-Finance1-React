import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <div className="component-pasted-image">
        <img
          alt={props.pastedImage_alt2}
          src={props.pastedImage_src2}
          className="component-pasted-image1"
        />
        <img
          alt={props.pastedImage_alt3}
          src={props.pastedImage_src3}
          className="component-pasted-image2"
        />
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ffea7310-e3fa-47a7-87eb-176b27d552ce/ba666333-feb4-4b3b-95b0-ddfc03f26db3?org_if_sml=16514418',
  pastedImage_alt2: 'pastedImage',
  pastedImage_alt1: 'pastedImage',
  pastedImage_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ffea7310-e3fa-47a7-87eb-176b27d552ce/10fba2f7-f1dd-4a46-ba12-d4a326668c00?org_if_sml=16514418',
  pastedImage_src2: '/external/pastedimage-di1.svg',
  pastedImage_src3: '/external/pastedimage-0cip.svg',
  pastedImage_alt3: 'pastedImage',
  pastedImage_alt: 'pastedImage',
}

AppComponent.propTypes = {
  pastedImage_src: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  pastedImage_src3: PropTypes.string,
  pastedImage_alt3: PropTypes.string,
  pastedImage_alt: PropTypes.string,
}

export default AppComponent
