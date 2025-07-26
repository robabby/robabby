export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Rob Abby. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://linkedin.com/in/robabby" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-300 font-medium">LinkedIn</a>
          <a href="https://github.com/robabby" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-300 font-medium">GitHub</a>
          <a href="mailto:robabby23@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors duration-300 font-medium">Email</a>
        </div>
      </div>
    </footer>
  )
}

