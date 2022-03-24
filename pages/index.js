import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>Both balls should be bouncing</h1>
      <Image
        src="https://rmrk.mypinata.cloud/ipfs/bafkreigobec7gopuinymb7wmejxpjnbc3bxqni7mj4mu4xh3tufvbkx3fy"
        width={100}
        height={100}
      />
      <Image
        src="https://rmrk.mypinata.cloud/ipfs/bafkreigobec7gopuinymb7wmejxpjnbc3bxqni7mj4mu4xh3tufvbkx3fy"
        width={100}
        height={100}
        unoptimized
      />
    </>
  )
}
