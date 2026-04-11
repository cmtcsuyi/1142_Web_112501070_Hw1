import Image from "next/image";
import Link from "next/link";
import Menu from "../../component/Menu";

export default function Game() {

  return (
    <>
      <div className="flex h-full">
        <Link href="/"className="sm:hidden absolute right-2 top-2 bg-white">
          返回
        </Link>
        <div className="sm:block hidden">
          <Menu />
        </div>
          <div className="bg-bg-[#d1d1d1] h-full w-full p-3">

              <div className="text-[32px] text-bold">專案</div>
              <div className="text-[16px] text-gray-600">這裡收錄</div>

              <div className="grid grid-cols-3 gap-4 m-[26px]">
                <div className="bg-amber-50 rounded-2xl h-full flex justify-center items-center row-span-2
                                  bg-[url(/pfp.png)] bg-center bg-cover relative overflow-hidden
                ">
                  <div className="text-white bg-black/15 w-full h-[80px] flex
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0
                  ">專案1</div>
                
                  
                </div>
                <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案2</div>
                <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案3</div>
                <div className="bg-amber-50 rounded-2xl h-full flex justify-center items-center row-span-2">專案4</div>
                <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案5</div>
                <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案6</div>
                <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案7</div>
                <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案8</div>
                <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案9</div>
            </div>

          </div>
      </div>

  </>
  );
}
