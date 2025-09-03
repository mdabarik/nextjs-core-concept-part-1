import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-red-100  border-b  w-[90%] mx-auto flex items-center justify-between py-3">
      <div>
        <Link href="/">MySite</Link>
      </div>
      <div className="flex w-[50%] justify-between m-3">
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <Link href="/login">Login</Link>
        </div>
        <div>
          <Link href="/register">Register</Link>
        </div>
        <div>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
