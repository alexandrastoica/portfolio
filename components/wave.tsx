export function Wave() {
  return (
    <div className="absolute top-[40vh] w-full">
      <svg
        className="block h-12 w-full"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            className="animate-waves"
            id="page-divide"
            fill="hsl(var(--muted)/50%)"
            x="50"
            y="0"
            d="M-160 44c30 0 
            58-18 88-18s
            58 18 88 18 
            58-18 88-18 
            58 18 88 18
            v44h-352z"
          ></path>
        </defs>
        <g>
          <use
            xlinkHref="#page-divide"
            x="50"
            y="0"
            fill="hsl(var(--muted)/50%)"
          ></use>
        </g>
      </svg>
    </div>
  )
}
