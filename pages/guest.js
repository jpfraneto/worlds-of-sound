import Link from 'next/link';

export default function Guest() {
  return (
    <div>
      Here goes the guest page
      <Link href='/'>
        <a>Go Back</a>
      </Link>
    </div>
  );
}
