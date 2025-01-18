export default function Home() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* 로고 */}
        <div className="mb-6 w-1/6">
          <div className="bg-white text-center text-black font-semibold px-4 py-2 rounded shadow">
            로고
          </div>
        </div>
  
        {/* 메인 콘텐츠 */}
        <div className="bg-white w-[1000px] h-[550px] rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-[50px] font-bold mb-4">환영합니다!</h1>
          <p className="text-gray-600 mb-8">
            서비스 소개 문구 넣을거예요
            <br />
            아마 두 줄 정도 쓰지 않을까요...
          </p>
  
          {/* 버튼 영역 */}
          <div className="flex items-center justify-center gap-40">
            <a
              className="border border-gray-300 w-[300px] h-[300px] rounded-lg p-6 shadow hover:bg-gray-100 flex flex-col items-center justify-center"
              href="/auth/senior"
            >
              <img
                src="/imgs/oldman.png" // 노인 이미지를 대체
                alt="노인"
                className="w-[150px] h-[150px] object-cover mb-4"
              />
              <span className="text-lg font-semibold">노인</span>
            </a>
            <a
              className="border border-gray-300 w-[300px] h-[300px] rounded-lg p-6 shadow hover:bg-gray-100 flex flex-col items-center justify-center"
              href="/auth/family"
            >
              <img
                src="/imgs/family.png" // 가족 이미지를 대체
                alt="가족"
                className="w-[150px] h-[150px] object-cover mb-4"
              />
              <span className="text-lg font-semibold">가족</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
  