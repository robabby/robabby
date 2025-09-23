import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed md:top-0 bottom-0 md:bottom-auto left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-t md:border-t-0 md:border-b border-emerald-100">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center sm:space-x-4 md:space-x-8">
          <li><Link href="#about" className="text-gray-800 hover:text-emerald-600 font-medium transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-emerald-50">About</Link></li>
          <li><Link href="#skills" className="text-gray-800 hover:text-emerald-600 font-medium transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-emerald-50">Skills</Link></li>
          <li><Link href="#experience" className="text-gray-800 hover:text-emerald-600 font-medium transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-emerald-50">Experience</Link></li>
          <li><Link href="#projects" className="text-gray-800 hover:text-emerald-600 font-medium transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-emerald-50">Projects</Link></li>
        </ul>
      </nav>
    </header>
  )
}

