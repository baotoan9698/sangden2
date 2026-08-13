const solutions = [
  ["1", "Một định danh chuẩn", "Doanh nghiệp có hồ sơ được xác thực trong hệ thống. Đối tác nước ngoài hỏi ‘công ty này là ai’ thì có câu trả lời kiểm chứng được — thay vì một bộ giấy tờ scan gửi qua email."],
  ["2", "Chứng từ số hóa theo chuẩn", "Chứng chỉ lưu kho, hợp đồng, đơn hàng, voucher dịch vụ — được chuẩn hóa để bên cấp vốn đọc và ra quyết định ngay. Đây là chỗ hàng trong kho biến thành thứ đi vay được."],
  ["3", "Một vai trong chuỗi giá trị", "Doanh nghiệp không đi một mình. Người bán, kho vận, logistics, ngân hàng, người mua nước ngoài — mỗi bên một vai trong cùng một chuỗi có người điều phối và cơ quan giám sát."],
];

const steps = [
  ["01", "Buổi định hướng", "Miễn phí · 2,5 giờ", "Hiểu doanh nghiệp đang nghẽn ở đâu, cơ chế mới cho phép làm gì và hoàn tất đăng ký định danh."],
  ["02", "Khóa chuẩn hóa", "Miễn phí · 4 buổi · Chọn lọc", "Xây bản đồ chuỗi ngành, số hóa hồ sơ thật, hoàn thiện điều kiện thử nghiệm và xác lập vai trò hợp tác."],
  ["03", "Vào chuỗi — làm thật", "Dự án thật · Q1/2027", "Lập pháp nhân, ký hợp đồng khung và chuẩn bị giao dịch thật đầu tiên cùng các bên trong chuỗi."],
];

const openWindowItems = [
  ["01", "Nghị quyết 68", "Xác lập kinh tế tư nhân là động lực chủ lực, mở đường cho các cơ chế hỗ trợ thực chất."],
  ["02", "Nghị quyết 222 VIFC", "Không gian pháp lý thử nghiệm tại HCM và Đà Nẵng cho sản phẩm tài chính thế hệ mới."],
  ["03", "QĐ04 07/2026", "Đà Nẵng phụ trách tài sản mã hóa, HCM phụ trách tài chính hàng hóa và thị trường vốn."],
  ["04", "CEPA Việt Nam – UAE", "Xóa 99% dòng thuế, mở hành lang trực tiếp vào Trung Đông và châu Phi."],
  ["05", "Luật Giao dịch hàng hóa phái sinh ", "Lần đầu tiên Việt Nam có khung pháp lý cho thị trường hàng hóa tài chính."],
  ["06", "Nghị quyết 05 & Nghị quyết 259", "Hoàn thiện nền tảng chính sách cho giai đoạn chuyển đổi."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Điều hướng chính">
        <a className="brand" href="#home"><span>SÁNG</span> ĐÈN 2026</a>
        <div className="navlinks"><a href="#problem">Bài toán</a><a href="#solution">Giải pháp</a><a href="#journey">Hành trình</a><a href="#fit">Đối tượng</a></div>
        <a className="pill" href="#register">Đăng ký <span>↗</span></a>
      </nav>

      <section className="hero shell" id="home">
        <h1>VỐN MỚI <span>THỊ TRƯỜNG MỚI</span></h1>
        <p className="hero-copy">Chương trình giúp doanh nghiệp có hàng thật và dịch vụ thật mở được vốn ngắn hạn, tiếp cận thị trường — bằng hạ tầng on-chain trong khuôn khổ pháp lý Việt Nam.</p>
        <div className="hero-visual">
          <img src="/feature-house.jpg" alt="Kiến trúc hiện đại đại diện cho hạ tầng kinh tế mới" />
          <div className="stats">
            <div><strong>96%</strong><span>Doanh nghiệp Việt Nam<br />là khu vực tư nhân</span></div>
            <div><strong>~70 TỶ</strong><span>USD xuất khẩu hàng hóa mỗi năm — phần lớn vốn bị chôn trong kho 3–6 tháng</span></div>
            <div><strong>50</strong><span>Chỗ trong khóa đầu tiên<br />Đóng đơn 31/10/2026</span></div>
          </div>
        </div>
      </section>

      <section className="statement shell" id="problem">
        <h2>DOANH NGHIỆP VIỆT KHÔNG THIẾU NĂNG LỰC.<em>HỌ ĐANG BỊ KHÓA.</em></h2>
        <p>Khu vực tư nhân đóng góp 78,2% tổng vốn đăng ký và 74,6% tổng vốn đầu tư. Năng lực có thật — nhưng 4 nút thắt đang giữ họ lại.</p>
      </section>

      <section className="bottleneck-grid shell">
        <div className="bottleneck-list">
          <article><span>01</span><div><h3>Nghẽn vốn</h3><p>Hàng trong kho, đơn hàng trên tay — ngân hàng vẫn hỏi sổ đỏ. Hàng tồn kho thật chưa được tính là tài sản đảm bảo theo chuẩn truyền thống.</p></div><b>↗</b></article>
          <article><span>02</span><div><h3>Khó ra thế giới</h3><p>Muốn xuất khẩu nhưng thiếu toàn bộ hệ sinh thái: chuẩn kiểm chứng, đối tác pháp lý, kênh phân phối quốc tế.</p></div><b>↗</b></article>
          <article><span>03</span><div><h3>Thiếu chuẩn để được tin</h3><p>Đối tác nước ngoài không có cách thẩm định nhanh một SME Việt. Không định danh chuẩn, không minh bạch → không được tin.</p></div><b>↗</b></article>
          <article><span>04</span><div><h3>Xuyên biên giới chậm và đắt</h3><p>Thanh toán quốc tế qua 3–5 trung gian: phí 3–5%, thời gian 30–45 ngày, rủi ro tỷ giá không kiểm soát được.</p></div><b>↗</b></article>
        </div>
        <div className="bottleneck-photo"><img src="/feature-house.jpg" alt="Hạ tầng hiện đại cho doanh nghiệp Việt" /></div>
      </section>

      <aside className="case-quote shell">
        <div className="quote-meta"><span>Ví dụ điển hình</span><b aria-hidden="true">&nbsp;</b></div>
        <blockquote>Một doanh nghiệp xuất khẩu cà phê có hàng thật trong kho, đơn hàng thật trên tay — nhưng ngân hàng không cho vay vì không nhận hàng tồn kho là tài sản đảm bảo. Tiền bị chôn 3–6 tháng mỗi vụ. Muốn mở rộng sang Dubai nhưng không biết bắt đầu từ đâu. Thu tiền từ đối tác nước ngoài mất 3–5% và 30–45 ngày chờ đợi.</blockquote>
        <div className="quote-mark" aria-hidden="true">“</div>
      </aside>

      <section className="closing-statement shell">
        <h2>ĐÂY KHÔNG PHẢI CÂU CHUYỆN CỦA MỘT DOANH NGHIỆP.<span>ĐÂY LÀ BÀI TOÁN CHUNG CỦA HÀNG TRĂM NGHÌN SME VIỆT.</span></h2>
        <strong>NÚT THẮT KHÔNG PHẢI THIẾU VỐN, KHÔNG PHẢI THIẾU NHU CẦU — MÀ LÀ THIẾU KHẢ NĂNG CHỨNG MINH.</strong>
        <p>Ngân hàng không cho vay vì không verify được tài sản. Nhà đầu tư nước ngoài không định giá được vì không audit được. Đối tác quốc tế không tin vì không có chuẩn chung.</p>
      </section>

      <section className="open-window shell">
        <div className="open-window-intro">
          <h2>CỬA SỔ<br />ĐANG MỞ</h2>
          <div>
            <h3>LẦN ĐẦU TIÊN, VIỆT NAM CÓ ĐỦ NỀN TẢNG ĐỂ GIẢI BÀI TOÁN NÀY</h3>
            <p>Tất cả đang hội tụ cùng lúc — tạo ra một khoảng thời gian hiếm gặp để doanh nghiệp đi trước.</p>
          </div>
        </div>
        <div className="open-window-grid">
          {openWindowItems.map(([, title, description]) => (
            <article key={title}>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
        <div className="open-window-closing">
          <p>CỬA SỔ NÀY KHÔNG MỞ MÃI.<span>DOANH NGHIỆP ĐI TRƯỚC LÀ DOANH NGHIỆP ĐƯỢC ĐỊNH VỊ TRƯỚC.</span></p>
        </div>
      </section>

      <section className="solution shell" id="solution">
        <header className="solution-head">
          <span className="section-tag light">Giải pháp</span>
          <h2>SÁNG ĐÈN LÀ GÌ</h2>
          <p>Chương trình mở cửa vốn và thị trường toàn cầu cho doanh nghiệp Việt — bằng cách xây hạ tầng giao dịch trong nền kinh tế on-chain, có kiểm soát trong khuôn khổ pháp lý của Việt Nam.</p>
        </header>
        <div className="solution-body">
          <div className="solution-list">{solutions.map(([,t,d])=><article key={t}><span aria-hidden="true"></span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
          <aside className="solution-card">
            <span>CHƯƠNG TRÌNH KHÔNG DẠY LÝ THUYẾT</span>
            <p>Chương trình làm một việc duy nhất:</p>
            <strong>Biến doanh nghiệp thành một hồ sơ mà ngân hàng, quỹ và đối tác nước ngoài đọc được và tin được — rồi đưa hồ sơ đó vào một chuỗi giao dịch thật.</strong>
          </aside>
        </div>
      </section>

      <section className="journey shell" id="journey">
        <header className="journey-head"><span className="section-tag">Hành trình tham gia</span><h2>BA BƯỚC — TỪ TÌM HIỂU ĐẾN GIAO DỊCH THẬT</h2></header>
        <div className="journey-layout">
          <div className="journey-steps">
            <details>
              <summary><span>01</span><div><small>BƯỚC 1 · MIỄN PHÍ · 2,5 GIỜ</small><h3>BUỔI ĐỊNH HƯỚNG</h3></div><b>＋</b></summary>
              <div className="journey-content"><p>Hiểu vì sao doanh nghiệp mình đang nghẽn, cơ chế mới cho phép làm gì, và con đường cụ thể ra sao. Kết thúc buổi: hoàn tất đăng ký định danh doanh nghiệp. Chỉ mất một buổi để biết chương trình có phù hợp với mình không.</p></div>
            </details>
            <details open>
              <summary><span>02</span><div><small>BƯỚC 2 · MIỄN PHÍ · 4 BUỔI · CHỌN LỌC</small><h3>KHÓA CHUẨN HÓA</h3></div><b>＋</b></summary>
              <div className="journey-content"><p>Mỗi buổi mang về một thứ của chính doanh nghiệp mình — không phải bài giảng:</p>
                <div className="journey-table"><strong>BUỔI</strong><strong>RA VỀ VỚI</strong><span>Buổi 1</span><p>Bản đồ chuỗi ngành — xác định vị trí doanh nghiệp và đối tác thật trong chuỗi</p><span>Buổi 2</span><p>Một hồ sơ nghiệp vụ thật đã được số hóa và chuẩn hóa trên hệ thống</p><span>Buổi 3</span><p>Hồ sơ đủ điều kiện tham gia cơ chế thử nghiệm</p><span>Buổi 4</span><p>Vai chính thức trong chuỗi và ý định hợp tác được xác lập</p></div>
                <em>Người đứng lớp là doanh nghiệp đã làm được — không phải giảng viên lý thuyết.</em>
              </div>
            </details>
            <details>
              <summary><span>03</span><div><small>BƯỚC 3 · DỰ ÁN THẬT · Q1/2027</small><h3>VÀO CHUỖI — LÀM THẬT</h3></div><b>＋</b></summary>
              <div className="journey-content"><p>Cùng các bên trong chuỗi lập pháp nhân, ký hợp đồng khung, chuẩn bị giao dịch thật đầu tiên. Chuỗi đầu tiên sẵn sàng vận hành <strong>15/12/2026</strong>, giao dịch thật chạy từ Quý I/2027.</p></div>
            </details>
          </div>
          <div className="journey-photo"><img src="/feature-house.jpg" alt="Hành trình đưa doanh nghiệp vào giao dịch thật" /></div>
        </div>
      </section>

      <section className="sectors shell">
        <header className="sectors-title"><span className="section-tag light">Đối tượng ưu tiên</span><h2>BA NGÀNH TRONG KHÓA ĐẦU</h2><p>Được chọn vì có dòng tiền xuyên biên giới thật, volume đủ lớn để hạ tầng mới có nghĩa, và đang chịu ma sát tài chính nặng nhất.</p></header>
        <div className="sector-cards">
          <article>
            <div className="sector-image"><img src="/feature-house.jpg" alt="Hàng hóa xuất khẩu Việt Nam" /></div>
            <div className="sector-content"><h3>HÀNG HÓA XUẤT KHẨU</h3><p>Cà phê, nông sản, điều, tiêu. Việt Nam xuất ~70 tỷ USD/năm nhưng vốn bị chôn trong kho 3–6 tháng. L/C tốn 3–5% và 30–45 ngày. Hàng tồn kho thật — chưa được tính là tài sản đảm bảo.</p><strong>🎯 Giải pháp: Chứng chỉ lưu kho điện tử cho phép dùng chính lô hàng trong kho làm cơ sở huy động vốn ngắn hạn theo vụ mùa. Đầu bên kia: đối tác tại Abu Dhabi — Trung Đông và châu Phi.</strong></div>
          </article>
          <article>
            <div className="sector-image"><img src="/feature-house.jpg" alt="Du lịch và y tế quốc tế" /></div>
            <div className="sector-content"><h3>DU LỊCH &amp; Y TẾ QUỐC TẾ</h3><p>Khách sạn, phòng khám, spa, lữ hành. Khách quốc tế — đặc biệt khách Hàn — là nguồn doanh thu lớn nhưng dòng tiền về chậm và không ổn định.</p><strong>🎯 Giải pháp: Bán trước dịch vụ cho mùa cao điểm bằng voucher có bảo chứng — khách yên tâm, doanh nghiệp nhận dòng tiền trước ba tháng.</strong></div>
          </article>
          <article>
            <div className="sector-image"><img src="/feature-house.jpg" alt="Bất động sản du lịch Đà Nẵng" /></div>
            <div className="sector-content"><h3>BẤT ĐỘNG SẢN DU LỊCH</h3><p>Tập trung tại Đà Nẵng — nơi QĐ 04 mở cơ chế mã hóa tài sản. Cơ hội kết nối với dòng vốn quốc tế đang tìm hành lang mới tại Đông Nam Á.</p><strong>🎯 Giai đoạn này: Sáng Đèn xây chuẩn và kết nối với dòng vốn quốc tế — tạo nền cho giai đoạn tiếp theo.</strong></div>
          </article>
        </div>
      </section>

      <section className="register shell" id="register"><span className="section-tag">07 · Đăng ký</span><h2>BẮT ĐẦU<br />TỪ ĐÂY.</h2><p>Miễn phí. Không yêu cầu kinh nghiệm kỹ thuật.<br />Chỉ cần có hàng thật hoặc dịch vụ thật.</p><div><a className="pill dark" href="mailto:partner@goealliance.org?subject=Đăng ký Sáng Đèn 2026">Đăng ký tham gia <span>↗</span></a><a href="mailto:partner@goealliance.org">Liên hệ tư vấn</a></div></section>

      <footer className="shell"><div className="footer-mark">SÁNG ĐÈN</div><div>GOE Alliance<br />08 Nguyễn Huệ, TP. Hồ Chí Minh</div><div><a href="mailto:partner@goealliance.org">partner@goealliance.org</a><br />© 2026</div></footer>
    </main>
  );
}
