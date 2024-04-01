import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

/* component */
let TitleBox = styled.div`
  padding-top: 50px;
  margin-bottom: 40px;
`
let TextBox = styled.p`
  margin-bottom: ${props=>props.mb};
  font-weight: ${props=>props.fw};
`
let DefaultBtn = styled.button`
  border: none;
  width: 160px; height: 40px;
  border-radius: 4px;
  color: ${props=>props.bg === 'seagreen' ? 'white' : 'black'};
  background: ${props=>props.bg};
`
const Sub2 = () => {
  return (
    <div className="container author">
        <TitleBox>
          <h2>작가 소개</h2>
          <TextBox mb="15px" fw="600">
            시원상
          </TextBox>
          <TextBox mb="10px" fw="400">
            시원상 작가의 작품은 자연속에서 머무는 감정 그대로를 표현하고 있다.
          </TextBox>
        </TitleBox>
        <DefaultBtn bg="seagreen">지원하기</DefaultBtn>
        <Outlet/>
    </div>
  )
}

export default Sub2