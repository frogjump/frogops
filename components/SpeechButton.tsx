"use client";

type SpeechButtonProps = {
  text: string;
  type?: "vocabulary" | "expression";
  fileName?: string;
};

export default function SpeechButton({
  text,
  type = "vocabulary",
  fileName,
}: SpeechButtonProps) {

  const playAudio = () => {
    const audio = new Audio(
      `/audio/${type}/${fileName ?? text}.mp3`
    );

    audio.play();
  };


  return (
    <button
      onClick={playAudio}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-lg transition hover:bg-green-200 active:scale-95"
      title="Play pronunciation"
    >
      🔊
    </button>
  );
}