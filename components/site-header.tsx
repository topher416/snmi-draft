"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">SNMI</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground">
              Home
            </Link>
            <Link href="/papers" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Our Papers
            </Link>
            <Link href="/photovoice" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Community Voices
            </Link>
            <Link href="/advisory-voices" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Advisory Voices
            </Link>
            <Link href="/tools-resources" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Tools & Resources
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="hover:text-foreground/80" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/papers" className="hover:text-foreground/80" onClick={() => setIsOpen(false)}>
                  Our Papers
                </Link>
                <Link href="/photovoice" className="hover:text-foreground/80" onClick={() => setIsOpen(false)}>
                  Community Voices
                </Link>
                <Link href="/advisory-voices" className="hover:text-foreground/80" onClick={() => setIsOpen(false)}>
                  Advisory Voices
                </Link>
                <Link href="/tools-resources" className="hover:text-foreground/80" onClick={() => setIsOpen(false)}>
                  Tools & Resources
                </Link>
                <Link href="/about" className="hover:text-foreground/80" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
