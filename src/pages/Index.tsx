
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Youtube, BarChart2, ArrowRight, Users, Award, Brain } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Everything You Need to Excel</h2>
              <p className="text-muted-foreground">
                StudyNest combines powerful tools to help you study more effectively, 
                stay focused, and track your progress all in one place.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pomodoro Timer */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-studynest-purple/20 text-studynest-purple flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pomodoro Timer</h3>
                <p className="text-muted-foreground mb-4">
                  Use the proven Pomodoro technique to maintain focus and take effective breaks. 
                  Customize work and break durations to fit your study style.
                </p>
                <Link to="/dashboard">
                  <Button variant="link" className="p-0 text-studynest-purple hover:text-studynest-purple-secondary">
                    Start focused study <ArrowRight size={14} className="ml-1" />
                  </Button>
                </Link>
              </div>
              
              {/* Flashcards */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-studynest-purple/20 text-studynest-purple flex items-center justify-center mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Flashcards</h3>
                <p className="text-muted-foreground mb-4">
                  Create, organize, and review flashcards based on spaced repetition. 
                  Rate your confidence to optimize your learning sessions.
                </p>
                <Link to="/flashcards">
                  <Button variant="link" className="p-0 text-studynest-purple hover:text-studynest-purple-secondary">
                    Create flashcards <ArrowRight size={14} className="ml-1" />
                  </Button>
                </Link>
              </div>
              
              {/* Educational Videos */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-studynest-purple/20 text-studynest-purple flex items-center justify-center mb-4">
                  <Youtube size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Educational Videos</h3>
                <p className="text-muted-foreground mb-4">
                  Access carefully curated educational videos from trusted sources. 
                  Save your favorites and enjoy an ad-free learning environment.
                </p>
                <Link to="/videos">
                  <Button variant="link" className="p-0 text-studynest-purple hover:text-studynest-purple-secondary">
                    Watch and learn <ArrowRight size={14} className="ml-1" />
                  </Button>
                </Link>
              </div>
              
              {/* Study Analytics */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-studynest-purple/20 text-studynest-purple flex items-center justify-center mb-4">
                  <BarChart2 size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Study Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Track your study habits, session durations, and streaks over time. 
                  Use insights to improve your productivity and consistency.
                </p>
                <Link to="/dashboard">
                  <Button variant="link" className="p-0 text-studynest-purple hover:text-studynest-purple-secondary">
                    View your stats <ArrowRight size={14} className="ml-1" />
                  </Button>
                </Link>
              </div>
              
              {/* Friends & Leaderboards */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-studynest-purple/20 text-studynest-purple flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Study With Friends</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with friends, see who's online, and compete on leaderboards. 
                  Use friendly competition to stay motivated and consistent.
                </p>
                <Link to="/dashboard">
                  <Button variant="link" className="p-0 text-studynest-purple hover:text-studynest-purple-secondary">
                    Join the community <ArrowRight size={14} className="ml-1" />
                  </Button>
                </Link>
              </div>
              
              {/* Achievements */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-studynest-purple/20 text-studynest-purple flex items-center justify-center mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Achievements & Badges</h3>
                <p className="text-muted-foreground mb-4">
                  Earn badges for consistency, completing study milestones, and mastering subjects. 
                  Build a collection that showcases your dedication.
                </p>
                <Link to="/dashboard">
                  <Button variant="link" className="p-0 text-studynest-purple hover:text-studynest-purple-secondary">
                    Unlock achievements <ArrowRight size={14} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-studynest-purple to-studynest-purple-secondary text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-2">Ready to transform your study habits?</h2>
                <p className="text-white/80">
                  Join thousands of students improving their learning with StudyNest
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-studynest-purple hover:bg-white/90">
                  Get Started For Free
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Take a Tour
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
