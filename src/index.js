import React from "react"
import ReactDOM from "react-dom"

// functin based component
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  )

  return <div>Latitude: </div>
}
// Class-based component

ReactDOM.render(<App />, document.querySelector("#root"))
