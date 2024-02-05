import Link from "next/link";

function BackToMain() {
  return (
    <Link href="/" className="text-white font-bold">
      {"<"} ပင်မစာမျက်နှာသို့ပြန်သွားမည်
    </Link>
  );
}

export default BackToMain;
