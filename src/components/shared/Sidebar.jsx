import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col p-4 text-white justify-around bg-gray-400">
      <Link href="/dashboard">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/settings">Settings</Link>
    </div>
  );
};

export default Sidebar;
