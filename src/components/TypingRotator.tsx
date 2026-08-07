"use client";

import { useEffect, useMemo, useState } from "react";

type TypingRotatorProps = {
  phrases: string[];
  typingMs?: number;
  deletingMs?: number;
  pauseMs?: number;
};

export default function TypingRotator({
  phrases,
  typingMs = 55,
  deletingMs = 32,
  pauseMs = 2200,
}: TypingRotatorProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const longestPhrase = useMemo(
    () => phrases.reduce((longest, phrase) => (phrase.length > longest.length ? phrase : longest), ""),
    [phrases],
  );

  useEffect(() => {
    const phrase = phrases[phraseIndex] ?? "";

    if (!deleting && text === phrase) {
      const pause = window.setTimeout(() => setDeleting(true), pauseMs);
      return () => window.clearTimeout(pause);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setPhraseIndex((index) => (index + 1) % phrases.length);
      return;
    }

    const delay = deleting ? deletingMs : typingMs;
    const timer = window.setTimeout(() => {
      setText((current) =>
        deleting
          ? phrase.slice(0, current.length - 1)
          : phrase.slice(0, current.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, phraseIndex, phrases, typingMs, deletingMs, pauseMs]);

  return (
    <span className="typing-rotator">
      <span className="typing-rotator-sizer" aria-hidden="true">
        {longestPhrase}|
      </span>
      <span className="typing-rotator-live">
        {text}
        <span className="typing-rotator-cursor" aria-hidden="true">
          |
        </span>
      </span>
    </span>
  );
}
