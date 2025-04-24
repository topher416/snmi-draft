import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-white text-center px-4 py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/images/chicago-skyline.jpg" alt="Chicago skyline" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Building a Vibrant Chicago Through Safety Net Transformation
          </h1>
          <p className="text-xl md:text-2xl mb-8">A Strategic Response to the City's Most Urgent Healthcare Crisis</p>
          <Button size="lg" className="group" asChild>
            <a href="#infographic">
              Read the Strategy
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </a>
          </Button>
        </div>
      </section>

      {/* Infographic Story */}
      <section id="infographic" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Challenge and The Path Forward</h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Panel: Crisis Forecast */}
            <div className="bg-red-50 p-6 md:p-8 rounded-xl border border-red-200">
              <h3 className="text-2xl font-bold text-red-800 mb-4">The Challenge: A Collapsing Safety Net</h3>

              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl font-bold text-red-700">$1.4B+</span>
                  <span className="text-red-800">in unfunded liabilities</span>
                </div>
              </div>

              <div className="aspect-square relative mb-6">
                <Image
                  src="/images/crisis-graph.jpg"
                  alt="Graph showing collapse trajectory if inaction persists"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-gray-700">
                Hospital closures and service gaps endanger care access in vulnerable communities. Without intervention,
                Chicago faces a public health emergency of unprecedented scale.
              </p>
            </div>

            {/* Right Panel: Strategic Path Forward */}
            <div className="bg-emerald-50 p-6 md:p-8 rounded-xl border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">A Moonshot for System Redesign</h3>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-100 p-3 rounded-full mb-2">
                    <svg
                      className="w-8 h-8 text-emerald-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-emerald-800">FQHC-Led Access Network</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-100 p-3 rounded-full mb-2">
                    <svg
                      className="w-8 h-8 text-emerald-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-emerald-800">Value-Based Payment Reform</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-100 p-3 rounded-full mb-2">
                    <svg
                      className="w-8 h-8 text-emerald-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-emerald-800">Hospital Infrastructure Reconfiguration</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg mb-6 border-l-4 border-emerald-500">
                <p className="italic text-gray-700">
                  "This initiative is not about preserving the status quo. It's about designing a new foundation for
                  care access in Chicago."
                </p>
                <p className="text-right text-sm text-gray-500 mt-2">— SNMI Advisory Group Member</p>
              </div>

              <p className="text-gray-700">
                Our plan mobilizes state, provider, and community partners to build a sustainable, equitable delivery
                model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Work</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-2">📄</span> Our Papers
                </CardTitle>
                <CardDescription>Dive into the data and strategic vision</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Read our two-volume series: a crisis diagnosis and blueprint for redesign.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/papers">View Papers</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-2">📷</span> Community Voices
                </CardTitle>
                <CardDescription>PhotoVoice as evidence, not anecdote</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Community members share stories illustrating the human stakes of systemic failure.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/photovoice">View Gallery</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-2">🎥</span> Advisory Voices
                </CardTitle>
                <CardDescription>Hear from safety net champions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Stakeholders across sectors describe why SNMI matters.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/advisory-voices">Watch Videos</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-2xl mr-2">🔄</span> What's Next
                </CardTitle>
                <CardDescription>From paper to practice</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Learn how the initiative is advancing redesign through engagement and implementation.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/about">About SNMI</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
