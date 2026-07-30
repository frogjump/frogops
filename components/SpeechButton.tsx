"use client";

type SpeechButtonProps = {
  src: string;
};

export default function SpeechButton({ src }: SpeechButtonProps) {
  const play = () => {
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <button
      onClick={play}
      className="ml-2 rounded-full bg-green-100 px-3 py-2 hover:bg-green-200"
    >
      🔊
    </button>
  );
}