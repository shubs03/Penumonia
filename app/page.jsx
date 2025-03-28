import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Clock, Brain } from "lucide-react"
import HeroSection from "../components/hero-section"
import FeatureCard from "@/components/feature-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Our Unique Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-blue-600" />}
              title="AI-Powered Diagnosis"
              description="Advanced ML model for precise pneumonia detection with high accuracy rates"
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-blue-600" />}
              title="Doctor Verified Reports"
              description="Secure & expert-reviewed results ensuring diagnostic accuracy"
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-blue-600" />}
              title="Fast & Confidential"
              description="Instant results with complete patient privacy and data protection"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <CardTitle>Upload X-ray</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-600">
                <p>Doctors upload patient's chest X-ray image to our secure platform</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <CardTitle>AI Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-600">
                <p>Our advanced AI model analyzes the X-ray for pneumonia indicators</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <CardTitle>Get Results</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-600">
                <p>Receive instant diagnosis with confidence score and detailed report</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/detection">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Try Detection System <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p className="text-blue-100">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">5,000+</h3>
              <p className="text-blue-100">Diagnoses Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-blue-100">Doctors Using Our System</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">Ready to Get Started?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Join hundreds of healthcare professionals using our AI-powered pneumonia detection system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">Register as Doctor</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Login to Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

