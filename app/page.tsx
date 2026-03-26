import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (

    <>首頁</>

    // <div className="flex h-full">

    //   <div className="bg-white w-[320px] h-full p-4">
        
    //     <div className=" flex justify-center items-center w-full">
    //       <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden">
    //         <Image src="/pfp.png" alt="pfp" width={80} height={80} />
    //       </div>
    //     </div>

    //     <div className="text-center">姓名</div>
    //     <div className="text-center">簡介</div>

    //     <div className="flex gap-2">
    //       <div>社群連結</div>
    //       <div>社群連結</div>
    //       <div>社群連結</div>
    //     </div>

        

    //     <Link href="/about">
    //       <div className="bg-gray-300 p-[16px] rounded-md">關於我</div>
    //     </Link>

    //     <Link href="/hobby">
    //       <div className="bg-gray-300 p-[16px] rounded-md">我的興趣</div>
    //     </Link>

        
    //     <div className="bg-gray-300 p-[16px] mt-2 rounded-md">設計專案</div>
    //     <div className="bg-gray-300 p-[16px] mt-2 rounded-md">程式專案</div>

    //   </div>

    //   <div className="bg-gray-200 w-full h-full">右邊</div>

    // </div>
  );
}
