import React from 'react'
import { Link } from 'react-router-dom'
const Pagenation = (props) => {
    let noOfButton=Math.ceil(props.allProducts.length/props.itemPerPage)
    let buttonArr=[...Array(noOfButton+1).keys()].slice(1)
    console.log(buttonArr)
     
    const handleDecrement=()=>{
        if(props.current>1){
            props.setcurrent(props.current-1)
        }
    }
    const handleIncrement=()=>{
        if(props.current<props.allProducts.length+1){
            props.setcurrent(props.current+1)
        }
    }
  return (
    <div>
    <nav aria-label="Page navigation example">
  <ul className="pagination flex-wrap">
    <li onClick={handleDecrement} className="page-item"><a className="page-link" to="#">Previous</a></li>
    {buttonArr.map((ele)=>{
        return  <li key={ele} onClick={()=>props.setcurrent(ele)} className={ele===props.current?"page-item active":"page-item"}><Link className="page-link" to="#">{ele}</Link></li>
    })}
    <li onClick={handleIncrement}className='page-item'><Link className='page-link'to="#">Next</Link></li>
  
  </ul>
</nav>
    </div>
  )
}

export default Pagenation
