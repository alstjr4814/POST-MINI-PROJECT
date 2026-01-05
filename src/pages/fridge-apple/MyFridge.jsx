import { useNavigate } from "react-router-dom"
import { ArrowLeft, Plus, Search, Filter } from "lucide-react"

function MyFridge() {
  const navigate = useNavigate()

  const ingredients = [
    { id: 1, emoji: "🥬", name: "배추", dday: 2, category: "채소" },
    { id: 2, emoji: "🥕", name: "당근", dday: 5, category: "채소" },
    { id: 3, emoji: "🧅", name: "양파", dday: 7, category: "채소" },
    { id: 4, emoji: "🥩", name: "소고기", dday: 1, category: "육류" },
    { id: 5, emoji: "🍗", name: "닭가슴살", dday: 3, category: "육류" },
    { id: 6, emoji: "🥚", name: "계란", dday: 10, category: "기타" },
    { id: 7, emoji: "🧀", name: "치즈", dday: 4, category: "유제품" },
    { id: 8, emoji: "🥛", name: "우유", dday: 2, category: "유제품" },
    { id: 9, emoji: "🍎", name: "사과", dday: 6, category: "과일" },
    { id: 10, emoji: "🍋", name: "레몬", dday: 8, category: "과일" },
    { id: 11, emoji: "🥦", name: "브로콜리", dday: 1, category: "채소" },
    { id: 12, emoji: "🧄", name: "마늘", dday: 14, category: "채소" },
  ]

  const getDdayStyle = (dday) => {
    if (dday <= 2) return "badge-urgent"
    if (dday <= 5) return "badge-warning"
    return "badge-safe"
  }

  const getDdayText = (dday) => {
    if (dday === 0) return "D-Day"
    return `D-${dday}`
  }

  return (
    <div className="my-fridge">
      {/* Floating decorative elements */}
      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>

      {/* Sticky Header */}
      <header className="fridge-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <h1>나의 냉장고</h1>
        <button className="add-button">
          <Plus size={24} />
        </button>
      </header>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-bar">
          <Search size={20} />
          <input type="text" placeholder="재료 검색..." />
        </div>
        <button className="filter-button">
          <Filter size={20} />
        </button>
      </div>

      {/* Stats Summary */}
      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-number">12</span>
          <span className="stat-label">전체 재료</span>
        </div>
        <div className="stat-card stat-urgent">
          <span className="stat-number">3</span>
          <span className="stat-label">임박 재료</span>
        </div>
        <div className="stat-card stat-safe">
          <span className="stat-number">9</span>
          <span className="stat-label">신선 재료</span>
        </div>
      </div>

      {/* Ingredients Grid */}
      <main className="ingredients-grid">
        {ingredients.map((item) => (
          <div key={item.id} className="ingredient-card">
            <div className={`dday-badge ${getDdayStyle(item.dday)}`}>{getDdayText(item.dday)}</div>
            <div className="ingredient-emoji">{item.emoji}</div>
            <h3 className="ingredient-name">{item.name}</h3>
            <span className="ingredient-category">{item.category}</span>
          </div>
        ))}
      </main>

      {/* Bottom Action */}
      <div className="bottom-action">
        <button className="action-button-large">
          <Plus size={24} />
          <span>재료 추가하기</span>
        </button>
      </div>
    </div>
  )
}

export default MyFridge
