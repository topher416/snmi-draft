import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function PapersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Papers</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Data-Driven Case for Redesigning Chicago's Safety Net
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Volume One */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-700 font-medium">(Distressed hospital image)</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Volume One</h3>
                    <p>The Imminent Collapse</p>
                  </div>
                </div>
              </div>

              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">
                  A detailed analysis of Chicago's safety net instability, projecting insolvency risk, care gaps, and
                  the fiscal cliff facing core institutions.
                </p>

                <div className="relative h-64 w-full mb-6 border rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-700 font-medium">(Timeline to insolvency chart)</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button className="gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Volume Two */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-700 font-medium">(Integrated health network concept)</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">Volume Two</h3>
                    <p>A Moonshot Redesign Plan</p>
                  </div>
                </div>
              </div>

              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">
                  This volume proposes a 12-action transformation agenda including network redesign, care access
                  realignment, and capital strategy.
                </p>

                <div className="relative h-64 w-full mb-6 border rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-700 font-medium">(Strategic roadmap diagram)</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button className="gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Shared Elements */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-6">How Our Research Connects</h3>

            <div className="relative h-24 md:h-32 w-full mb-8">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-700 font-medium">(Infographic showing how the two papers link together)</p>
              </div>
            </div>

            <p className="text-center text-gray-700 max-w-3xl mx-auto">
              Volume One establishes urgency; Volume Two offers a strategic solution. Together, they form the backbone
              of SNMI's proposal to Chicago.
            </p>
          </div>

          {/* Quote Carousel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6">Advisory Group Perspectives</h3>

            <Carousel className="max-w-3xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="bg-white p-6 rounded-xl border">
                    <p className="text-lg italic text-gray-700 mb-4">
                      "This is the first time we've seen the full economic picture and a viable model for fixing it."
                    </p>
                    <p className="text-right font-medium">— FQHC Leader</p>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="bg-white p-6 rounded-xl border">
                    <p className="text-lg italic text-gray-700 mb-4">
                      "The system redesign is bold, but necessary. We can't afford another decade of drift."
                    </p>
                    <p className="text-right font-medium">— Health System Executive</p>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="bg-white p-6 rounded-xl border">
                    <p className="text-lg italic text-gray-700 mb-4">
                      "Volume Two is a roadmap. It's about accountability, feasibility, and urgency."
                    </p>
                    <p className="text-right font-medium">— Policy Expert</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static translate-y-0 mr-2" />
                <CarouselNext className="relative static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  )
}
