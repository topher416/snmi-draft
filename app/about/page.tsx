"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AboutPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would send the data to a database
    console.log("Submitted:", { name, email })
    setSubmitted(true)
    setName("")
    setEmail("")

    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About the Initiative</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Safety Net Moonshot Initiative is a multi-sector redesign effort to address the structural collapse of
              healthcare access for Chicago's most vulnerable populations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
              <p className="text-gray-700 mb-6">
                SNMI is powered by Third Horizon Strategies and supported by Schreiber Philanthropy, with active
                participation from community health centers, hospital systems, academic medical centers, Medicaid MCOs,
                and policy experts.
              </p>
              <p className="text-gray-700 mb-6">
                Our collaborative approach brings together diverse stakeholders to address the imminent crisis facing
                our safety net hospitals and clinics, with a focus on creating sustainable, equitable solutions.
              </p>
              <p className="text-gray-700">
                The initiative operates as a neutral convener, bringing together voices that have historically been
                siloed. By fostering collaboration across sectors, we're working to build consensus around bold,
                transformative solutions to our city's most pressing healthcare challenges.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/collaboration.jpg"
                alt="Healthcare professionals collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Contact</h2>

            <div className="max-w-md mx-auto">
              <p className="text-center text-gray-700 mb-6">For press, partnerships, or participation inquiries:</p>

              <div className="grid gap-4 text-center">
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-gray-700">info@chicagosafetynet.com</p>
                </div>

                <div>
                  <p className="font-medium">Phone:</p>
                  <p className="text-gray-700">312-555-0425</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Partner logos would go here - using placeholder blocks for now */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-[3/2] bg-gray-100 rounded-md flex items-center justify-center">
                  <p className="text-gray-400 text-sm">Partner Logo</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 mt-6">*Partner logos displayed with permission</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-center mb-2">Get Updates</h2>
              <p className="text-center text-gray-600 mb-6">Stay informed about our progress and upcoming events</p>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    {submitted ? (
                      <span className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4" /> Subscribed!
                      </span>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    We'll never share your contact information. You can unsubscribe at any time.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
