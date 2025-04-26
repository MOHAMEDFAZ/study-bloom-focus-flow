
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const About = () => {
  return (
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Acknowledgments</h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                StudyNest was built with the support of modern AI technologies. Special thanks to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                <li>The amazing team at <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-studynest-purple hover:underline">Lovable.dev</a> for their incredible development platform</li>
                <li>ChatGPT for assisting in various aspects of development</li>
                <li>The open-source community for providing excellent tools and libraries</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
