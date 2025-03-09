/* eslint-disable react/no-unescaped-entities */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ConsultationSection() {
  return (
    <section className="max-w-full  mx-11.5 px-5 py-1">
      <div className="grid h-full md:h-96 grid-cols-1 md:grid-cols-2 gap-5 my-36">
        {/* Left Card */}
        <div className="bg-gray-100 h-full p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Savollaringiz qoldimi ?</h2>
          <p className="text-gray-700">
            Agar xizmatlarimiz yoki mahsulotlarimiz haqida qo'shimcha savollaringiz bo'lsa, biz bilan bog'lanishdan tortinmang.
            Biz doimo sizning savollaringizga javob berishga va kerakli yordamni ko'rsatishga tayyormiz.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-gray-100 h-full p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Bepul konsultatsiya</h2>
          <p className="text-gray-700 mb-5">
            Telefon raqamingizni yozib qoldiring, biz sizga qo‘ng‘iroq qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
          </p>
          <form className="flex flex-col gap-3">
            <Input placeholder="Ismingiz" className="w-[75%]" />
            <Input placeholder="+998" className="w-[75%]" />
            <Button className="bg-[#001e5f] text-white rounded-full w-[75%] hover:bg-[#001a52]">
              Yuborish
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
