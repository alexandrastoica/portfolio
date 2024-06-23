'use client'

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <div>
      <h2>
        Something went wrong! <span aria-hidden>🫠</span>
      </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
