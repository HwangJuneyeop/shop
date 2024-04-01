import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import AuthorInfo from './AuthorInfo'
import WritersCall from './WritersCall'

/* component */
let TitleBox = styled.div`
  padding-top: 50px;
  margin-bottom: 40px;
`
let TextBox = styled.p`
  margin-bottom: ${props=>props.mb};
  font-weight: ${props=>props.fw};
`
const Sub2 = ({pic}) => {
  return (
    <div className="container author">
      <TitleBox>
        <h2>작가별</h2>
        <TextBox mb="30px" fw="400">
          우리의 일상에 색을 더하는 것은 예술의 힘입니다. <br />[스테이 마인드]에서는 이 힘을 믿으며, 우리의 삶 속에 예술을 더 가까이 할 수 있도록 다양한 작가들의 그림을 렌탈해 드립니다. 오늘 소개할 작가들은 단순한 미의 전달자가 아닌, 각자의 독특한 세계관과 이야기를 가진 예술의 창조자들입니다.
        </TextBox>
      </TitleBox>

      <Routes>
        <Route path='/' element={<AuthorInfo pic={pic}/>}></Route>
        <Route path='/sub2-1' element={<AuthorInfo pic={pic}/>}></Route>
        <Route path='/sub2-2' element={<WritersCall pic={pic}/>}></Route>
      </Routes>
    </div>
  )
}

export default Sub2