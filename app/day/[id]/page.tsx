import learningPlan from "@/data/learningPlan.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import SpeechButton from "@/components/SpeechButton";

type Vocabulary = {
  word: string;
  translation: string;
};

type Expression = {
  text: string;
  translation: string;
};

type Challenge = {
  text: string;
  translation: string;
};

type Script =
  | string
  | {
      text: string;
      translation: string;
    };

type Lesson = {
  day: number;
  title: string;
  mission: string;
  vocabulary: Vocabulary[];
  expression: Expression;
  script: Script;
  challenge: Challenge;
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return (learningPlan as Lesson[]).map((lesson) => ({
    id: lesson.day.toString(),
  }));
}

export default async function DayPage({ params }: PageProps) {
  const { id } = await params;

  const lesson = (learningPlan as Lesson[]).find(
    (item) => item.day === Number(id)
  );

  if (!lesson) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5FFF7] px-5 py-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <section className="mb-6 rounded-3xl bg-green-500 p-6 text-white shadow-lg">
          <div className="text-sm opacity-80">
            Day {lesson.day}
          </div>

          <h1 className="mt-2 text-3xl font-bold">
            {lesson.title}
          </h1>

          <p className="mt-3">
            {lesson.mission}
          </p>
        </section>


        {/* Vocabulary */}
        <section className="mb-6 rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-xl font-bold">
            📚 Vocabulary
          </h2>

          <div className="space-y-3">

            {lesson.vocabulary.map((item) => (
              <div
                key={item.word}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <div>
                  <div className="text-lg font-semibold">
                    {item.word}
                  </div>

                  <div className="text-gray-500">
                    {item.translation}
                  </div>
                </div>

                <SpeechButton src={`/audio/day${lesson.day}/vocabulary/${item.word}.mp3`} />

              </div>
            ))}

          </div>

        </section>


        {/* Expression */}
        <section className="mb-6 rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-3 text-xl font-bold">
            💬 Expression
          </h2>


          <div className="flex items-center">

            <div className="flex-1">

              <div className="font-semibold">
                {lesson.expression.text}
              </div>

              <div className="mt-1 text-gray-500">
                {lesson.expression.translation}
              </div>

            </div>


           <SpeechButton
  src={`/audio/day${lesson.day}/expression/expression.mp3`}
/>

          </div>

        </section>


        {/* Script */}
        <section className="mb-6 rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-3 text-xl font-bold">
            📝 Script
          </h2>


          {typeof lesson.script === "string" ? (

            <p className="leading-8">
              {lesson.script}
            </p>

          ) : (

            <>
              <p className="font-semibold leading-8">
                {lesson.script.text}
              </p>

              <p className="mt-2 text-gray-500">
                {lesson.script.translation}
              </p>
            </>

          )}

        </section>


        {/* Challenge */}
        <section className="mb-10 rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-3 text-xl font-bold">
            🎯 Challenge
          </h2>


          <p className="font-semibold">
            {lesson.challenge.text}
          </p>


          <p className="mt-2 text-gray-500">
            {lesson.challenge.translation}
          </p>

        </section>


        {/* Navigation */}
        <div className="flex justify-between">

          {lesson.day > 1 ? (
            <Link
              href={`/day/${lesson.day - 1}`}
              className="rounded-xl bg-white px-5 py-3 shadow"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}


          <Link
            href="/"
            className="rounded-xl bg-green-500 px-5 py-3 text-white shadow"
          >
            Home
          </Link>


          {lesson.day < learningPlan.length ? (
            <Link
              href={`/day/${lesson.day + 1}`}
              className="rounded-xl bg-white px-5 py-3 shadow"
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