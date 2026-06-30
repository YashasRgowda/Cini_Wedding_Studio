"use client";

// Elegant oval monogram emblem, echoing the reference brand mark.
// `tone` controls the stroke/text color so it works on light and dark grounds.
export default function Emblem({ className = "", tone = "wine", initials = "YS" }) {
  const color = tone === "cream" ? "var(--cream)" : "var(--wine)";

  return (
    <svg
      viewBox="0 0 120 150"
      role="img"
      aria-label={`${initials} monogram`}
      className={className}
      style={{ color }}
    >
      {/* outer oval ring */}
      <ellipse
        cx="60"
        cy="75"
        rx="48"
        ry="68"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.85"
      />
      {/* thin inner oval ring */}
      <ellipse
        cx="60"
        cy="75"
        rx="43"
        ry="63"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.55"
      />
      {/* script initials */}
      <text
        x="60"
        y="86"
        textAnchor="middle"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-script), cursive",
          fontSize: "44px",
        }}
      >
        {initials}
      </text>
    </svg>
  );
}
