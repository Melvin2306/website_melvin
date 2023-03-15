import React from 'react'
import PropTypes from 'prop-types'

function AdminMain(props) {
  return (
    <div className="flex flex-col h-full ml-64 p-6">
        {props.children}
    </div>
  )
}

AdminMain.propTypes = {}

export default AdminMain
