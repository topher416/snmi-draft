"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Pause } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Sample data for the Advisory Voices videos
const videoData = [
  {
    id: 1,
    name: "Brenda Battle",
    organization: "UChicago Medicine",
    thumbnail: "/images/video-thumbnail-1.jpg",
    quote: "We can no longer pretend the system is serving the people who need it most. We need to redesign it, now.",
    videoLength: "4:15",
  },
  {
    id: 2,
    name: "Dr. James Brooks",
    organization: "Lawndale Christian Health Center",
    thumbnail: "/images/video-thumbnail-2.jpg",
    quote:
      "This isn't a theoretical problem. Our health centers are stretched to the breaking point. SNMI offers a concrete, shared response.",
    videoLength: "3:42",
  },
  {
    id: 3,
    name: "Megan Woltman",
    organization: "Advocate Aurora",
    thumbnail: "/images/video-thumbnail-3.jpg",
    quote:
      "The question isn't whether change is needed—it's how we move with urgency and structure. That's what SNMI provides.",
    videoLength: "5:08",
  },
]

export default function AdvisoryVoicesPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(null)

  const handlePlayVideo = (videoId) => {
    setCurrentVideo(videoId)
    setIsPlaying(true)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Advisory Voices</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stakeholders Explain Why the Safety Net Must Be Transformed
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {videoData.map((video) => (
              <Dialog key={video.id}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={`Video thumbnail for ${video.name}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 rounded-full p-3">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 bg-black/70 text-white text-xs px-2 py-1 m-2 rounded">
                        {video.videoLength}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{video.name}</CardTitle>
                      <CardDescription>{video.organization}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="italic">"{video.quote}"</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{video.name}</DialogTitle>
                    <DialogDescription>{video.organization}</DialogDescription>
                  </DialogHeader>
                  <div className="relative aspect-video bg-gray-900 rounded-md overflow-hidden">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={`Video of ${video.name}`}
                      fill
                      className="object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white mb-4">Video player will be implemented in the final version</p>
                        <Button variant="outline" className="bg-white/20 hover:bg-white/30 text-white">
                          {isPlaying && currentVideo === video.id ? (
                            <Pause className="mr-2 h-4 w-4" />
                          ) : (
                            <Play className="mr-2 h-4 w-4" />
                          )}
                          {isPlaying && currentVideo === video.id ? "Pause" : "Play"} Video
                        </Button>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <div className="bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                        Captions will be available in the final version
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">About this interview:</h4>
                    <p className="text-gray-700">
                      In this video, {video.name} discusses the critical challenges facing Chicago's healthcare safety
                      net and shares insights on potential solutions based on their experience at {video.organization}.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              These videos aren't testimonials—they're commitments. Advisory Group members bring policy, operational,
              and financial expertise to a coordinated redesign effort.
            </p>
            <Button variant="outline" asChild>
              <a href="#" className="inline-flex items-center gap-2">
                Learn more about our advisory group
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
