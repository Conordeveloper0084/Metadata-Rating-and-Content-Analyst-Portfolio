"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, MapPin, Github, Star, Play, Eye, Award, Target, Zap, Brain } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "samples", "analysis", "methodology", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const contentSamples = [
    {
      title: "Stranger Things S1E1",
      summary:
        "A group of kids in 1980s Indiana search for their missing friend while uncovering supernatural mysteries and government conspiracies.",
      genre: "Sci-Fi Horror",
      tags: [
        "supernatural",
        "80s nostalgia",
        "kids adventure",
        "mystery",
        "government conspiracy",
        "parallel dimensions",
      ],
      ageRating: "TV-14",
      mood: "Dark & Suspenseful",
      reasoning:
        "Contains moderate violence, scary imagery, and mature themes suitable for teens. The 80s setting and child protagonists balance the darker elements.",
    },
    {
      title: "Squid Game",
      summary:
        "Desperate contestants compete in deadly children's games for a massive cash prize, revealing dark truths about society and human nature.",
      genre: "Thriller Drama",
      tags: ["survival", "violence", "social commentary", "betrayal", "psychological thriller", "Korean content"],
      ageRating: "TV-MA",
      mood: "Intense & Disturbing",
      reasoning:
        "Graphic violence, disturbing imagery, and mature themes require adult audience. Strong social commentary on economic inequality.",
    },
    {
      title: "Wednesday",
      summary:
        "Wednesday Addams navigates her years as a student at Nevermore Academy, solving supernatural mysteries while dealing with teenage drama.",
      genre: "Comedy Horror",
      tags: ["gothic", "teen drama", "detective mystery", "supernatural", "dark comedy", "coming-of-age"],
      ageRating: "TV-14",
      mood: "Quirky & Dark",
      reasoning:
        "Mild violence and dark humor appropriate for teens. Gothic aesthetic and supernatural elements balanced with comedy.",
    },
    {
      title: "The Crown S1",
      summary:
        "Chronicles the reign of Queen Elizabeth II, exploring the personal and political challenges of the British Royal Family in the 1940s-50s.",
      genre: "Historical Drama",
      tags: ["period piece", "royal family", "political drama", "historical events", "British culture", "biographical"],
      ageRating: "TV-MA",
      mood: "Sophisticated & Dramatic",
      reasoning:
        "Mature themes including political intrigue, marital issues, and historical events require adult understanding.",
    },
    {
      title: "Money Heist (La Casa de Papel)",
      summary:
        "A criminal mastermind leads a team of uniquely skilled robbers in an elaborate heist at the Royal Mint of Spain.",
      genre: "Crime Thriller",
      tags: ["heist", "Spanish content", "anti-hero", "resistance", "complex narrative", "international"],
      ageRating: "TV-MA",
      mood: "Intense & Strategic",
      reasoning:
        "Violence, strong language, and complex adult themes. Political undertones and criminal activity require mature audience.",
    },
  ]

  const comparativeData = [
    {
      title: "Stranger Things",
      genre: "Sci-Fi Horror",
      primaryTags: "supernatural, 80s, kids",
      ageRating: "TV-14",
      mood: "Dark & Nostalgic",
      appeal: "Broad family appeal",
    },
    {
      title: "Squid Game",
      genre: "Thriller Drama",
      primaryTags: "survival, violence, social commentary",
      ageRating: "TV-MA",
      mood: "Intense & Disturbing",
      appeal: "Adult psychological thriller",
    },
    {
      title: "Wednesday",
      genre: "Comedy Horror",
      primaryTags: "gothic, teen, detective",
      ageRating: "TV-14",
      mood: "Quirky & Dark",
      appeal: "Teen and young adult",
    },
    {
      title: "The Crown",
      genre: "Historical Drama",
      primaryTags: "period, royal, political",
      ageRating: "TV-MA",
      mood: "Sophisticated",
      appeal: "Adult prestige drama",
    },
    {
      title: "Money Heist",
      genre: "Crime Thriller",
      primaryTags: "heist, Spanish, anti-hero",
      ageRating: "TV-MA",
      mood: "Intense & Strategic",
      appeal: "International thriller",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white">TD</div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "samples", label: "Portfolio" },
                { id: "analysis", label: "Analysis" },
                { id: "methodology", label: "Approach" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id ? "text-red-400" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-slate-900/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              TOXIROV <span className="text-red-400">DILSHOD</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">Metadata Rating Analyst</p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Specialized in content analysis, classification, and rating for streaming platforms. Bringing analytical
              precision to content metadata and audience targeting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("samples")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Why Metadata Analysis?</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  As an AI Engineering and Data Science student at PDP University, I've developed a keen eye for pattern
                  recognition and data classification. My passion for media content combined with analytical thinking
                  makes me ideally suited for metadata tagging and content rating.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I understand that accurate metadata is crucial for content discovery, audience targeting, and platform
                  success. My approach combines technical precision with cultural awareness to deliver metadata that
                  truly serves both the platform and its users.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-red-900/30 text-red-300">
                    Content Analysis
                  </Badge>
                  <Badge variant="secondary" className="bg-red-900/30 text-red-300">
                    Genre Classification
                  </Badge>
                  <Badge variant="secondary" className="bg-red-900/30 text-red-300">
                    Age Rating
                  </Badge>
                  <Badge variant="secondary" className="bg-red-900/30 text-red-300">
                    Cultural Awareness
                  </Badge>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="bg-slate-700/50 border-slate-600">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Brain className="h-6 w-6 text-red-400 mr-3" />
                      <h4 className="text-lg font-semibold text-white">Analytical Thinking</h4>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Detail-oriented approach to content analysis with focus on narrative structure, themes, and
                      audience impact.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700/50 border-slate-600">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Target className="h-6 w-6 text-red-400 mr-3" />
                      <h4 className="text-lg font-semibold text-white">Precision & Accuracy</h4>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Committed to delivering consistent, accurate metadata aligned with platform standards and user
                      expectations.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700/50 border-slate-600">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Zap className="h-6 w-6 text-red-400 mr-3" />
                      <h4 className="text-lg font-semibold text-white">Media Expertise</h4>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Deep understanding of global content trends, cultural nuances, and audience preferences across
                      genres.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Samples */}
      <section id="samples" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Content Tagging Samples</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Detailed analysis and tagging examples demonstrating my approach to content classification and rating
            </p>

            <div className="grid gap-8">
              {contentSamples.map((sample, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-white mb-2">{sample.title}</CardTitle>
                        <CardDescription className="text-slate-300">{sample.summary}</CardDescription>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className="bg-red-600 text-white w-fit">{sample.ageRating}</Badge>
                        <Badge variant="outline" className="border-slate-600 text-slate-300 w-fit">
                          {sample.genre}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="tags" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 bg-slate-700">
                        <TabsTrigger value="tags" className="data-[state=active]:bg-red-600">
                          Tags
                        </TabsTrigger>
                        <TabsTrigger value="mood" className="data-[state=active]:bg-red-600">
                          Mood
                        </TabsTrigger>
                        <TabsTrigger value="reasoning" className="data-[state=active]:bg-red-600">
                          Analysis
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="tags" className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {sample.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="bg-slate-700 text-slate-300">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="mood" className="mt-4">
                        <div className="flex items-center gap-3">
                          <Eye className="h-5 w-5 text-red-400" />
                          <span className="text-slate-300 font-medium">{sample.mood}</span>
                        </div>
                      </TabsContent>
                      <TabsContent value="reasoning" className="mt-4">
                        <p className="text-slate-300 leading-relaxed">{sample.reasoning}</p>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparative Analysis */}
      <section id="analysis" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Comparative Content Analysis</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Side-by-side comparison showcasing consistent tagging methodology across different content types
            </p>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-slate-700">
                        <TableHead className="text-slate-300 font-semibold">Title</TableHead>
                        <TableHead className="text-slate-300 font-semibold">Genre</TableHead>
                        <TableHead className="text-slate-300 font-semibold">Primary Tags</TableHead>
                        <TableHead className="text-slate-300 font-semibold">Age Rating</TableHead>
                        <TableHead className="text-slate-300 font-semibold">Mood</TableHead>
                        <TableHead className="text-slate-300 font-semibold">Target Appeal</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comparativeData.map((item, index) => (
                        <TableRow key={index} className="border-slate-700 hover:bg-slate-700/30">
                          <TableCell className="text-white font-medium">{item.title}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-slate-600 text-slate-300">
                              {item.genre}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-slate-300">{item.primaryTags}</TableCell>
                          <TableCell>
                            <Badge
                              className={`${item.ageRating === "TV-MA" ? "bg-red-600" : "bg-orange-600"} text-white`}
                            >
                              {item.ageRating}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-slate-300">{item.mood}</TableCell>
                          <TableCell className="text-slate-300">{item.appeal}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">My Tagging Methodology</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="mr-3 h-6 w-6 text-red-400" />
                    Content Analysis Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center mt-0.5">
                        1
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Initial Screening</h4>
                        <p className="text-slate-400 text-sm">
                          Watch/review content with focus on narrative structure, themes, and visual elements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center mt-0.5">
                        2
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Genre Classification</h4>
                        <p className="text-slate-400 text-sm">
                          Identify primary and secondary genres based on dominant narrative elements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center mt-0.5">
                        3
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Thematic Tagging</h4>
                        <p className="text-slate-400 text-sm">
                          Extract key themes, moods, and cultural elements for comprehensive tagging
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Star className="mr-3 h-6 w-6 text-red-400" />
                    Rating Determination
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center mt-0.5">
                        1
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Content Assessment</h4>
                        <p className="text-slate-400 text-sm">
                          Evaluate violence, language, sexual content, and mature themes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center mt-0.5">
                        2
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Audience Consideration</h4>
                        <p className="text-slate-400 text-sm">
                          Consider cultural context and target demographic appropriateness
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-600 text-white text-sm flex items-center justify-center mt-0.5">
                        3
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Final Rating</h4>
                        <p className="text-slate-400 text-sm">
                          Apply consistent rating standards aligned with platform guidelines
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-center">Key Focus Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Narrative Elements</h4>
                    <p className="text-slate-400 text-sm">
                      Plot structure, character development, dialogue quality, and storytelling techniques
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Tonal Analysis</h4>
                    <p className="text-slate-400 text-sm">
                      Mood, atmosphere, emotional impact, and overall viewing experience
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Cultural Context</h4>
                    <p className="text-slate-400 text-sm">
                      Regional relevance, cultural sensitivity, and international appeal factors
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
              Ready to bring analytical precision and cultural awareness to your content metadata team. Let's discuss
              how I can contribute to your platform's success.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-red-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-slate-300">conordev0084@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-red-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Location</h3>
                  <p className="text-slate-300">Tashkent, Uzbekistan</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
                <CardContent className="p-6 text-center">
                  <Github className="h-8 w-8 text-red-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Portfolio</h3>
                  <p className="text-slate-300">Available on GitHub</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 bg-transparent"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Toxirov Dilshod. Crafted for Netflix Metadata Rating Analyst Application.
          </p>
        </div>
      </footer>
    </div>
  )
}
