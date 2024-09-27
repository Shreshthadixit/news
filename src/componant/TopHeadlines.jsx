import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const TopHeadlines = () => {
    const [news, setnews] = useState([]);
    let getData = async()=>{
    let res= await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=0b1bd395f627416fa8772c10a70ff582`)
     console.log(res.data.articles)
     setnews(res.data.articles)
  
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
      {news.map((ele)=>{
        return <h6 key={ele.url}className='mb-3'><Link  to={ele.url}>{ele.title}</Link></h6>
      })}
    </div>
  )
}

export default TopHeadlines
