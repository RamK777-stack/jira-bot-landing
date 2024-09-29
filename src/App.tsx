'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { BotIcon, CheckCircle, Chrome, MessageSquare, Zap, ChevronLeft, ChevronRight } from 'lucide-react'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const screenshots = [
    { src: "/jira-bot-screenshot-1.png", alt: "JIRA Bot Chat Interface" },
    { src: "/jira-bot-screenshot-2.png", alt: "JIRA Bot Typing" },
    { src: "/jira-bot-screenshot-3.png", alt: "JIRA Bot Open bugs" },
    { src: "/jira-bot-screenshot-4.png", alt: "JIRA Bot Sprint Progress" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % screenshots.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    console.log('Comment submitted:', comment)
    setIsSubmitted(true)
    setEmail('')
    setComment('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white overflow-hidden px-10">

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-50 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <header className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-64 h-64 border-4 border-blue-500 rounded-full"></div>
            <div className="w-48 h-48 border-4 border-yellow-500 rounded-full"></div>
            <div className="w-32 h-32 border-4 border-purple-500 rounded-full"></div>
          </div>
          <BotIcon className="h-16 w-16 mx-auto mb-4 text-blue-500 relative z-10" />
          <h1 className="text-4xl font-bold mb-4 relative z-10">JIRA Bot for Chrome</h1>
          <p className="text-xl text-gray-600 relative z-10">Your AI-powered JIRA assistant, right in your browser</p>
        </header>

        <div className="mb-16 relative">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Experience JIRA Bot in Action</CardTitle>
              <CardDescription>Swipe through screenshots to see how JIRA Bot streamlines your workflow</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative">
                <div className="overflow-hidden" style={{ maxHeight: '300px' }}>
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {screenshots.map((screenshot, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          className="w-full h-auto object-contain"
                          style={{ maxHeight: '300px' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="absolute top-1/2 left-8 h-12 w-12 transform -translate-y-1/2 "
                  onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + screenshots.length) % screenshots.length)}
                >
                  <ChevronLeft className="h-4 w-4 " />
                </Button>
                <Button
                  variant="outline"
                  className="absolute top-1/2 right-8 h-12 w-12 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % screenshots.length)}
                >
                  <ChevronRight className="h-4 w-4 " />
                </Button>
              </div>
              <div className="flex justify-center mt-4 pb-4">
                {screenshots.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full mx-1 ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                  ></div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
          </div>
          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-blue-500" />
                Instant JIRA Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              Stay up to date with real-time notifications on ticket changes, sprint progress, and team activity. Everything you need is delivered instantly without having to switch tabs or break your flow.
            </CardContent>
          </Card>

          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-6 w-6 mr-2 text-yellow-500" />
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              Leverage AI to get smart summaries, predictions, and suggestions based on your JIRA data.
            </CardContent>
          </Card>

          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Chrome className="h-6 w-6 mr-2 text-green-500" />
                Seamless Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              Our JIRA Bot Chrome Extension fits effortlessly into your existing workflow. Access your JIRA tickets directly from Chrome, chat with them, and receive AI-powered summaries.
            </CardContent>
          </Card>

          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-purple-500" />
                Boost Productivity
              </CardTitle>
            </CardHeader>
            <CardContent>
              Eliminate distractions by handling all your JIRA tasks without switching between different tools. Whether it’s managing tickets or checking progress, stay efficient and on task with everything at your fingertips.
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-md mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-75"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="text-white">Join the Waiting List</CardTitle>
            <CardDescription className="text-blue-100">Be the first to know when we launch!</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/20 text-white placeholder-blue-200"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="comment" className="text-white">Feedback or Suggestions</Label>
                  <Textarea
                    id="comment"
                    placeholder="Share your thoughts or feature requests..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="bg-white/20 text-white placeholder-blue-200"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="relative z-10">
            <Button className="w-full bg-white text-blue-600 hover:bg-blue-100" onClick={handleSubmit}>
              {isSubmitted ? 'Thank you!' : 'Join Waiting List'}
            </Button>
          </CardFooter>
        </Card>

        {isSubmitted && (
          <div className="mt-4 text-center text-green-600 font-semibold">
            Thank you for joining our waiting list and sharing your feedback! We'll notify you when we launch.
          </div>
        )}
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-12 h-12 bg-yellow-400 rounded-full opacity-50 animate-float"></div>
        <div className="absolute top-3/4 right-10 w-8 h-8 bg-purple-400 rounded-full opacity-50 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-blue-400 rounded-full opacity-50 animate-float animation-delay-4000"></div>
      </div>
    </div>
  )
}