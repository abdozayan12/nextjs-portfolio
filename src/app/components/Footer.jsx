import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link href="/">
        <a>
          <Image src="/images/Abdo Zayan.png" alt="Logo" width={150} height={50} />
        </a>
      </Link>
      <p style={{ paddingRight: '30px' }}>All rights reserved</p>
    </footer>
  )
}

export default Footer