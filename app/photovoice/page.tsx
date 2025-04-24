"use client"

import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Sample data for the PhotoVoice gallery
const photovoiceData = [
  {
    id: 1,
    name: "Lucia",
    neighborhood: "Little Village",
    image: "/images/photovoice-1.jpg",
    caption: "The closed clinic where I used to get my insulin.",
    story:
      "After it shut down, I went weeks without meds. I ended up in the ER. I see neighbors in the same situation.",
  },
  {
    id: 2,
    name: "James",
    neighborhood: "Englewood",
    image: "/images/photovoice-2.jpg",
    caption: "My daughter's asthma meds cost triple now.",
    story: "I used to walk five blocks to our doctor. That clinic's gone. Now we drive 40 minutes and wait hours.",
  },
  {
    id: 3,
    name: "Gloria",
    neighborhood: "Auburn Gresham",
    image: "/images/photovoice-3.jpg",
    caption: "ER is now our only care.",
    story: "The urgent care closed. My grandson had strep and we waited 9 hours in an ER to get antibiotics.",
  },
]

export default function PhotoVoicePage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Community Voices</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Community Members Illustrate the Crisis Through PhotoVoice
            </p>
          </div>

          {/* PhotoVoice Gallery - Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photovoiceData.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.caption}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <p className="text-white font-medium">
                          {item.name}, {item.neighborhood}
                        </p>
                        <p className="text-white/80 text-sm">Click to hear their story</p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>
                      {item.name} from {item.neighborhood}
                    </DialogTitle>
                    <DialogDescription>{item.caption}</DialogDescription>
                  </DialogHeader>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative aspect-square">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.caption}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <p className="text-gray-700">{item.story}</p>

                      {/* Audio player placeholder - for future implementation */}
                      <div className="mt-4 bg-gray-100 p-4 rounded-md">
                        <p className="text-sm text-gray-500 mb-2">Audio testimony (coming soon)</p>
                        <div className="h-8 bg-gray-200 rounded-md flex items-center justify-center">
                          <span className="text-xs text-gray-500">
                            Audio player will be available in future updates
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              This isn't just storytelling. This is a data-informed methodology used to ground SNMI's strategy in lived
              experience. PhotoVoice is central to stakeholder briefings and public communication.
            </p>
            <Button variant="outline" asChild>
              <a href="#" className="inline-flex items-center gap-2">
                Learn more about our community engagement
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
