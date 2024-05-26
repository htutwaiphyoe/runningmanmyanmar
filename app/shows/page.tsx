import BackToMain from "@/components/BackToMain";

function NewsPage() {
  return (
    <section className="grid grid-cols-1 gap-5 px-5">
      <BackToMain />
      <p className="bg-yellow-300 p-5 text-center rounded-lg">
        ဤစာမျက်နှာအား စတင်ပြုလုပ်ဆဲဖြစ်သည်။
      </p>
      <div className="bg-gray-100 p-5 rounded-lg grid gap-2">
        <h2 className="text-xl font-bold">Yoo Jae Suk</h2>
        <ul className="list-disc ml-5">
          <li>Running Man</li>
          <li>Hangout with Yoo</li>
          <li>Yoo Quiz</li>
          <li>Whenever Possible</li>
          <li>Synchro U</li>
          <li>The Zone</li>
          <li>Korea No.1</li>
          <li>Infinite Challenge</li>
          <li>Happy Together</li>
          <li>Family Outing</li>
          <li>X-Man</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-5 rounded-lg grid gap-2">
        <h2 className="text-xl font-bold">Ji Suk Jin</h2>
        <ul className="list-disc ml-5">
          <li>Running Man</li>
          <li>Bro Marble</li>
          <li>Outrun by running man</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-5 rounded-lg grid gap-2">
        <h2 className="text-xl font-bold">Kim Jong Kook</h2>
        <ul className="list-disc ml-5">
          <li>Running Man</li>
          <li>My Little Old Boy</li>
          <li>Outrun by running man</li>
          <li>Family Outing</li>
          <li>X-Man</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-5 rounded-lg grid gap-2">
        <h2 className="text-xl font-bold">Haha</h2>
        <ul className="list-disc ml-5">
          <li>Running Man</li>
          <li>Hangout with Yoo</li>
          <li>Outrun by running man</li>
          <li>Infinite Challenge</li>
          <li>Haha Bus</li>
          <li>X-Man</li>
        </ul>
      </div>
    </section>
  );
}

export default NewsPage;
