import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ToolsResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Tools & Resources</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic Artifacts to Support Understanding and Engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>SNMI Charter and Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative bg-gray-200 rounded-md mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600 text-sm">(SNMI Charter Document Preview)</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Engagement Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative bg-gray-200 rounded-md mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600 text-sm">(Community Engagement Materials Preview)</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FQHC Financial Impact Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative bg-gray-200 rounded-md mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600 text-sm">(FQHC Financial Impact Summary Preview)</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hospital Capital Needs Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative bg-gray-200 rounded-md mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600 text-sm">(Hospital Capital Needs Analysis Preview)</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Briefing Slide Decks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative bg-gray-200 rounded-md mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600 text-sm">(Briefing Slide Decks Preview)</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Interactive Tools</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Net Scenario Planner</CardTitle>
                  <CardDescription>Coming Soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative bg-gray-200 rounded-md mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-600 text-sm">(Scenario Planner Tool Preview)</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Interactive modeling tool to visualize different safety net configuration scenarios.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Stakeholder Mapping Module</CardTitle>
                  <CardDescription>Private Access Only</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative bg-gray-200 rounded-md mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-600 text-sm">(Stakeholder Mapping Tool Preview)</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Secure tool for mapping stakeholder relationships and engagement strategies.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" disabled className="w-full">
                    Request Access
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              If you're a partner organization and need access to these resources before public release, please contact
              the SNMI team directly.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
