import { useNavigate } from "react-router-dom"
import { ArrowLeft, Heart, Clock, Users, Bookmark, Star } from "lucide-react"

function Recipe() {
  const navigate = useNavigate()

  const recipes = [
    {
      id: 1,
      name: "김치찌개",
      image: "/korean-kimchi-stew.png",
      matchRate: 98,
      time: "30분",
      servings: 2,
      difficulty: "쉬움",
      likes: 1234,
    },
    {
      id: 2,
      name: "된장찌개",
      image: "/korean-doenjang-jjigae.jpg",
      matchRate: 95,
      time: "25분",
      servings: 2,
      difficulty: "쉬움",
      likes: 892,
    },
    {
      id: 3,
      name: "제육볶음",
      image: "/korean-spicy-pork-stir-fry.jpg",
      matchRate: 88,
      time: "20분",
      servings: 3,
      difficulty: "보통",
      likes: 2156,
    },
    {
      id: 4,
      name: "계란말이",
      image: "/korean-rolled-omelette.jpg",
      matchRate: 85,
      time: "15분",
      servings: 2,
      difficulty: "쉬움",
      likes: 756,
    },
    {
      id: 5,
      name: "소불고기",
      image: "/korean-bulgogi.jpg",
      matchRate: 82,
      time: "40분",
      servings: 4,
      difficulty: "보통",
      likes: 3421,
    },
    {
      id: 6,
      name: "닭볶음탕",
      image: "/korean-braised-spicy-chicken.jpg",
      matchRate: 78,
      time: "45분",
      servings: 4,
      difficulty: "보통",
      likes: 1567,
    },
  ]

  const getMatchColor = (rate) => {
    if (rate >= 90) return "match-excellent"
    if (rate >= 80) return "match-good"
    return "match-normal"
  }

  return (
    <div className="recipe-page">
      {/* Floating decorative elements */}
      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>
      <div className="floating-circle circle-3"></div>

      {/* Header */}
      <header className="recipe-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <h1>레시피 추천</h1>
        <button className="bookmark-button">
          <Bookmark size={24} />
        </button>
      </header>

      {/* Featured Banner */}
      <div className="featured-banner">
        <div className="featured-content">
          <span className="featured-tag">🔥 오늘의 추천</span>
          <h2>
            냉장고 재료로 만드는
            <br />
            특별한 요리
          </h2>
          <p>12개의 재료로 45개 레시피 발견!</p>
        </div>
        <div className="featured-emoji">👨‍🍳</div>
      </div>

      {/* Recipe Grid */}
      <main className="recipe-grid">
        {recipes.map((recipe) => (
          <article key={recipe.id} className="recipe-card">
            <div className="recipe-image-wrapper">
              <img src={recipe.image || "/placeholder.svg"} alt={recipe.name} className="recipe-image" />
              <div className={`match-badge ${getMatchColor(recipe.matchRate)}`}>일치율 {recipe.matchRate}%</div>
              <button className="like-button">
                <Heart size={20} />
              </button>
            </div>
            <div className="recipe-info">
              <h3 className="recipe-name">{recipe.name}</h3>
              <div className="recipe-meta">
                <span className="meta-item">
                  <Clock size={14} />
                  {recipe.time}
                </span>
                <span className="meta-item">
                  <Users size={14} />
                  {recipe.servings}인분
                </span>
              </div>
              <div className="recipe-footer">
                <span className="difficulty-tag">{recipe.difficulty}</span>
                <span className="likes-count">
                  <Star size={14} />
                  {recipe.likes.toLocaleString()}
                </span>
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* Bottom CTA */}
      <div className="bottom-cta">
        <button className="cta-button">
          <span>더 많은 레시피 보기</span>
        </button>
      </div>
    </div>
  )
}

export default Recipe
