import BackToMain from "@/components/BackToMain";
import { episodes } from "@/data/shared";

function EpisodesPage() {
  return (
    <section className="grid grid-cols-1 gap-5 px-5">
      <BackToMain />
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
