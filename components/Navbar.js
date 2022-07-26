import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h2>
        <Link href="/">Logo</Link>
      </h2>

      <div>
        <ul className={styles.navList}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/documentation">Documentation</Link>
          </li>
          <li>
            <Link href="/library">Library</Link>
          </li>

          {/* authentication */}
          <li>
            <Link href="/account/login">Login</Link>
          </li>
          <li>
            <Link href="/account/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
