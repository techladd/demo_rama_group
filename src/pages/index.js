import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col mt-[10%]">
      <h1>POC Application for Rama Group</h1>
      {/* Replace 'tecladd-image.jpg' with the actual image URL */}
      <Image
        src="https://www.techladd.com/_next/static/media/techladd_logo.3eb3266d.svg"
        alt="Tecladd Image"
        width={500}
        height={300}
      />
    </div>
  )
}
