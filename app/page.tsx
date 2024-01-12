import { questions } from "@/data/questions";

function HomePage() {
  return (
    <main className="w-full flex flex-col gap-4 justify-center items-center bg-image min-h-screen">
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-10 gap-5">
        {questions.map((question, i) => (
          <div key={i} className="bg-gray-100 p-5 rounded-lg grid gap-2">
            <p className="text-gray-900">မေးခွန်း: {question.question}</p>
            <p className="font-bold">အပိုင်း: {question.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;
