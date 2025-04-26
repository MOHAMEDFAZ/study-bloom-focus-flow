
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Clock, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-studynest-purple bg-studynest-purple/10 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-studynest-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-studynest-purple"></span>
              </span>
              Now available for everyone
            </div>
          </motion.div>
          
          <motion.h1
            className="mt-6 text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-studynest-purple to-studynest-blue bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn, Focus, Grow.
          </motion.h1>
          
          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your all-in-one study companion designed to help you stay focused, organized, and motivated throughout your learning journey.
          </motion.p>
          
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="bg-studynest-purple hover:bg-studynest-purple-secondary w-full sm:w-auto text-base" size="lg">
              Get Started <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-base" size="lg">
              Explore Features
            </Button>
          </motion.div>
          
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="glass p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-studynest-purple/20 text-studynest-purple flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pomodoro Timer</h3>
              <p className="text-muted-foreground text-sm">
                Stay focused with our customizable study timer using the Pomodoro technique.
              </p>
            </div>
            
            <div className="glass p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-studynest-purple/20 text-studynest-purple flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flashcard System</h3>
              <p className="text-muted-foreground text-sm">
                Create, organize, and review flashcards to boost your memory retention.
              </p>
            </div>
            
            <div className="glass p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-studynest-purple/20 text-studynest-purple flex items-center justify-center mb-4">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Study Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Track your progress and study habits with visual analytics and insights.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
