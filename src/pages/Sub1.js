import React from 'react'
import {useParams} from 'react-router-dom'
const Sub1 = ({pic}) => {
  let { id } =useParams(); //window.location에 있는 주소값에서 유저가 선언한 파라메터만 추출하는 함수(예: /sub1/:id)
  return (
    <div className='container pic'>
      <div className="row">
        <h2>STAY MIND <span>스테이 마인드가 제안하는 작품을 감상하고 렌탈해보세요</span></h2>
        <div className="col-md-6 img">
          <img src={`${process.env.PUBLIC_URL}/img/img${parseInt(id) + 1}.jpg`} alt={pic[id].title}/> 
        </div>
        <div className="col-md-6 pic-info">
          <p className="pt-4 title">{pic[id].title}</p>
          <p className="author">{pic[id].author}</p>
          <p className="content">{pic[id].content}</p>
          <p className="price">{pic[id].price}</p>
          <button className="btn btn-danger">렌탈하기</button>
        </div>
      </div>
    </div>
  )
}

export default Sub1