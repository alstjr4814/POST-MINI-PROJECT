import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./fridge-style.css"

export default function FridgeHome() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleFridgeClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fridge-home">
      <h1 className="title">냉장고 파먹기</h1>
      <p className="subtitle">냉장고를 클릭해서 열어보세요!</p>

      <div className="fridge-container">
        <div className={`fridge ${isOpen ? "open" : ""}`} onClick={handleFridgeClick}>
          {/* 냉장고 본체 */}
          <div className="fridge-body">
            {/* 냉장고 내부 (문이 열렸을 때 보임) */}
            <div className="fridge-inside">
              <div className="shelf">
                <span className="food-item">🥛</span>
                <span className="food-item">🥚</span>
                <span className="food-item">🧀</span>
              </div>
              <div className="shelf">
                <span className="food-item">🥬</span>
                <span className="food-item">🍎</span>
                <span className="food-item">🥕</span>
              </div>
              <div className="shelf">
                <span className="food-item">🍖</span>
                <span className="food-item">🐟</span>
                <span className="food-item">🧈</span>
              </div>
            </div>
          </div>

          {/* 냉장고 문 */}
          <div className="fridge-door">
            <div className="door-handle"></div>
            <div className="door-brand">FRESH</div>
          </div>
        </div>
      </div>

      {/* 버튼들 - 문이 열리면 등장 */}
      <div className={`action-buttons ${isOpen ? "visible" : ""}`}>
        <button className="action-btn ingredients-btn" onClick={() => navigate("/my-fridge")}>
          <span className="btn-icon">📦</span>
          <span className="btn-text">재료 보기</span>
        </button>
        <button className="action-btn recipe-btn" onClick={() => navigate("/recipe")}>
          <span className="btn-icon">👨‍🍳</span>
          <span className="btn-text">레시피 추천</span>
        </button>
      </div>

      <p className="hint-text">{isOpen ? "버튼을 눌러 시작하세요!" : "냉장고를 터치! 👆"}</p>
    </div>
  )
}
