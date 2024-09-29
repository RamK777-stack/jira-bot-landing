import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 w-full">
        <h1 className="flex justify-center text-2xl font-bold px-4">React + Vite + Tailwind + shadcn/ui</h1>
      </header>

      <main className="flex-grow w-full bg-secondary">
        <div className="px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="col-span-1 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-3xl">Welcome to Your New Project</CardTitle>
                <CardDescription className="text-xl">This is a full-width boilerplate setup with some popular tools</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-lg">
                  This project is set up with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>React for building user interfaces</li>
                  <li>Vite for fast development and building</li>
                  <li>Tailwind CSS for utility-first styling</li>
                  <li>shadcn/ui for beautiful, accessible components</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-lg py-6">Get Started</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Description of feature 1 goes here.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Description of feature 2 goes here.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Description of feature 3 goes here.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-muted p-4 w-full">
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Project Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}