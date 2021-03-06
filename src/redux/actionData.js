import axios from 'axios';

const fetchDataRequest = () => {
    return {
        type: 'FETCH_DATA_REQUEST'
    }
}

const fetchDataSuccess = (data) => {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload: data
    }
}

const fetchDataFailure = (error) => {
    return {
        type: 'FETCH_DATA_FAILURE',
        payload: error,
    }
}

const fetchData = () =>  (dispatch) => {
        dispatch(fetchDataRequest)
        axios.get('https://disease.sh/v3/covid-19/countries')
        .then(
            response => {
                console.log(response)
                const data = response.data
                dispatch(fetchDataSuccess(data))
            }
        )
        .catch(
           error => {
               const {messege} = error;
               dispatch(fetchDataFailure(messege))
           }
        )
    }

export {fetchDataFailure, fetchDataSuccess, fetchDataRequest, fetchData}