import Image from 'next/image'
export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1">
        <Image src="/recipe1.jpeg" width={2000} height={2000} alt="" />
      </div>
      <div className="flex-1 pt-10 px-18">
        <h1 className="text-[28px] font-bold">ひとくちタコライス</h1>
        <h2 className="mt-5">
          小さくて手に取りやすく食べやすい。見た目もとっても可愛いタコライス。
          様々なバリエーションで盛り付けたらできあがりです。
        </h2>
        <div className="border-b border-solid border-gray-1 pb-1 mt-10">
          <p className="text-[20px] font-bold">材料（2人分）</p>
        </div>
        <div className="mt-4">
          {[...Array(5)].map((i) => (
            <div key={i} className="border-b border-dotted border-gray-1 p-1">
              <p>テキスト</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
