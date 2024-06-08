import WrongComponent from "@/components/global/WrongComponent";
import GoodComponent from "@/components/global/GoodComponent";

export default function Home() {
  return (
      <main className="flex flex-row gap-4">
          <div>
              <h1>Components with "use client" directive at top lvl</h1>
              <WrongComponent />
          </div>
          <div>
              <h1>Components without "use client" directive at top lvl</h1>
              <GoodComponent />
          </div>
      </main>
  );
}
