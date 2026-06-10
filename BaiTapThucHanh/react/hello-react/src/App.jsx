import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LifecycleDemo from '../../CCC_Frontend/lab_practical/session_04_react_basics/solution/TIER_1_react_flow/LifecycleDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Vũ Mai Anh</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
          <p>Hôm nay là ngày đẹp trời</p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section> */}
      <LifecycleDemo />
      <div className="card">         {/* class → className */}
          <img src="avatar.jpg" alt="Avatar" />  {/* Đóng thẻ */}
          <h2>Nguyễn Văn Minh</h2>
          <p>Sinh viên năm 3</p>
          <label htmlFor="email">Email:</label>   {/* for → htmlFor */}
          <input type="email" id="email" />       {/* Đóng thẻ */}
      </div>
      <div className='profile'>
        <h1>Hồ sơ cá nhân</h1>
        <img src="photo.jpg" alt="Ảnh đại diện" />
        <table>
          <thead></thead>
          <tbody>
            <tr>
                <td>Họ tên:</td>
                <td>Anh</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>abc@example.com</td>
              </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <div className='product'>
        <h2>iPhone 15</h2>
        <p className='price'>25.000.000đ</p>
        <ul>
          <li>Màn hình: 6.1 inch</li>
          <li>Camera: 48MP</li>
          <li>Pin: 3349 mAh</li>
        </ul>
        <button>Mua ngay</button>
      </div>
    </>
    
  )
}

export default App
// 0.1
//2 export default App vì muốn tối ưu hiệu suất, khi vào 1 trang web chỉ tải những cái cơ bản nếu người dùng không làm j thay vì tải hết mọi thứ
//3 bị lỗi khi xóa export default
//0.2

