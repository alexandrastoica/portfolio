import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <div className="relative flex h-[calc(100vh-210px)] justify-center pb-8">
        <div className="pr-12">
          <h2>
            Couldn&apos;t find this page <span aria-hidden>🫠</span>
          </h2>
          <br></br>
          <p>
            Return <Link href="/">home</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
