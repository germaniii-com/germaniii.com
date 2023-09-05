import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between \
    bg-white dark:bg-black "
    >
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>
          Hello, this website is still in development. Please check back later.
        </h1>
      </div>
    </main>
  );
}
