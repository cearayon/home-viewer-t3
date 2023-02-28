import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-gray-200">
      <ul>
        <li>
          <Link href="/api/home">Home</Link>
        </li>

        <li>
          <Link href="/api/about">About</Link>
        </li>

        <li>
          <Link href="/api/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
