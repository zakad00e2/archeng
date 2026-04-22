type AnimatedHeadingProps = {
  text: string;
  className?: string;
  mode?: 'characters' | 'words' | 'text';
};

export function AnimatedHeading({
  text,
  className,
  mode = 'characters',
}: AnimatedHeadingProps) {
  const words = text.trim().split(/\s+/);

  return (
    <h1 className={['hero-heading', className].filter(Boolean).join(' ')}>
      {mode === 'text' ? <span>{text}</span> : null}
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          className={mode === 'text' ? 'hidden' : 'whitespace-nowrap'}
        >
          {mode === 'characters' ? (
            Array.from(word).map((character, characterIndex) => (
              <span key={`${character}-${characterIndex}`} className="inline-block">
                {character}
              </span>
            ))
          ) : (
            <span className="inline-block">{word}</span>
          )}
          {wordIndex < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </h1>
  );
}
