import Image from "next/image";
import Link from "next/link";
import Menu from "../../component/Menu"

export default function About() {

  return (
      <div className="flex h-full">
        <div className="sm:hidden absolute ">
          返回
        </div>
        <div className="sm:block hidden">
          <Menu />
        </div>
        <div className="bg-red-500 w-full">
          About
        </div>
      </div>
  );
}
