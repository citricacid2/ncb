import Chart from "chart.js/auto"
import { useEffect, useState } from "react"

export default function Vote() {
  const [data, setData] = useState({
    votes: [
      {name: 'Ayush', votes: 14},
      {name: 'Paul', votes: 9},
    ]
  })
  return (
    <div className='m-6'>
      {data.votes.map((item) => 
        (
          <div className="columns mt-3" key={item.name}>
            <div className="column is-one-fifth is-half-mobile">
              <strong>Name: </strong>
              {item.name}
            </div>
            <div className="column is-one-fifth is-half-mobile">
              <strong>Votes: </strong>
              {item.votes}
              {data.total}
            </div>
            <div className="column is-full-mobile">
              <progress className="progress is-danger my-auto" value={item.votes} max={data.votes.map(vote => vote.votes).reduce((p, n) => p + n)}>
              </progress>
            </div>
          </div>
        )
      )}

    </div>
  )
}