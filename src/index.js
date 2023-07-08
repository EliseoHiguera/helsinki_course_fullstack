import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  

  const Header = (props) => {
    return (
      <div>
        <h1>Header course : {course}</h1>
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        <h1>{course}</h1>
      <p>
        Part {part1 + exercises1}
      </p>
      <p>
        Part {part2 + exercises2}
      </p>
      <p>
        Part {part3 + exercises3}
      </p>
      </div>
    )
  }
  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
  }


  return (
    <div>
      <Header/>
      <Content/>
      <Total />
    </div>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))