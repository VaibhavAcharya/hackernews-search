import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="pb-lg flex row items-center justify-center gap-md">
      <Image src="/logo.svg" alt="logo" width="48px" height="48px" />
      <Link href="/">
        <a>
          <p>
            <b>HackerNews Search</b>
          </p>
        </a>
      </Link>
    </header>
  );
}
