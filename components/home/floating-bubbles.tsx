export function FloatingBubbles() {
  const bubbles = [
    { size: 10, left: "8%", top: "28%", delay: "0s", duration: "7s" },
    { size: 7, left: "17%", top: "72%", delay: "1.4s", duration: "9s" },
    { size: 13, left: "29%", top: "18%", delay: "2s", duration: "8s" },
    { size: 8, left: "42%", top: "78%", delay: "0.7s", duration: "10s" },
    { size: 11, left: "58%", top: "20%", delay: "1.8s", duration: "9s" },
    { size: 6, left: "68%", top: "67%", delay: "3s", duration: "7s" },
    { size: 14, left: "81%", top: "25%", delay: "0.4s", duration: "11s" },
    { size: 8, left: "91%", top: "73%", delay: "2.5s", duration: "8s" },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className="floating-bubble absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            top: bubble.top,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration,
          }}
        />
      ))}
    </div>
  );
}