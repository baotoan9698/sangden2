const features = [
  ["01", "Tìm kiếm tức thì", "Khám phá căn hộ và biệt thự phù hợp chỉ trong vài phút."],
  ["02", "Tin đăng xác thực", "100% bất động sản được kiểm duyệt và cập nhật mỗi ngày."],
  ["03", "Phân tích thông minh", "Gợi ý cá nhân hóa theo nhu cầu sống và tài chính của bạn."],
  ["04", "Cập nhật thời gian thực", "Nhận tin mới và biến động giá ngay khi thị trường thay đổi."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Điều hướng chính">
        <a className="mark" href="#home" aria-label="City Arcade trang chủ">CA</a>
        <div className="navlinks">
          <a href="#home">Trang chủ</a><a href="#property">Bất động sản</a>
          <a href="#why">Tại sao chúng tôi</a><a href="#contact">Liên hệ</a>
        </div>
        <a className="pill" href="#property">Khám phá <span>↗</span></a>
      </nav>

      <section className="hero shell" id="home">
        <div className="eyebrow">Nền tảng bất động sản thế hệ mới</div>
        <h1>CITY <span>ARCADE</span></h1>
        <div className="hero-stats">
          <div><strong>10K</strong><small>Khách hàng hài lòng</small></div>
          <div><strong>5K</strong><small>Bất động sản</small></div>
          <div><strong>15+</strong><small>Thành phố</small></div>
        </div>
        <div className="hero-image">
          <img src="/hero-house.jpg" alt="Ngôi nhà kính hiện đại bên bờ sông" />
          <div className="hero-note">Tương lai của không gian sống<br />cùng City Arcade</div>
          <a className="round-arrow" href="#property" aria-label="Xem bất động sản">↘</a>
        </div>
      </section>

      <section className="manifesto shell">
        <p>MỘT NỀN TẢNG BẤT ĐỘNG SẢN HIỆN ĐẠI,</p>
        <p>CITY ARCADE KẾT HỢP</p>
        <p className="muted">CÔNG NGHỆ TIÊN TIẾN VÀ</p>
        <p className="muted">AM HIỂU ĐỊA PHƯƠNG</p>
      </section>

      <section className="feature-grid shell" id="property">
        <div className="feature-list">
          {features.map(([number, title, copy], index) => (
            <article className={`feature ${index === 1 ? "active" : ""}`} key={title}>
              <span className="feature-number">{number}</span>
              <div><h2>{title}</h2><p>{copy}</p></div>
              <span className="arrow">↗</span>
            </article>
          ))}
        </div>
        <div className="feature-photo"><img src="/feature-house.jpg" alt="Biệt thự kính hiện đại giữa núi rừng" /><span>Kiến trúc nổi bật · 2026</span></div>
      </section>

      <section className="why shell" id="why">
        <div className="why-photo"><img src="/hero-house.jpg" alt="Không gian sống City Arcade" /></div>
        <div className="why-copy">
          <span className="section-label">Vì sao chọn chúng tôi?</span>
          <h2>NHÀ KHÔNG CHỈ LÀ<br />MỘT ĐỊA CHỈ.</h2>
          <p>Chúng tôi kết nối con người với những không gian được tuyển chọn kỹ lưỡng — nơi thẩm mỹ, tiện nghi và giá trị dài hạn cùng tồn tại.</p>
          <a className="pill dark" href="#contact">Tìm hiểu thêm <span>↗</span></a>
        </div>
      </section>

      <footer className="shell" id="contact"><div className="footer-mark">CITY ARCADE</div><div><a href="mailto:hello@cityarcade.vn">hello@cityarcade.vn</a><br />TP. Hồ Chí Minh, Việt Nam</div><div>© 2026 City Arcade</div></footer>
    </main>
  );
}
