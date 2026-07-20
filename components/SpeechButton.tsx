"use client";

type SpeechButtonProps = {
  text: string;
};

export default function SpeechButton({ text }: SpeechButtonProps) {
  const speak = () => {
    if (!window.speechSynthesis) {
      alert("Your browser doesn't support speech synthesis.");
      return;
    }

    // 清空之前可能残留的播放队列
    window.speechSynthesis.cancel();

    // 等待一小会儿再播放，避免 Chrome interrupted
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);

      utterance.lang = "en-US";
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;

      window.speechSynthesis.speak(utterance);
    }, 100);
  };

  return (
    <button
      onClick={speak}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-lg transition hover:bg-green-200 active:scale-95"
      title="Play pronunciation"
    >
      🔊
    </button>
  );
}