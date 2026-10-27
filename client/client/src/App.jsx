import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  ArrowRight,
  Star,
  UserRound,
  Trash2,
  Plus,
  Minus,
  Globe,
  MessageCircle,
} from "lucide-react"; 
import "./App.css";

const products = [
  {
    id: 1,
    name: "Air Runner Pro",
    brand: "NIKE",
    price: 8999,
    category: "Running",
    color: "White / Black",
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Street Classic",
    brand: "ADIDAS",
    price: 7499,
    category: "Lifestyle",
    color: "Cloud White",
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Urban Legend",
    brand: "PUMA",
    price: 6299,
    category: "Lifestyle",
    color: "Black / White",
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Velocity Max",
    brand: "NEW BALANCE",
    price: 9999,
    category: "Running",
    color: "Grey / Silver",
    badge: "",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Retro High",
    brand: "NIKE",
    price: 11499,
    category: "Basketball",
    color: "Red / White",
    badge: "TRENDING",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=85",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Cloud Walk",
    brand: "ASICS",
    price: 6799,
    category: "Running",
    color: "Cream / Beige",
    badge: "",
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Court Vision",
    brand: "ADIDAS",
    price: 8299,
    category: "Basketball",
    color: "Black",
    badge: "LIMITED",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Everyday Essential",
    brand: "PUMA",
    price: 5499,
    category: "Lifestyle",
    color: "White / Cream",
    badge: "",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85",
    rating: 4.6,
  },
     {
    id: 9,
    name: "Nike Air Force 1 '07",
    brand: "Nike",
    category: "Lifestyle",
    price: 8999,
    oldPrice: 10999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=800&q=80",
    description: "An iconic everyday sneaker with a clean, versatile design."
  },
  {
  id: 24,
  name: "Nike Air Force 1 '07",
  brand: "Nike",
  category: "Sneakers",
  price: 7495,
  image: "https://static.nike.com/a/images/t_default/air-force-1-07-shoes.png",
  description: "Classic white sneakers with comfortable cushioning and a timeless design."
  },
  {
    id: 11,
    name: "Nike Zoom Vomero 5",
    brand: "Nike",
    category: "Running",
    price: 14999,
    oldPrice: 16999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description: "A retro-running silhouette designed for everyday styling."
  },
  {
    id: 12,
    name: "Adidas Gazelle Indoor",
    brand: "Adidas",
    category: "Casual",
    price: 9999,
    oldPrice: 11999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    description: "A low-profile sneaker with vintage-inspired styling."
  },
  {
    id: 13,
    name: "ASICS Gel-NYC",
    brand: "ASICS",
    category: "Lifestyle",
    price: 13999,
    oldPrice: 15999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    description: "A layered sneaker combining retro running influences with modern design."
  },
  {
    id: 14,
    name: "Converse Run Star Hike",
    brand: "Converse",
    category: "Streetwear",
    price: 7999,
    oldPrice: 9499,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80",
    description: "A bold high-top style with an eye-catching platform-inspired look."
  },
  {
    id: 15,
    name: "Vans Knu Skool",
    brand: "Vans",
    category: "Skateboarding",
    price: 6999,
    oldPrice: 8499,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    description: "A chunky skate-inspired sneaker with a throwback aesthetic."
  },
  {
    id: 16,
    name: "Reebok Club C 85",
    brand: "Reebok",
    category: "Casual",
    price: 5999,
    oldPrice: 7499,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    description: "Minimalist court-inspired sneakers for everyday wear."
  },
  {
    id: 17,
    name: "Puma Deviate Nitro",
    brand: "Puma",
    category: "Running",
    price: 12999,
    oldPrice: 14999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80",
    description: "Performance-oriented running shoes for energetic training sessions."
  },
  {
    id: 18,
    name: "New Balance Fresh Foam 1080",
    brand: "New Balance",
    category: "Running",
    price: 15999,
    oldPrice: 17999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80",
    description: "Cushioned running shoes designed for comfortable daily miles."
  },
  {
    id: 19,
    name: "Jordan 1 Low",
    brand: "Jordan",
    category: "Basketball",
    price: 9999,
    oldPrice: 11999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    description: "A low-top basketball-inspired sneaker with versatile styling."
  },
  {
    id: 20,
    name: "On Cloud 5",
    brand: "On",
    category: "Lifestyle",
    price: 13999,
    oldPrice: 15999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80",
    description: "A lightweight-looking everyday sneaker with a streamlined profile."
  },
  {
    id: 21,
    name: "Hoka Clifton",
    brand: "Hoka",
    category: "Running",
    price: 14499,
    oldPrice: 16499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
    description: "A cushioned running shoe designed for everyday road running."
  },
  {
    id: 22,
    name: "Under Armour Curry Flow",
    brand: "Under Armour",
    category: "Basketball",
    price: 11999,
    oldPrice: 13999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80",
    description: "A basketball-inspired shoe designed for court-focused movement."
  },
  {
    id: 23,
    name: "Fila Disruptor II",
    brand: "Fila",
    category: "Streetwear",
    price: 6499,
    oldPrice: 7999,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
    description: "A chunky retro sneaker with a bold streetwear silhouette."
  },
];

const money = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

function Header({ cartCount, wishlistCount, user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function submitSearch(e) {
    e.preventDefault();
    navigate(`/shop?search=${encodeURIComponent(search)}`);
    setSearchOpen(false);
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="announcement">
        FREE SHIPPING ON ORDERS ABOVE ₹4,999
      </div>

      <div className="header-main">
        <button
          className="icon-button mobile-menu"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <Link to="/" className="logo">
          SNEAK<span>PEAK.</span>
        </Link>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>
            SHOP ALL
          </Link>
          <Link
            to="/shop?category=Running"
            onClick={() => setMenuOpen(false)}
          >
            RUNNING
          </Link>
          <Link
            to="/shop?category=Lifestyle"
            onClick={() => setMenuOpen(false)}
          >
            LIFESTYLE
          </Link>
          <Link
            to="/shop?category=Basketball"
            onClick={() => setMenuOpen(false)}
          >
            BASKETBALL
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            OUR STORY
          </Link>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            aria-label="Search products"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={21} />
          </button>

          <Link to="/wishlist" className="header-icon" aria-label="Wishlist">
            <Heart size={21} />
            {wishlistCount > 0 && (
              <span className="count-badge">{wishlistCount}</span>
            )}
          </Link>

          {user ? (
  <>
    <Link to="/account" className="auth-nav-button">
      <UserRound size={18} />
      MY ACCOUNT
    </Link>

    <button
      type="button"
      className="auth-nav-button logout-button"
      onClick={() => {
        onLogout();
        navigate("/");
      }}
    >
      LOGOUT
    </button>
  </>
) : (
  <>
    <Link to="/login" className="auth-nav-button">
      LOGIN
    </Link>

    <Link to="/signup" className="auth-nav-button signup-nav-button">
      SIGN UP
    </Link>
  </>
)}

          <Link to="/cart" className="header-icon" aria-label="Shopping cart">
            <ShoppingBag size={21} />
            {cartCount > 0 && (
              <span className="count-badge">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>

      {searchOpen && (
        <form className="search-bar" onSubmit={submitSearch}>
          <Search size={19} />
          <input
            autoFocus
            placeholder="Search sneakers, brands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="dark-button" type="submit">
            SEARCH
          </button>
        </form>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link to="/" className="logo footer-logo">
            SNEAK<span>PEAK.</span>
          </Link>
          <p className="footer-description">
            Find your next favourite pair. Discover sneakers made for
            your everyday moves.
          </p>
          <div className="social-links">
            <a href="https://Globe.com" aria-label="Globe">
              <Globe size={19} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <Globe size={19} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <MessageCircle size={19} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>SHOP</h4>
          <Link to="/shop">All Sneakers</Link>
          <Link to="/shop?category=Running">Running</Link>
          <Link to="/shop?category=Lifestyle">Lifestyle</Link>
          <Link to="/shop?category=Basketball">Basketball</Link>
        </div>

        <div className="footer-column">
          <h4>INFORMATION</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/account">My Account</Link>
          <Link to="/cart">Shopping Bag</Link>
        </div>

        <div className="footer-column">
          <h4>OUR PROMISE</h4>
          <p>Authentic products</p>
          <p>Secure checkout</p>
          <p>Easy customer support</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 SNEAKPEAK. CA-03 STUDENT PROJECT.</span>
        <span>MADE FOR SNEAKER LOVERS.</span>
      </div>
    </footer>
  );
}

function ProductCard({ product, wishlist, toggleWishlist, addToCart }) {
  const liked = wishlist.includes(product.id);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${product.id}`} className="product-image-link">
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        </Link>

        {product.badge && <span className="product-badge">{product.badge}</span>}

        <button
          className={`wishlist-button ${liked ? "liked" : ""}`}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggleWishlist(product.id)}
        >
          <Heart size={19} fill={liked ? "currentColor" : "none"} />
        </button>

        <button
          className="quick-add"
          onClick={() => addToCart(product, "UK 8")}
        >
          <Plus size={16} /> QUICK ADD
        </button>
      </div>

      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>
        <div className="product-rating">
          <Star size={14} fill="currentColor" />
          <span>{product.rating}</span>
          <span className="rating-muted">· Verified style</span>
        </div>
        <div className="product-price">{money(product.price)}</div>
      </div>
    </article>
  );
}

function Home({ wishlist, toggleWishlist, addToCart }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow">
            <span className="eyebrow-line" />
            YOUR NEXT STEP STARTS HERE
          </div>
          <h1>
            MADE TO
            <br />
            <span>MOVE.</span>
          </h1>
          <p>
            Sneakers that match your pace, your style, and everything
            in between. Find the pair that feels like you.
          </p>
          <div className="hero-buttons">
            <Link to="/shop" className="light-button">
              SHOP THE COLLECTION <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="hero-text-link">
              DISCOVER OUR STORY
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <strong>08+</strong>
              <span>CURATED STYLES</span>
            </div>
            <div>
              <strong>4.7/5</strong>
              <span>STYLE RATING</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>STYLE FIRST</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=90"
            alt="Red sneaker from the SneakPeak collection"
          />
          <div className="hero-image-label">
            <span>THE NEW CLASSICS</span>
            <strong>STEP INTO SOMETHING NEW.</strong>
          </div>
          <div className="hero-circle">
            <span>FIND</span>
            <span>YOUR</span>
            <span>PACE ↗</span>
          </div>
        </div>

        <div className="hero-vertical-text">SNEAKERS FOR EVERY MOVE · 2026</div>
      </section>

      <section className="trust-strip">
        <div>✳ CURATED SNEAKER STYLES</div>
        <div>↗ STYLE THAT MOVES WITH YOU</div>
        <div>✳ FIND YOUR EVERYDAY PAIR</div>
        <div>↗ BUILT AROUND YOUR STYLE</div>
      </section>

      <section className="section collection-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">THE COLLECTION</div>
            <h2>THE PAIRS EVERYONE WANTS.</h2>
            <p>Fresh looks. Everyday icons. Your next favourite.</p>
          </div>
          <Link to="/shop" className="outline-button">
            VIEW ALL PRODUCTS <ArrowRight size={17} />
          </Link>
        </div>

        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

      <section className="category-section">
        <div className="category-heading">
          <div className="eyebrow">FIND YOUR FIT</div>
          <h2>WHAT MOVES YOU?</h2>
        </div>

        <div className="category-grid">
          <Link
            to="/shop?category=Running"
            className="category-tile category-running"
          >
            <img
              src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85"
              alt="Running collection"
            />
            <div className="category-overlay">
              <span>01 / PERFORMANCE</span>
              <h3>RUNNING</h3>
              <span className="category-explore">
                EXPLORE COLLECTION ↗
              </span>
            </div>
          </Link>

          <Link
            to="/shop?category=Lifestyle"
            className="category-tile category-lifestyle"
          >
            <img
              src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85"
              alt="Lifestyle sneaker collection"
            />
            <div className="category-overlay">
              <span>02 / EVERYDAY</span>
              <h3>LIFESTYLE</h3>
              <span className="category-explore">
                EXPLORE COLLECTION ↗
              </span>
            </div>
          </Link>

          <Link
            to="/shop?category=Basketball"
            className="category-tile category-basketball"
          >
            <img
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=85"
              alt="Basketball collection"
            />
            <div className="category-overlay">
              <span>03 / COURT CULTURE</span>
              <h3>BASKETBALL</h3>
              <span className="category-explore">
                EXPLORE COLLECTION ↗
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-image">
          <img
            src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=85"
            alt="Sneakers selected for everyday style"
            loading="lazy"
          />
        </div>
        <div className="editorial-content">
          <div className="eyebrow">A LITTLE DIFFERENT. A LOT MORE YOU.</div>
          <h2>
            YOUR STYLE.
            <br />
            YOUR RULES.
          </h2>
          <p>
            The right pair does more than complete an outfit. It changes
            how you show up. Explore our curated collection and find a
            style that feels completely yours.
          </p>
          <Link to="/shop" className="dark-button">
            FIND YOUR PAIR <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="newsletter-section">
        <div>
          <div className="eyebrow">THE SNEAKPEAK EDIT</div>
          <h2>GOOD SHOES. GOOD MOOD.</h2>
          <p>Get product updates and fresh collection announcements.</p>
        </div>
        <form
          className="newsletter-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for joining the SneakPeak community!");
            e.currentTarget.reset();
          }}
        >
          <input type="email" placeholder="Your email address" required />
          <button type="submit">
            SIGN ME UP <ArrowRight size={17} />
          </button>
        </form>
      </section>
    </>
  );
}

function Shop({ wishlist, toggleWishlist, addToCart }) {
  const params = new URLSearchParams(window.location.search);
  const [category, setCategory] = useState(params.get("category") || "All");
  const [brand, setBrand] = useState("All");
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState(params.get("search") || "");

  let filtered = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;
    const matchesBrand = brand === "All" || product.brand === brand;
    const query = search.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);

    return matchesCategory && matchesBrand && matchesSearch;
  });

  if (sort === "low") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "high") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "rating")
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link to="/">HOME</Link> / SHOP ALL
      </div>

      <div className="shop-intro">
        <div className="eyebrow">FIND YOUR NEXT FAVOURITE</div>
        <h1>THE SNEAKER EDIT.</h1>
        <p>Explore the collection. Find your fit. Make every step count.</p>
      </div>

      <div className="shop-toolbar">
        <div>
          <strong>{filtered.length} PRODUCTS</strong>
          <span> / YOUR NEXT PAIR IS HERE</span>
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="featured">Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="shop-layout">
        <aside className="shop-sidebar">
          <h3>CATEGORIES</h3>
          {["All", "Running", "Lifestyle", "Basketball"].map((item) => (
            <button
              key={item}
              className={category === item ? "filter-active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}

          <h3>BRANDS</h3>
          {["All", "NIKE", "ADIDAS", "PUMA", "NEW BALANCE", "ASICS"].map(
            (item) => (
              <button
                key={item}
                className={brand === item ? "filter-active" : ""}
                onClick={() => setBrand(item)}
              >
                {item}
              </button>
            ),
          )}

          <button
            className="reset-filters"
            onClick={() => {
              setCategory("All");
              setBrand("All");
              setSearch("");
            }}
          >
            RESET FILTERS ↺
          </button>
        </aside>

        <div className="shop-results">
          <div className="shop-search">
            <Search size={18} />
            <input
              placeholder="Search products or brands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {filtered.length ? (
            <div className="product-grid shop-product-grid">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  addToCart={addToCart}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={40} />
              <h2>No sneakers found.</h2>
              <p>Try a different search or reset the filters.</p>
              <button
                className="dark-button"
                onClick={() => {
                  setCategory("All");
                  setBrand("All");
                  setSearch("");
                }}
              >
                CLEAR FILTERS
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function ProductDetails({ addToCart, wishlist, toggleWishlist }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [size, setSize] = useState("UK 8");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="empty-state page-container">
        <h2>Product not found.</h2>
        <Link className="dark-button" to="/shop">
          RETURN TO SHOP
        </Link>
      </main>
    );
  }

  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link to="/">HOME</Link> / <Link to="/shop">SHOP</Link> /{" "}
        {product.name.toUpperCase()}
      </div>

      <div className="product-details">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-content">
          <div className="eyebrow">{product.brand}</div>
          <h1>{product.name}</h1>

          <div className="details-rating">
            <Star size={17} fill="currentColor" /> {product.rating} / 5
          </div>

          <div className="details-price">{money(product.price)}</div>
          <p className="details-description">
            Designed for everyday movement and standout style. Find
            your fit with this versatile addition to your sneaker
            rotation.
          </p>

          <div className="details-divider" />

          <div className="size-heading">
            <strong>SELECT SIZE</strong>
            <span>{size}</span>
          </div>

          <div className="size-options">
            {["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"].map(
              (item) => (
                <button
                  key={item}
                  className={size === item ? "size-selected" : ""}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ),
            )}
          </div>

          <div className="quantity-control">
            <button
              aria-label="Decrease quantity"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus size={16} />
            </button>
            <span>{quantity}</span>
            <button
              aria-label="Increase quantity"
              onClick={() => setQuantity(Math.min(10, quantity + 1))}
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            className="dark-button full-button"
            onClick={() => addToCart(product, size, quantity)}
          >
            ADD TO BAG — {money(product.price * quantity)}
            <ShoppingBag size={19} />
          </button>

          <button
            className="outline-button full-button"
            onClick={() => toggleWishlist(product.id)}
          >
            <Heart
              size={18}
              fill={wishlist.includes(product.id) ? "currentColor" : "none"}
            />
            {wishlist.includes(product.id)
              ? "REMOVE FROM WISHLIST"
              : "ADD TO WISHLIST"}
          </button>

          <div className="details-perks">
            <p>✓ Secure checkout demonstration</p>
            <p>✓ Product information and size selection</p>
            <p>✓ Customer support available</p>
          </div>
        </div>
      </div>

      <section className="related-section">
        <div className="eyebrow">KEEP EXPLORING</div>
        <h2>MORE TO LOVE.</h2>
        <div className="product-grid">
          {products
            .filter((item) => item.id !== product.id)
            .slice(0, 4)
            .map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
                addToCart={addToCart}
              />
            ))}
        </div>
      </section>
    </main>
  );
}

function Cart({ cart, updateQuantity, removeFromCart }) {
  const navigate = useNavigate();
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link to="/">HOME</Link> / SHOPPING BAG
      </div>

      <div className="page-title">
        <div className="eyebrow">YOUR PICKS, ALL IN ONE PLACE</div>
        <h1>YOUR BAG.</h1>
      </div>

      {!cart.length ? (
        <div className="empty-state">
          <ShoppingBag size={48} />
          <h2>Your bag is looking a little empty.</h2>
          <p>Great sneakers are waiting to be discovered.</p>
          <Link className="dark-button" to="/shop">
            EXPLORE SNEAKERS <ArrowRight size={18} />
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <article
                className="cart-item"
                key={`${item.id}-${item.size}`}
              >
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <div className="product-brand">{item.brand}</div>
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <div className="quantity-control small-quantity">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.size,
                          Math.max(1, item.quantity - 1),
                        )
                      }
                    >
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.size,
                          Math.min(10, item.quantity + 1),
                        )
                      }
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="cart-item-end">
                  <strong>{money(item.price * item.quantity)}</strong>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    <Trash2 size={17} /> REMOVE
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="order-summary">
            <h2>ORDER SUMMARY</h2>
            <div>
              <span>Subtotal</span>
              <strong>{money(subtotal)}</strong>
            </div>
            <div>
              <span>Shipping</span>
              <strong>{subtotal >= 4999 ? "FREE" : "₹199"}</strong>
            </div>
            <div className="summary-total">
              <span>Estimated total</span>
              <strong>
                {money(subtotal + (subtotal >= 4999 ? 0 : 199))}
              </strong>
            </div>
            <button
              className="dark-button full-button"
              onClick={() =>
                navigate("/checkout", {
                  state: { total: subtotal + (subtotal >= 4999 ? 0 : 199) },
                })
              }
            >
              PROCEED TO CHECKOUT <ArrowRight size={18} />
            </button>
            <p className="summary-note">
              Checkout is a student-project demonstration. No real
              payment will be processed.
            </p>
            <Link to="/shop" className="continue-shopping">
              ← CONTINUE SHOPPING
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}

function Wishlist({ wishlist, toggleWishlist, addToCart }) {
  const savedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link to="/">HOME</Link> / WISHLIST
      </div>
      <div className="page-title">
        <div className="eyebrow">THE PAIRS YOU LOVE</div>
        <h1>YOUR WISHLIST.</h1>
      </div>

      {savedProducts.length ? (
        <div className="product-grid">
          {savedProducts.map((product) => (
            <div className="wishlist-product" key={product.id}>
              <ProductCard
                product={product}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Heart size={45} />
          <h2>Keep the good ones close.</h2>
          <p>Save your favourite sneakers here for later.</p>
          <Link to="/shop" className="dark-button">
            DISCOVER THE COLLECTION
          </Link>
        </div>
      )}
    </main>
  );
}

function AuthPage({ type, onLogin }) {
  const isSignup = type === "signup";
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const apiUrl = isSignup
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(isSignup ? { name: name.trim() } : {}),
          email: email.trim(),
          password,
        }),
      });

      const responseText = await response.text();
      let data;

      try {
        data = JSON.parse(responseText);
      } catch {
        console.error("Expected JSON but received:", responseText);
        throw new Error(
          `API returned non-JSON (HTTP ${response.status}). Check the backend route. ` +
            responseText.slice(0, 120)
        );
      }

      if (!response.ok) {
        throw new Error(data.message || "Unable to authenticate.");
      }

      if (data.token) {
        localStorage.setItem("sneakpeak_token", data.token);
      }

      onLogin(data);
      navigate("/account");
    } catch (error) {
      console.error("Authentication error:", error);
      setMessage(
        error.message === "Failed to fetch"
          ? "Backend connection failed. Check that the server is running on port 5000."
          : error.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-visual">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85"
          alt="Sneaker collection"
        />
        <div className="auth-visual-copy">
          <div className="eyebrow">WELCOME TO SNEAKPEAK</div>
          <h2>GOOD THINGS START WITH THE RIGHT PAIR.</h2>
        </div>
      </div>

      <div className="auth-form-wrap">
        <div className="eyebrow">
          {isSignup ? "JOIN THE COMMUNITY" : "WELCOME BACK"}
        </div>
        <h1>{isSignup ? "CREATE ACCOUNT." : "GOOD TO SEE YOU."}</h1>
        <p>
          {isSignup
            ? "Create an account to get started with SneakPeak."
            : "Sign in to continue your sneaker journey."}
        </p>

        <form className="auth-form" onSubmit={submit}>
          {isSignup && (
            <label>
              FULL NAME
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
                minLength={2}
                autoComplete="name"
              />
            </label>
          )}

          <label>
            EMAIL ADDRESS
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </label>

          <label>
            PASSWORD
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 8 characters"
              required
              minLength={8}
              autoComplete={isSignup ? "new-password" : "current-password"}
            />
          </label>

          {message && <div className="form-message">{message}</div>}

          <button
            className="dark-button full-button"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "PLEASE WAIT..."
              : isSignup
                ? "CREATE ACCOUNT →"
                : "SIGN IN →"}
          </button>
        </form>

        <div className="auth-switch">
          {isSignup ? "Already have an account?" : "New to SneakPeak?"}{" "}
          <Link to={isSignup ? "/login" : "/signup"}>
            {isSignup ? "Sign in" : "Create an account"}
          </Link>
        </div>
      </div>
    </main>
  );
}

function Account({ user, onLogout }) {
  const navigate = useNavigate();

  if (!user) {
    return (
      <main className="empty-state page-container">
        <UserRound size={45} />
        <h2>Your account, your style.</h2>
        <p>Sign in or create an account to get started.</p>
        <div className="account-buttons">
          <Link className="dark-button" to="/login">
            SIGN IN
          </Link>
          <Link className="outline-button" to="/signup">
            CREATE ACCOUNT
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-container account-page">
      <div className="eyebrow">YOUR PERSONAL SPACE</div>
      <h1>HELLO, {user.name || "SNEAKER LOVER"}.</h1>
      <div className="account-card">
        <div className="account-avatar">
          {(user.name || "S").charAt(0).toUpperCase()}
        </div>
        <div>
          <h2>{user.name || "Sneaker Lover"}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="account-links">
        <Link to="/shop">Continue shopping <ArrowRight size={18} /></Link>
        <Link to="/cart">View your bag <ArrowRight size={18} /></Link>
        <Link to="/wishlist">View your wishlist <ArrowRight size={18} /></Link>
      </div>
      <button
        className="outline-button"
        onClick={() => {
          onLogout();
          navigate("/");
        }}
      >
        SIGN OUT
      </button>
    </main>
  );
}

function About() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link to="/">HOME</Link> / OUR STORY
      </div>
      <section className="about-hero">
        <div className="eyebrow">THE STORY BEHIND THE STEP</div>
        <h1>IT'S MORE THAN A SHOE.</h1>
        <p>
          It's how you move through the world. How you express yourself.
          How an ordinary day becomes your kind of day.
        </p>
      </section>

      <section className="about-grid">
        <img
          src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=85"
          alt="Sneaker style"
        />
        <div>
          <div className="eyebrow">OUR PHILOSOPHY</div>
          <h2>LESS NOISE. MORE PERSONALITY.</h2>
          <p>
            SneakPeak is a student-built sneaker-shopping experience
            created around one idea: finding the right sneaker should
            feel exciting, simple, and personal.
          </p>
          <p>
            From everyday essentials to statement-making styles, our
            curated collection makes it easy to explore different
            looks and find a pair that fits your everyday life.
          </p>
          <Link to="/shop" className="dark-button">
            EXPLORE THE COLLECTION <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <div className="about-values">
        <div><span>01</span><h3>STYLE FIRST</h3><p>Discover styles for every mood
          . Discover your signature look.</p></div>
        <div><span>02</span><h3>EVERYDAY COMFORT</h3><p>Find pairs made for your daily moves.</p></div>
        <div><span>03</span><h3>YOUR OWN PACE</h3><p>Wear what feels right to you.</p></div>
      </div>
    </main>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <main className="page-container">
      <div className="breadcrumb"><Link to="/">HOME</Link> / CONTACT</div>
      <section className="contact-layout">
        <div>
          <div className="eyebrow">WE'RE HERE TO HELP</div>
          <h1>LET'S TALK SNEAKERS.</h1>
          <p>Have a question about a product, your order, or finding the right fit? Send us a message.</p>
          <div className="contact-detail"><strong>EMAIL</strong><span>hello@sneakpeak.example</span></div>
          <div className="contact-detail"><strong>RESPONSE TIME</strong><span>Usually within 1–2 business days</span></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>YOUR NAME<input name="name" placeholder="Full name" required /></label>
          <label>EMAIL ADDRESS<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label>SUBJECT<input name="subject" placeholder="How can we help?" required /></label>
          <label>MESSAGE<textarea name="message" rows="5" placeholder="Write your message..." required /></label>
          {submitted && <div className="form-message">Thanks! Your message has been recorded for this demo.</div>}
          <button className="dark-button full-button" type="submit">SEND MESSAGE <ArrowRight size={18} /></button>
        </form>
      </section>
    </main>
  );
}

function Checkout() {
  const navigate = useNavigate();
  const location = window.history.state?.usr;
  const total = Number(location?.total || 0);
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <main className="empty-state page-container">
        <ShoppingBag size={46} />
        <h1>THANK YOU!</h1>
        <p>Your demo order has been placed. No real payment was processed.</p>
        <Link className="dark-button" to="/shop">CONTINUE SHOPPING</Link>
      </main>
    );
  }

  return (
    <main className="page-container">
      <div className="breadcrumb"><Link to="/">HOME</Link> / CHECKOUT</div>
      <div className="page-title">
        <div className="eyebrow">ONE LAST STEP</div>
        <h1>CHECKOUT.</h1>
      </div>
      <div className="checkout-layout">
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setPlaced(true); }}>
          <h2>DELIVERY DETAILS</h2>
          <label>FULL NAME<input required placeholder="Full name" /></label>
          <label>EMAIL ADDRESS<input required type="email" placeholder="you@example.com" /></label>
          <label>ADDRESS<input required placeholder="House number, street, area" /></label>
          <div className="checkout-fields">
            <label>CITY<input required placeholder="City" /></label>
            <label>PIN CODE<input required inputMode="numeric" pattern="[0-9]{6}" placeholder="6-digit PIN" /></label>
          </div>
          <p className="summary-note">Demo checkout only. Do not enter payment-card details.</p>
          <button className="dark-button full-button" type="submit">PLACE DEMO ORDER <ArrowRight size={18} /></button>
        </form>
        <aside className="order-summary">
          <h2>ORDER SUMMARY</h2>
          <div><span>Order total</span><strong>{money(total)}</strong></div>
          <p className="summary-note">This student project does not collect payments.</p>
          <button className="outline-button full-button" onClick={() => navigate("/cart")}>BACK TO BAG</button>
        </aside>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="empty-state page-container">
      <div className="eyebrow">404 / PAGE NOT FOUND</div>
      <h1>WRONG TURN.</h1>
      <p>The page you're looking for may have moved or doesn't exist.</p>
      <Link to="/" className="dark-button">BACK TO HOME <ArrowRight size={18} /></Link>
    </main>
  );
}

export default function App() {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("sneakpeak_cart") || "[]"); }
    catch { return []; }
  });
  const [wishlist, setWishlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem("sneakpeak_wishlist") || "[]"); }
    catch { return []; }
  });
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("sneakpeak_user") || "null"); }
    catch { return null; }
  });

  function saveCart(nextCart) {
    setCart(nextCart);
    localStorage.setItem("sneakpeak_cart", JSON.stringify(nextCart));
  }

  function addToCart(product, size = "UK 8", quantity = 1) {
    const existing = cart.find((item) => item.id === product.id && item.size === size);
    const nextCart = existing
      ? cart.map((item) => item.id === product.id && item.size === size
          ? { ...item, quantity: Math.min(10, item.quantity + quantity) }
          : item)
      : [...cart, { ...product, size, quantity }];
    saveCart(nextCart);
    alert(`${product.name} added to your bag.`);
  }

  function updateQuantity(id, size, quantity) {
    saveCart(cart.map((item) => item.id === id && item.size === size ? { ...item, quantity } : item));
  }

  function removeFromCart(id, size) {
    saveCart(cart.filter((item) => !(item.id === id && item.size === size)));
  }

  function toggleWishlist(id) {
    const nextWishlist = wishlist.includes(id)
      ? wishlist.filter((item) => item !== id)
      : [...wishlist, id];
    setWishlist(nextWishlist);
    localStorage.setItem("sneakpeak_wishlist", JSON.stringify(nextWishlist));
  }

  function handleLogin(data) {
    const currentUser = data.user || data;
    setUser(currentUser);
    localStorage.setItem("sneakpeak_user", JSON.stringify(currentUser));
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem("sneakpeak_user");
    localStorage.removeItem("sneakpeak_token");
  }

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header
  cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
  wishlistCount={wishlist.length}
  user={user}
  onLogout={handleLogout}
/>
        <Routes>
          <Route path="/" element={<Home wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart} />} />
          <Route path="/shop" element={<Shop wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart} />} />
          <Route path="/signup" element={<AuthPage type="signup" onLogin={handleLogin} />} />
          <Route path="/login" element={<AuthPage type="login" onLogin={handleLogin} />} />
          <Route path="/account" element={<Account user={user} onLogout={handleLogout} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
