import React from 'react'
import PropTypes from 'prop-types'
import './Section.css'

class Section extends React.Component {
  render () {
    let CustomTag = 'section'

    if (this.props.element !== undefined) {
      CustomTag = `${this.props.element}`
    }

    return <div className='l-grid c-section'>
      <CustomTag className='l-grid l-grid-item-span-full'>
        {this.props.children}
      </CustomTag>
    </div>
  }
}

Section.propTypes = {
  element: PropTypes.string,
  children: PropTypes.string
}

export default Section
