import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TopHeadlines from '../componant/TopHeadlines';
import Pagenation from '../componant/Pagenation';
import NewsContext from '../context/NewsContext';
const Home = () => {
  let ctx=useContext(NewsContext)
  console.log(ctx)
  
    const [allProducts,setallProducts]=useState([]);
    console.log(allProducts)
    let getData=async()=>{
    let items=await fetch(` https://newsapi.org/v2/everything?q=${ctx.search}&apiKey=0b1bd395f627416fa8772c10a70ff582`)
    let data=await items.json()
    console.log(data.articles)
    setallProducts(data.articles)
    }
    useEffect(()=>{
        getData();
      },[ctx.search])
      //pagenation code
      const [current, setcurrent] = useState(1);
       let itemPerPage=10;
       let lastIndex=itemPerPage*current
      let firstIndex=lastIndex-itemPerPage
      let slicedItem=allProducts.slice(firstIndex,lastIndex)
  return (
    <div className="row">
     <div className='col-9 leftside'>
    <div className='row mt-5 d-flex justify-content-center gap-3'>


    {
      slicedItem.map((ele,index)=>{
        return  <>
        { ele.urlToImage &&    <div key={index}className="card" style={{width: '18rem'}}>
           <img src={ele.urlToImage} style={{height:'150'}} className="card-img-top" alt="" />
           <div className="card-body">
             <h5 style={{height:'150px'}} className="card-title">Title:{ele.title}</h5>
             <p style={{height:'150px'}} className="card-text">Publish:{ele.publishedAt}</p>
             <Link to={ele.url} className="btn btn-primary">view news</Link>
             {/* <button onClick={()=>handleAdd(ele)}className='btn btn-success  ms-1'>Add to cart</button> */}
           </div>
           </div>
        }
        
        
        </>
      })
    }
</div>
<Pagenation allProducts={allProducts} itemPerPage={itemPerPage} current={current} setcurrent={setcurrent}/>
</div>

<div className='col-3 mt-5 rightSide'>
  <h3 className='text-center bg-warning  headLineTitle'>TopHeadlines</h3>
<div className='topHeadlineContainer'>
<TopHeadlines/>
</div>
</div>
    </div>

  )
}


export default Home
