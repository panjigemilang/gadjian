import React from "react"
import "../dist/scss/loading.scss"

export default function Loading() {
  return (
    <div className="loading-wrapper">
      <i className="fas fa-circle-notch fa-spin"></i>
    </div>
  )
}
