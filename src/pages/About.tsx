
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import PageTransition from '@/components/ui/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-studynest-purple">About StudyNest</h1>
            
            <Card className="mb-8">
              <CardHeader>
                <h2 className="text-2xl font-semibold">The Creator</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  StudyNest was created by <span className="font-semibold">Mohamed Fazil</span>, 
                  a passionate B.Tech undergraduate student at SCMS School of Engineering and Technology. 
                  As a student himself, Mohamed understood the challenges of effective studying and 
                  wanted to create a platform that would help students achieve their academic goals.
                </p>
                
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <p className="italic text-muted-foreground">
                    "I built StudyNest to solve the problems I faced as a student - staying focused, 
                    organizing study materials, and finding quality educational resources. I hope this platform 
                    helps other students overcome these challenges and reach their full potential."
                  </p>
                  <p className="text-right mt-2 text-sm">- Mohamed Fazil</p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <h2 className="text-2xl font-semibold">Our Mission</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  StudyNest aims to provide students with a comprehensive suite of tools designed 
                  to enhance their learning experience. From focused study sessions with our Pomodoro 
                  timer to interactive flashcards and curated educational content, we're here to 
                  support your academic journey.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Our platform is built on the latest research in learning science and productivity, 
                  incorporating techniques like spaced repetition, active recall, and time management 
                  to help you study smarter, not harder.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">Acknowledgments</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  StudyNest was built with the support of modern AI technologies and innovative development platforms. Special thanks to:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                  <li>The amazing team at <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-studynest-purple hover:underline">Lovable.dev</a> for their incredible development platform</li>
                  <li>ChatGPT for assisting in various aspects of development, from UI design to code optimization</li>
                  <li>The open-source community for providing excellent tools and libraries</li>
                  <li>Early beta testers who provided valuable feedback and suggestions</li>
                </ul>
                
                <div className="mt-6 p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">Technologies Behind StudyNest</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">Supabase</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">Framer Motion</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">Shadcn UI</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
