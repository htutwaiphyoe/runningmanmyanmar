import { questions } from "@/data/questions";
import Link from "next/link";

function QuestionsPage() {
  return (
    <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-10 gap-5">
      <Link href="/" className="text-white font-bold">
        {"<"} ပင်မစာမျက်နှာသို့ပြန်သွားမည်
      </Link>
      {questions.map((question, i) => (
        <div key={i} className="bg-gray-100 p-5 rounded-lg grid gap-2">
          <p className="text-gray-900">မေးခွန်း: {question.question}</p>
          <p className="font-bold">အပိုင်း: {question.answer}</p>
        </div>
      ))}
    </section>
  );
}

export default QuestionsPage;
