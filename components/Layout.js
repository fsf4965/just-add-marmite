import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">

          <h1>
            <span>Recipes For</span>
            <span>Quick Dinners</span>
          </h1>
          <h2>Spend less time cooking!</h2>

        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2024 Recipes For Quick Dinners</p>
      </footer>
    </div>
  );
}