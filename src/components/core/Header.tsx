import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-sky-200 px-6 py-4">
      <Image src="/favicon.ico" alt="logo" width="60" height="60" />
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
