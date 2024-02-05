import { episodes } from "@/data/shared";
import Link from "next/link";

function EpisodesPage() {
  return (
    <section className="grid grid-cols-1 gap-5 px-5">
      <Link href="/" className="text-white font-bold">
        {"<"} ပင်မစာမျက်နှာသို့ပြန်သွားမည်
      </Link>
      <p className="bg-yellow-300 p-5 text-center rounded-lg">
        ဤစာမျက်နှာအား စတင်ပြုလုပ်ဆဲဖြစ်သည်။ အောက်ပါနေရာများတွင်
        သွားရောက်ကြည့်ရှုနိုင်သည်။
      </p>
      {episodes.map((episode) => (
        <div
          className="bg-gray-100 p-5 rounded-lg grid gap-1"
          key={episode.link}
        >
          <p className="text-gray-900">{episode.text}</p>
          <a href={episode.link} target="_blank" className="break-all">
            {episode.link}
          </a>
        </div>
      ))}
    </section>
  );
}

export default EpisodesPage;
