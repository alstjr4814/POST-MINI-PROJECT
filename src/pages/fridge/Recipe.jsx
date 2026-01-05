import { useNavigate } from "react-router-dom"
import "./fridge-style.css"

// 샘플 레시피 데이터 - 이미지를 placeholder로 변경
const sampleRecipes = [
  {
    id: 1,
    title: "간단 계란볶음밥",
    thumbnail: "https://via.placeholder.com/400x200/FFE4B5/333333?text=계란볶음밥",
    duration: "15분",
    difficulty: "쉬움",
    matchRate: 95,
    ingredients: ["계란", "밥", "당근", "양파"],
    channel: "백종원의 요리비책",
  },
  {
    id: 2,
    title: "우유 크림 파스타",
    thumbnail: "https://via.placeholder.com/400x200/FFFACD/333333?text=크림파스타",
    duration: "20분",
    difficulty: "보통",
    matchRate: 80,
    ingredients: ["우유", "파스타면", "치즈", "베이컨"],
    channel: "자취생 요리",
  },
  {
    id: 3,
    title: "양배추 샐러드",
    thumbnail: "https://via.placeholder.com/400x200/90EE90/333333?text=양배추샐러드",
    duration: "10분",
    difficulty: "쉬움",
    matchRate: 100,
    ingredients: ["양배추", "당근", "마요네즈"],
    channel: "다이어트 레시피",
  },
  {
    id: 4,
    title: "닭가슴살 스테이크",
    thumbnail: "https://via.placeholder.com/400x200/DEB887/333333?text=닭가슴살",
    duration: "25분",
    difficulty: "보통",
    matchRate: 75,
    ingredients: ["닭가슴살", "버터", "마늘"],
    channel: "헬시 쿡",
  },
  {
    id: 5,
    title: "두부 김치찌개",
    thumbnail: "https://via.placeholder.com/400x200/FFA07A/333333?text=김치찌개",
    duration: "30분",
    difficulty: "쉬움",
    matchRate: 70,
    ingredients: ["두부", "김치", "돼지고기"],
    channel: "집밥 백선생",
  },
]

export default function Recipe() {
  const navigate = useNavigate()

  return (
    <div className="recipe-page">
      {/* 헤더 */}
      <header className="recipe-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← 뒤로
        </button>
        <h1 className="recipe-title">👨‍🍳 추천 레시피</h1>
        <div style={{ width: "70px" }}></div>
      </header>

      {/* 매칭 정보 */}
      <div className="match-info">
        <span className="match-icon">✨</span>
        <p>내 냉장고 재료로 만들 수 있는 레시피예요!</p>
      </div>

      {/* 레시피 카드 리스트 */}
      <div className="recipe-list">
        {sampleRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            {/* 썸네일 */}
            <div className="recipe-thumbnail">
              <img src={recipe.thumbnail || "/placeholder.svg"} alt={recipe.title} />
              <span className="recipe-duration">{recipe.duration}</span>
              <span className="recipe-match">{recipe.matchRate}% 매칭</span>
            </div>

            {/* 정보 */}
            <div className="recipe-info">
              <h3 className="recipe-name">{recipe.title}</h3>
              <p className="recipe-channel">{recipe.channel}</p>

              <div className="recipe-meta">
                <span className={`difficulty ${recipe.difficulty === "쉬움" ? "easy" : "normal"}`}>
                  {recipe.difficulty}
                </span>
                <div className="recipe-ingredients">
                  {recipe.ingredients.slice(0, 3).map((ing, idx) => (
                    <span key={idx} className="ingredient-tag">
                      {ing}
                    </span>
                  ))}
                  {recipe.ingredients.length > 3 && (
                    <span className="ingredient-more">+{recipe.ingredients.length - 3}</span>
                  )}
                </div>
              </div>
            </div>

            {/* 재생 버튼 오버레이 */}
            <div className="play-overlay">
              <span className="play-icon">▶</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
