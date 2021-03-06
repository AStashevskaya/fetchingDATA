import React,  { useState, useEffect } from 'react';

const App2 = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData () {
            try {
                const result = await fetch('https://disease.sh/v3/covid-19/countries')
                const json =  await result.json();
                console.log(result, json)
                setData([...json]);
                setLoading(!loading)
            } catch(err) {
                console.log(err)
            }
        }

        if(!loading) fetchData()
    }, [loading, data])

    return (
        <div>
        {data.loading ? <h1> loading </h1> : <div>{ data.map((el, idx) => {
      return (
        <div key={idx.toString()}>
          <h4>
            {el.country}
          </h4>
        </div>
      )
      })}</div>}
    </div>
    )
}

export default App2;