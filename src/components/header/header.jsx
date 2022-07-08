import React from "react";
import {history} from '../../App'

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="back">
          <button onClick={() => {
            history.goBack();
          }}>Quay lại</button>
        </div>
        <div className="nav-left">WATCH ONLINE</div>
        <div className="search-box">
          <input type="search" placeholder="Nhập tên phim" />
        </div>
        <div className="nav-right">
          <span>Tạo ngay tài khoản</span>
          <button>Đăng nhập</button>
        </div>
      </div>
    </header>
  );
}
