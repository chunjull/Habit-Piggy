import { Link } from 'react-router-dom';

const Article = () => {
  return (
  <>
    <div className="container py-11 py-lg-16">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center">
            <h2 className="fs-5 fs-lg-10 fw-bold mb-3 mb-lg-5">用４步驟幫你打造更好版本的自己</h2>
            <p className="fs-8 fs-lg-6 text-darkgray mb-lg-11">28 AUG 2023</p>
          </div>
          <div className="mb-5 mb-lg-11">
            <p className="fs-lg-4 mb-0 text-indent">每個人都有自己的目標與願望，但要達成這些目標並不總是容易的事情。我們往往會在改變的路上遇到困難，可能會失去動力，甚至回到過去的舊習慣中。</p>
            <p className="fs-lg-4 mb-0 text-indent">然而，詹姆斯·克利爾（James Clear）的《原子習慣》這本書為我們揭示了一條打造更好版本自己的有效之道。書中提供了一套簡單而深具洞察力的四個步驟，幫助我們建立持久且積極的新習慣，讓我們成為更好的自己。</p>
          </div>
          <p className="fs-lg-4 mb-lg-11 text-indent">本文將探討這四個步驟，帶領您進入一趟自我改變的奇妙旅程。</p>
          <img src="https://images.unsplash.com/photo-1466193341027-56e68017ee2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="article picture" className="w-100 mb-5 mb-lg-11" />
          <div className='mb-5 mb-lg-11'>
            <h6 className="fs-6 fs-lg-3 fw-bold mb-3 mb-lg-5">第一步驟：製定明確且具體的目標</h6>
            <p className="fs-lg-4 mb-0 text-indent">在建立新習慣之前，我們必須明確知道自己要達成的目標是什麼。這個目標應該是具體、可衡量且真實可行的。</p>
            <p className="fs-lg-4 mb-0 text-indent">例如，不要只是訂立模糊的目標，像是「我要變得更健康」，而是要訂定明確的目標，如「每週運動三次，每次30分鐘」。這樣的目標讓我們更容易把握進度，也能夠有效量化成就感。</p>
          </div>
          <div className="mb-5 mb-lg-11">
            <h6 className="fs-6 fs-lg-3 fw-bold mb-3 mb-lg-5">第二步驟：創造吸引力的動力</h6>
            <p className="fs-lg-4 mb-0 text-indent">建立吸引力的動力是培養新習慣的關鍵。在《原子習慣》一書中，詹姆斯·克利爾指出：我們應該讓新習慣變得有趣、有動力，並與即時的獎勵聯繫在一起。</p>
            <p className="fs-lg-4 mb-0 text-indent">這種動力可以是內在的，像是讓自己更健康、更自信，也可以是外在的，如給自己一個小小的獎勵，讓新習慣更具吸引力。舉例來說，如果我們想要養成每天早上運動的習慣，可以設定一個小小的獎勵，像是享受一杯美味的咖啡或是看一集心愛的影集，讓這個過程變得更有趣，同時增加動力。</p>
          </div>
          <div className="mb-5 mb-lg-11">
            <h6 className="fs-6 fs-lg-3 fw-bold mb-3 mb-lg-5">第三步驟：減少阻力，創造無障礙環境</h6>
            <p className="fs-lg-4 mb-0 text-indent">過去我們往往低估了環境對於行為的影響。</p>
            <p className="fs-lg-4 mb-0 text-indent">克利爾指出，我們應該設計一個無障礙環境，減少改變的阻力，讓新習慣更容易執行。例如，如果想要每天早上運動，可以事先將運動服裝準備好、鬧鐘設定在合適的時間，這樣在早上起床時就不需要經過多餘的思考，減少懶床的可能性。</p>
          </div>
          <div className="mb-5 mb-lg-11">
            <h6 className="fs-6 fs-lg-3 fw-bold mb-3 mb-lg-5">第四步驟：培養持續的效能</h6>
            <p className="fs-lg-4 mb-0 text-indent">持續執行是養成新習慣的關鍵。建立小小的勝利和持續的效能，能夠增加自信心，讓我們更有動力持續前進。</p>
            <p className="fs-lg-4 mb-0 text-indent">克利爾提到「二分一」原則，即把目標拆解成更小的部分，每次只專注於其中的一部分。這樣不僅讓目標變得更容易達成，也讓我們更容易保持動力和效能。</p>
          </div>
          <p className="fs-lg-4 mb-0 text-indent">總結來說，《原子習慣》一書帶給我們一套實用且革命性的改變方法，讓我們能夠透過「原子習慣」逐步實現個人成長與成功。</p>
          <p className="fs-lg-4 mb-0 text-indent">這四個步驟：製定明確的目標、創造吸引力的動力、減少阻力、培養持續的效能，不僅可以幫助我們打造更好版本的自己，也能夠帶來持久的積極改變。</p>
          <p className="fs-lg-4 mb-0 text-indent">讓我們一起學習如何用「原子習慣」來改變自己，成為更堅強、更自信的人！</p>
        </div>
      </div>
    </div>
  </>
  );
};

export default Article;