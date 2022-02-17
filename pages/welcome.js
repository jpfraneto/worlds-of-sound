import Link from 'next/link';

export default function Welcome() {
  return (
    <div>
      Here goes the welcome page
      <Link href='/'>
        <a>Go Back</a>
      </Link>
    </div>
  );
}
