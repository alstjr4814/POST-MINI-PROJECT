import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Package, ChefHat, Sparkles } from "lucide-react"
import "./apple-style.css";

function FridgeHome() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const handleFridgeClick = () => {
    setIsOpen(true)
  }

  return (
    <div className="fridge-home">
      {/* Floating decorative elements */}
      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>
      <div className="floating-circle circle-3"></div>

      {/* Header */}
      <header className="home-header">
        <div className="header-icon">
          <Sparkles size={20} />
        </div>
        <span>Fresh & Smart</span>
      </header>

      {/* Main Content */}
      <main className="home-main">
        <div className="title-section">
          <h1 className="main-title">냉장고 파먹기</h1>
          <p className="main-subtitle">신선한 재료 관리의 시작</p>
        </div>

        {/* Glass Fridge Illustration */}
        <div className={`fridge-container ${isOpen ? "fridge-open" : ""}`} onClick={handleFridgeClick}>
          <div className="fridge-glass">
            <div className="fridge-body">
              <div className="fridge-door fridge-door-top">
                <div className="door-handle"></div>
                {/* <div className="door-shelf">
                  <span className="shelf-item">🥛</span>
                  <span className="shelf-item">🧃</span>
                  <span className="shelf-item">🍶</span>
                </div>
                <div className="door-shelf">
                  <span className="shelf-item">🥚</span>
                  <span className="shelf-item">🧈</span>
                </div> */}
              </div>
              <div className="fridge-door fridge-door-bottom">
                <div className="door-handle"></div>
                {/* <div className="freezer-content">
                  <span className="shelf-item">🧊</span>
                  <span className="shelf-item">🍦</span>
                </div> */}
              </div>
            </div>
            <div className="fridge-glow"></div>
          </div>
          <p className="fridge-hint">{isOpen ? "메뉴를 선택하세요" : "냉장고를 터치하세요"}</p>
        </div>

        {/* Bento Cards - Appear when fridge is opened */}
        <div className={`bento-cards ${isOpen ? "cards-visible" : ""}`}>
          <button className="bento-card card-ingredients" onClick={() => navigate("/my-fridge")}>
            <div className="card-icon-wrapper">
              <Package size={32} />
            </div>
            <div className="card-content">
              <h3>나의 재료 관리</h3>
              <p>신선도를 한눈에 확인</p>
            </div>
            <div className="card-emoji">📦</div>
          </button>

          <button className="bento-card card-recipe" onClick={() => navigate("/recipe")}>
            <div className="card-icon-wrapper">
              <ChefHat size={32} />
            </div>
            <div className="card-content">
              <h3>레시피 추천</h3>
              <p>재료로 만드는 요리</p>
            </div>
            <div className="card-emoji">🍳</div>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2025 냉장고 파먹기</p>
      </footer>
    </div>
  )
}

export default FridgeHome
