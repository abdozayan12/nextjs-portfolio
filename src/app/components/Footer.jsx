import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer>
      <Link href="/about">
        <a>
          <Image src="/images/Abdo Zayan.png" alt="Logo" width={150} height={50} />
        </a>
      </Link>
      {/* rest of your footer code */}
    </footer>
  )
}

export default Footer