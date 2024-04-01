import React from 'react'
import styles from '../css/page404.module.css'
const Page404 = () => {
  return (
    <div className={styles.nopage}>
        <p><strong>404</strong></p>
        <p>페이지 경로가 잘못 되었거나, 없는 페이지입니다.</p>
    </div>
  )
}

export default Page404