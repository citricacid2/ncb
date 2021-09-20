import { Doughnut } from 'react-chartjs-2'

import { useEffect, useState } from "react"

export default function Vote() {
  const [data, setData] = useState([
    {name: 'Ayush', votes: 14},
    {name: 'Paul', votes: 9},
  ])

  return (
    <div className='m-6'>
      <div className="columns">
        <div className="column is-half is-offset-one-quarter is-full-mobile">
          <Doughnut data={
            {
              labels: data.map(item => item.name),
              datasets: [{
                data: data.map(item => item.votes),
              }]
            }
          }/>
        </div>
      </div>
      {data.map((item) => 
        (
          <div className="columns mt-3 is-mobile is-multiline is-vcentered" key={item.name}>
            <div className="column is-full-mobile is-2">
              <strong>Name: </strong>
              {item.name}
            </div>
            <div className="column is-2 is-half-mobile">
              <strong>Votes: </strong>
              {item.votes}
              {data.total}
            </div>
            <div className="column">
              <progress className="progress is-danger my-auto" value={item.votes} max={data.map(vote => vote.votes).reduce((p, n) => p + n)}>
              </progress>
            </div>
            <div className="column is-narrow">
              <button className="button is-dark">
                Vote
              </button>
            </div>
          </div>
        )
      )}

    </div>
  )
}