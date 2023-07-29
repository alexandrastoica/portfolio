'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <div
        className="header__content"
        style={{ height: 'calc(100vh - 210px)' }}
      >
        <div className="header__text">
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
  );
}
