import BackToMain from "@/components/BackToMain";
import Image from "next/image";

function NewsPage() {
  return (
    <section className="grid grid-cols-1 gap-5 px-5">
      <BackToMain />
      <p className="bg-yellow-300 p-5 text-center rounded-lg">
        ဤစာမျက်နှာအား စတင်ပြုလုပ်ဆဲဖြစ်သည်။
      </p>
      <div className="bg-gray-100 p-5 rounded-lg grid gap-2 max-w-[500px]">
        <Image
          src="/images/kanghoon.jpeg"
          alt="Kang Hoon"
          width={500}
          height={500}
        />
        <h3 className="text-lg font-bold">
          Kang Hoon Confirmed To Join Running Man As First Interim Member
        </h3>
        <p>
          Kang Hoon will make his first appearance as the interim member on
          “Running Man” in Episode 706.
        </p>
      </div>
    </section>
  );
}

export default NewsPage;
