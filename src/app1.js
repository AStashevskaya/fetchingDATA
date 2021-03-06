import React,  { useState, useEffect } from 'react';
import {useSelector, useDispatch, connect} from 'react-redux';
import { fetchData } from './redux/actionData';

const App1 = () => {
    // const [loading, setLoading] = useState(true)
    // const [data, setData] = useState([])
    // const url = 'https://disease.sh/v3/covid-19/countries'

  const state = useSelector(state => state);
  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  console.log(state)
  useEffect(() => { 
    dispatch(fetchData())
    // console.log(data)
  }, [dispatch])

  console.log(loading, data);


    const renderData = () => {
        console.log(data)
      const result = data.map((el, idx) => {
      return (
        <div key={idx.toString()}>
          <h4>
            {el.country}
          </h4>
        </div>
      )
      })
      return result
      }

      return (
          <div>
              {loading ? <h1> loading </h1> : <div>{renderData()}</div>}
                 {/* {data.loading ? <h1> loading </h1> : <div>{renderData()}</div>} */}
          </div>
      )
}

const mapStateToProps = state => {
    return {
      data: state.data
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchData: () => dispatch(fetchData)
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App1);
  // export default App1;