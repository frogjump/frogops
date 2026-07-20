import learningPlan from "@/data/learningPlan.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import SpeechButton from "@/components/SpeechButton";

type Lesson = {
  day: number;
  mission: string;
  vocabulary: string[];
  expression: string;
  script: string;
  challenge: string;
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return (learningPlan as Lesson[]).map((item) => ({
    id: String(item.day),
  }));
}

export default async function DayPage({ params }: PageProps) {
  const { id } = await params;

  const day = Number(id);

  if (Number.isNaN(day)) {
    notFound();
  }

  const lesson = (learningPlan as Lesson[]).find(
    (item) => item.day === day
  );

  if (!lesson) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white">
      <div className="mx-auto max-w-4xl px-6 py-10">

        {/* Hero */}
        <section className="rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 shadow-lg">
          <div className="text-5xl mb-4">🐸</div>

          <p className="text-green-100 uppercase tracking-widest text-sm">
            Product Ops English
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Day {lesson.day}
          </h1>

          <p className="mt-4 text-lg text-green-50">
            {lesson.mission}
          </p>
        </section>

        {/* Vocabulary */}
        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            📚 Vocabulary
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {lesson.vocabulary.map((word) => (
              <div
                key={word}
                className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
  <span className="text-lg font-semibold text-green-700">
    {word}
  </span>

  <SpeechButton text={word} />
</div>
              </div>
            ))}
          </div>
        </section>

        {/* Expression */}
        <section className="mt-10 rounded-3xl bg-white p-7 shadow-sm border border-gray-100">
          <h2 className="mb-4 text-2xl font-bold">
            💬 Expression
          </h2>

          <div className="flex items-start justify-between gap-4">
  <p className="text-lg leading-8 text-gray-700">
    {lesson.expression}
  </p>

  <SpeechButton text={lesson.expression} />
</div>
        </section>

        {/* Script */}
        <section className="mt-8 rounded-3xl bg-white p-7 shadow-sm border border-gray-100">
          <h2 className="mb-4 text-2xl font-bold">
            📝 Script
          </h2>

          <p className="whitespace-pre-line leading-8 text-gray-700">
            {lesson.script}
          </p>
        </section>

        {/* Challenge */}
        <section className="mt-8 rounded-3xl border-2 border-green-200 bg-green-50 p-7 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-green-800">
            🎯 Today's Challenge
          </h2>

          <p className="leading-8 text-green-900">
            {lesson.challenge}
          </p>
        </section>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between">

          {lesson.day > 1 ? (
            <Link
              href={`/day/${lesson.day - 1}`}
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm transition hover:bg-gray-50"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/"
            className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-green-700"
          >
            🏠 Home
          </Link>

          {lesson.day < 30 ? (
            <Link
              href={`/day/${lesson.day + 1}`}
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm transition hover:bg-gray-50"
            >
              Next →
            </Link>
          ) : (
            <div />
          )}
        </div>

      </div>
    </main>
  );
}