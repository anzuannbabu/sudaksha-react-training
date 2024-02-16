import {useState,useEffect} from 'react'


function Fetcher(url) {
  const [data,setData] = useState([])

  useEffect(() => {
    //now call the fetch api
    fetch(url)
    .then(res => res.json())
    .then((res) => {
        setData(res)
    }).catch(err => {
        //error occured
        console.log(err)
    })
  }, [])
  return {data}
}

export default Fetcher