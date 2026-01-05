import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./fridge-style.css"

// 샘플 재료 데이터
const sampleIngredients = [
  { id: 1, name: "우유", icon: "🥛", expiry: "2024-01-20", category: "유제품" },
  { id: 2, name: "계란", icon: "🥚", expiry: "2024-01-25", category: "유제품" },
  { id: 3, name: "양배추", icon: "🥬", expiry: "2024-01-18", category: "채소" },
  { id: 4, name: "당근", icon: "🥕", expiry: "2024-01-22", category: "채소" },
  { id: 5, name: "사과", icon: "🍎", expiry: "2024-01-30", category: "과일" },
  { id: 6, name: "닭가슴살", icon: "🍗", expiry: "2024-01-17", category: "육류" },
  { id: 7, name: "두부", icon: "🧈", expiry: "2024-01-19", category: "기타" },
  { id: 8, name: "치즈", icon: "🧀", expiry: "2024-01-28", category: "유제품" },
]

export default function MyFridge() {
  const [ingredients, setIngredients] = useState(sampleIngredients)
  const [filter, setFilter] = useState("전체")
  const navigate = useNavigate()

  const categories = ["전체", "유제품", "채소", "과일", "육류", "기타"]

  // D-Day 계산
  const calculateDDay = (expiryDate) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const expiry = new Date(expiryDate)
    const diffTime = expiry - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // D-Day 상태에 따른 클래스
  const getDDayStatus = (dDay) => {
    if (dDay < 0) return "expired"
    if (dDay <= 3) return "urgent"
    if (dDay <= 7) return "warning"
    return "safe"
  }

  // 필터링된 재료
  const filteredIngredients = filter === "전체" ? ingredients : ingredients.filter((item) => item.category === filter)

  // 재료 삭제
  const handleDelete = (id) => {
    setIngredients(ingredients.filter((item) => item.id !== id))
  }

  return (
    <div className="my-fridge">
      {/* 헤더 */}
      <header className="mf-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← 뒤로
        </button>
        <h1 className="mf-title">📦 나의 냉장고</h1>
        <button className="add-btn">+ 추가</button>
      </header>

      {/* 카테고리 필터 */}
      <div className="category-filter">
        {categories.map((cat) => (
          <button key={cat} className={`filter-chip ${filter === cat ? "active" : ""}`} onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* 재료 개수 */}
      <p className="ingredient-count">
        총 <strong>{filteredIngredients.length}</strong>개의 재료
      </p>

      {/* 재료 카드 리스트 */}
      <div className="ingredient-list">
        {filteredIngredients.map((item) => {
          const dDay = calculateDDay(item.expiry)
          const status = getDDayStatus(dDay)

          return (
            <div key={item.id} className={`ingredient-card ${status}`}>
              <div className="card-icon">{item.icon}</div>
              <div className="card-info">
                <h3 className="card-name">{item.name}</h3>
                <span className="card-category">{item.category}</span>
              </div>
              <div className={`card-dday ${status}`}>
                {dDay < 0 ? <span>D+{Math.abs(dDay)}</span> : dDay === 0 ? <span>D-Day</span> : <span>D-{dDay}</span>}
              </div>
              <button className="card-delete" onClick={() => handleDelete(item.id)} aria-label="삭제">
                ✕
              </button>
            </div>
          )
        })}
      </div>

      {filteredIngredients.length === 0 && (
        <div className="empty-state">
          <span className="empty-icon">🍽️</span>
          <p>재료가 없어요!</p>
          <p className="empty-sub">+ 버튼을 눌러 재료를 추가해보세요</p>
        </div>
      )}
    </div>
  )
}
