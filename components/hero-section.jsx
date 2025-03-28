import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Based Pneumonia Detection</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">Fast, Accurate & Reliable</h2>
          <p className="text-xl mb-8 text-blue-50">
            Upload an X-ray & get instant results using AI-powered technology. Our advanced machine learning model
            provides precise pneumonia detection to assist healthcare professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/detection">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Check Pneumonia (Login Required) <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-white text-blue-600 hover:text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

