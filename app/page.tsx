import Link from "next/link";
import { routes } from "@/data/shared";

function HomePage() {
  return (
    <section className="grid gap-10 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {routes.map((route) => (
        <div
          className="bg-white border p-10 rounded-lg text-center"
          key={route.href}
        >
          <Link href={route.href}>{route.title}</Link>
        </div>
      ))}
    </section>
  );
}

export default HomePage;
