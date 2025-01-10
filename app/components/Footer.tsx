export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Rob Abby. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://linkedin.com/in/robabby" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">LinkedIn</a>
          <a href="https://github.com/robabby" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">GitHub</a>
          <a href="mailto:robabby23@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">Email</a>
        </div>
      </div>
    </footer>
  )
}

