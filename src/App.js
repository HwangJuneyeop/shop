import React, {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/reset.css';
import './css/fonts.css';
import './App.css';

import data from './data';
import Sub1 from './pages/Sub1';
import Sub3 from './pages/Sub3';
import Sub2 from './pages/Sub2';
import Homepage from './pages/Homepage';
import Page404 from './pages/Page404';
import AuthorInfo from './pages/AuthorInfo';
import WritersCall from './pages/WritersCall';
function App() {
  //useNavigate() - 함수이므로 변수에 담아서 선언을 일반적으로 함
  let navigate = useNavigate();
  let [pic] = useState(data)
  
  let [showButton, setShowButton] = useState(true)
  //sub/:id 경로가 클릭되면 첫번째 페이지를 보여주는 navigate 함수 선언
  const goToSub1 = (id) => {
    navigate(`/sub1/${id}`)
  }

  //상품더보기 버튼을 클릭하면 실행되는 함수
  const btnDataClick = () => {

  }
  return (
    <div className="wrap">
      <div className="nav-wrap">
        <Navbar bg="dark" variant="dark">
          <div className="gnb-area">
            <Navbar.Brand href="/" className="logo">
              STAY MIND
            </Navbar.Brand>
            <Nav className="me-auto gnb">
              <Nav.Link onClick={()=>goToSub1(0)}>작품보기</Nav.Link>

              <NavDropdown title="작가별" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => navigate("/sub2/sub2-1")}
                  className="nav-submenu"
                >
                  작가소개
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/sub2/sub2-2")}
                  className="nav-submenu"
                >
                  작가 공모
                </NavDropdown.Item>
              </NavDropdown>
             
             <Nav.Link href="/sub3">이벤트</Nav.Link>
            </Nav>
          </div>
        </Navbar>
      </div>
      {/* //navbar */}

      <Routes>
        <Route path="/" element={<Homepage pic={pic}/>}/>
        <Route path="/sub1/:id" element={<Sub1 pic={pic}/>}></Route>

        <Route path="/sub2" element={<Sub2/>}>
          <Route path="sub2-1" element={<AuthorInfo pic={pic}/>}></Route>
          <Route path="sub2-2" element={<WritersCall/>}></Route>
        </Route>
        <Route path="/sub3" element={<Sub3/>}></Route>
        <Route path="*" element={<Page404/>}></Route>
      </Routes>

      {/* 상품더보기 버튼 */}
      {
        //버튼이 활성화되었을 때만 클릭 가능하도록 설정
        showButton && (
          <button className="btn-data" onClick={btnDataClick} disabled={!showButton}>상품 더보기 </button> 
        )
      }
    </div>
  );
}

export default App;
