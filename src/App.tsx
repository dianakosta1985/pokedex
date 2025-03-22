import styles from "./styles.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import FavoritePage from "./pages/FavoritePage";
import { useNavigate, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isDetailPage = location.pathname.startsWith("/pokemon/");

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
              alt="Pokemon Logo"
              className={styles.logo}
            />
          </Link>
          <button
            className={styles.favorite}
            onClick={() => navigate("/facorites")}
          >
            <img src="/icons/star.svg" width={40} alt="star" />
          </button>
        </nav>
      </header>
      <main className={isDetailPage ? styles.whiteBg : styles.greyBg}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<DetailsPage />} />
          <Route path="/facorites" element={<FavoritePage />} />
        </Routes>
      </main>
    </>
  );
}
