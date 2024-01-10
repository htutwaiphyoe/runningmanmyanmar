function HomePage() {
  return (
    <main className="w-full flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl font-bold">Running Man Myanmar Wiki</h1>
      <p>Website is still under development.</p>
      <h3 className="text-xl font-bold">မေးခွန်းများ</h3>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 px-10 gap-5">
        <div className="bg-gray-100 p-5 rounded-lg grid gap-2">
          <p className="text-gray-900">
            မေးခွန်း: အသံထွက်ရင် အရိုက်ခံရတာလေ ရီသံထွက်အောင်
            ပုံဆိုးပန်းဆိုးတွေပြပြီးရီအောင်လုပ်ကြတာ Korea ရှေးခေတ်
            နန်းတွင်းကားတွေမှာအပြစ်ပေးတဲ့ ဒုတ်ကြီးနဲ့ ရိုက်တာ
          </p>
          <p className="font-bold">အပိုင်း: 398</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg grid gap-2">
          <p className="text-gray-900">
            မေးခွန်း: ဆပ်ပြာရေကန်လုပ်ပီးဘောလုံးသေးသေးလေးတေ
            အများဆုံးရတဲ့အသင်းကနိုင်တာ Couple ဆော့ရတာဟုတ်တယ် အစက
            နိုင်အောင်ဆော့ရင်းနဲ့ နောက်တော့ နိုင်တဲ့သူက
            ဂင်ဂျုံးကုတို့အတွဲနဲ့ဆော့ရမှာမို့လို့ ရှုံးအောင် တခြားအသင်းကို
            ဘောလုံးတေ ပြန်တဲ့အပိုင်း
          </p>
          <p className="font-bold">အပိုင်း: 513</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg grid gap-2">
          <p className="text-gray-900">
            မေးခွန်း: GDတို့ပါတဲ့ Epလေးပြောပြကြပါလားဟင် ဂျီဟို ကို
            ဝိုင်းလုတဲ့အခန်းပါ
          </p>
          <p className="font-bold">အပိုင်း: 163</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg grid gap-2">
          <p className="text-gray-900">
            မေးခွန်း: MCကြီး မျက်ခုံးလားမသိဘူး ကွဲသွားလို့ ချုပ်လိုက်ရသေးတယ်နော်
            အဲ့တာကို မနားနိုင်ဘူး သူ့မှာ. ရိုက်ကူးရေးဆက်လုပ်တာပဲ.
          </p>
          <p className="font-bold">အပိုင်း: 405</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg grid gap-2">
          <p className="text-gray-900">
            မေးခွန်း: suzy sulli တို့လာတာ အပိုင်းဘယ်လောက်လဲ
          </p>
          <p className="font-bold">အပိုင်း: 55</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg grid gap-2">
          <p className="text-gray-900">
            မေးခွန်း: ဂျက်ကီချမ်း လာတဲ့ အပိုင်းးလေ
          </p>
          <p className="font-bold">အပိုင်း: 135</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg grid gap-2">
          <p className="text-gray-900">
            မေးခွန်း: ဂျီဆော့ဂျင်မွေးနေ့လား ဘာနေ့လဲမသိဘူး ဂွမ်ဆူရှိသေးတယ်
            အိမ်ထဲမှာကြွက်ဖမ်းတဲ့gameဆော့ကြတာ ဂျုံမုန့်တွေနဲ့ရော
            အဲ့အပိုင်းသိကြလားရှင့်...
          </p>
          <p className="font-bold">အပိုင်း: 545</p>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
