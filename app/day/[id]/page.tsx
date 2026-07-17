import learningPlan from "@/data/learningPlan.json";
import { notFound } from "next/navigation";
import Link from "next/link";

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
    <main
      style={{
        maxWidth: 760,
        margin: "40px auto",
        padding: "24px",
        fontFamily: "Arial",
        lineHeight: 1.8,
      }}
    >
      <h1>🐸 Product Ops English</h1>

      <p>
        <strong>Day {lesson.day}</strong>
      </p>

      <h2>{lesson.mission}</h2>

      <hr />

      <h3>📚 Vocabulary</h3>
      <ul>
        {lesson.vocabulary.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>

      <h3>💬 Expression</h3>
      <p>{lesson.expression}</p>

      <h3>📝 Script</h3>
      <p>{lesson.script}</p>

      <h3>🎯 Challenge</h3>
      <p>{lesson.challenge}</p>

      <hr />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 40,
        }}
      >
        {lesson.day > 1 ? (
          <Link href={`/day/${lesson.day - 1}`}>
            ← Previous
          </Link>
        ) : (
          <span />
        )}

        <Link href="/">🏠 Home</Link>

        {lesson.day < 30 ? (
          <Link href={`/day/${lesson.day + 1}`}>
            Next →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </main>
  );
}