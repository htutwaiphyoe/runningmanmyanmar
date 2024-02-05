import BackToMain from "@/components/BackToMain";
import { members } from "@/data/members";

function MembersPage() {
  return (
    <section className="grid grid-cols-1 gap-5 px-5">
      <BackToMain />
      <p className="bg-yellow-300 p-5 text-center rounded-lg">
        ဤစာမျက်နှာအား စတင်ပြုလုပ်ဆဲဖြစ်သည်။
      </p>
      {members.map((member, i) => (
        <div key={i} className="bg-gray-100 p-5 rounded-lg grid gap-2">
          <p className="text-gray-900">
            {member.name} ({member.burmese})
          </p>
          <p className="font-bold capitalize">
            {member.from} - {member.to}
          </p>
        </div>
      ))}
    </section>
  );
}

export default MembersPage;
