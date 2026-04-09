import Image from "next/image";
import Link from "next/link";

export default function Hobby() {

  let projectData = {
    "1": {
      "name": "寵物店",
      "imageUrl": "/pfp.png"
    },
    "2": {
      "name": "aaa",
      "imageUrl": "/pfpv2.png"
    },
  };

  return (
    <>
      <div className="bg-white h-full w-full p-3">

        <div className="text-[32px] text-bold">專案</div>
        <div className="text-[16px] text-gray-600">這裡收錄</div>

        <div className="grid grid-cols-3 gap-4 m-[26px]">

          <div className={`bg-amber-50 rounded-2xl h-full flex justify-center items-center row-span-2
            bg-center bg-cover relative overflow-hidden`}
            style={{ backgroundImage: `url(${projectData["1"]["imageUrl"]})`}}
          >
            
            
            <div className="text-white bg-black/15 w-full h-[80px] flex
                              justify-center items-center backdrop-blur-sm
                              absolute bottom-0
            ">
              { projectData["1"]["name"] }
            </div>
          </div>

          <div className={`bg-amber-50 rounded-2xl h-full flex justify-center items-center row-span-2
            bg-center bg-cover relative overflow-hidden`}
            style={{ backgroundImage: `url(${projectData["2"]["imageUrl"]})`}}
          >

            <div className="text-white bg-black/15 w-full h-[80px] flex
                              justify-center items-center backdrop-blur-sm
                              absolute bottom-0
            ">
              { projectData["2"]["name"] }
            </div>
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
    </>
  );
}
