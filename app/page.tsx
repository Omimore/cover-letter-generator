import CoverLetterGenerator from "@/components/cover-letter-generator"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cover Letter Generator</h1>
          <p className="max-w-[700px] text-slate-500 md:text-xl">
            Create professional cover letters in minutes. Customize, preview, and download your perfect cover letter.
          </p>
        </div>
        <CoverLetterGenerator />
      </div>
    </main>
  )
}
