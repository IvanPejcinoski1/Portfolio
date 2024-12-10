import React, { useState, useEffect } from "react";

interface StyledWord {
  text: string; // Word or phrase to display
  className?: string; // Optional CSS class for styling
  onClick?: () => void; // Optional click handler for the word
}

interface TypewriterProps {
  words: StyledWord[]; // Array of words or styled parts
  typingSpeed?: number; // Typing speed in ms per character
  onDone?: () => void; // Callback when typing finishes
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  onDone,
}) => {
  const [displayedWords, setDisplayedWords] = useState<StyledWord[]>([]); // Words fully typed
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Index of the current word
  const [currentText, setCurrentText] = useState(""); // Current typing text

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const currentWord = words[currentWordIndex].text;
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + currentWord[prev.length]);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else {
        // Word typing completed, move to next
        setDisplayedWords((prev) => [
          ...prev,
          {
            ...words[currentWordIndex],
            className: words[currentWordIndex].className,
          },
        ]);
        setCurrentWordIndex((prev) => prev + 1);
        setCurrentText(""); // Reset current text
      }
    } else if (onDone) {
      onDone();
    }
  }, [currentText, currentWordIndex, words, typingSpeed, onDone]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Keep the text aligned to the top
        height: "18rem", // Set a fixed height for the container (adjust based on your font size)
        width: "1050px",
        overflow: "hidden", // Prevent any text from overflowing
        textAlign: "start", // Center the text horizontally
      }}
    >
      {/* Render fully typed words with number and arrow */}
      {words.map((word, index) => (
        <div key={index} className={word.className}>
          {index < displayedWords.length ? (
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              {/* Number with Arrow */}
              <span
                style={{
                  fontSize: "1.5rem", // Adjust size of number
                  marginRight: "10px",
                  color: "gray", // Set number color to gray
                }}
              >
                {`0${index + 1}`}
              </span>
              <span
                className="text-xl"
                style={{
                  fontSize: "3.5rem", // Make arrow bigger
                  margin: "0 12px",
                  color: "gray", // Set arrow color to gray
                }}
              >
                {"<"}
              </span>
              {/* Text */}
              <span>{word.text}</span>
              {/* Arrow */}
              <span
                className="text-xl"
                style={{
                  fontSize: "3.5rem", // Make arrow bigger
                  margin: "0 12px",
                  color: "gray", // Set arrow color to gray
                }}
              >
                {">"}
              </span>
            </div>
          ) : null}
        </div>
      ))}

      {/* Render the currently typing word with number and arrow */}
      {currentWordIndex < words.length && (
        <div className={words[currentWordIndex].className}>
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            {/* Number with Arrow */}
            <span
              style={{
                fontSize: "1.5rem", // Adjust size of number
                marginRight: "10px",
                color: "gray", // Set number color to gray
              }}
            >
              {`0${currentWordIndex + 1}`}
            </span>
            <span
              className="text-xl"
              style={{
                fontSize: "3.5rem", // Make arrow bigger
                margin: "0 12px",
                color: "gray", // Set arrow color to gray
              }}
            >
              {"<"}
            </span>
            {/* Typing Text */}
            <span>{currentText}</span>
            {/* Arrow */}
            <span
              className="text-xl"
              style={{
                fontSize: "3.5rem", // Make arrow bigger
                margin: "0 12px",
                color: "gray", // Set arrow color to gray
              }}
            >
              {">"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Typewriter;
