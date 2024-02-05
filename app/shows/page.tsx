import BackToMain from "@/components/BackToMain";

function NewsPage() {
  return (
    <section className="grid grid-cols-1 gap-5 px-5">
      <BackToMain />
      <p className="bg-yellow-300 p-5 text-center rounded-lg">
        ဤစာမျက်နှာအား စတင်ပြုလုပ်ဆဲဖြစ်သည်။
      </p>
    </section>
  );
}

export default NewsPage;
