
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PomodoroTimer from '@/components/features/PomodoroTimer';
import DailyQuote from '@/components/features/DailyQuote';
import StudyAnalytics from '@/components/features/StudyAnalytics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Clock, Smile, Calendar, BookOpen, Youtube, Users } from 'lucide-react';

const Dashboard = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-background/70">
        <div className="container px-4 md:px-6 py-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-1">Welcome to StudyNest</h1>
              <p className="text-muted-foreground">{currentDate}</p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Button className="bg-studynest-purple hover:bg-studynest-purple-secondary">
                <Clock size={18} className="mr-2" /> Start Focus Session
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Daily Quote */}
            <div className="md:col-span-2">
              <DailyQuote />
            </div>
            
            {/* Quick Stats */}
            <div className="bg-muted/30 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-3">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                      <Clock size={16} />
                    </div>
                    <span className="text-sm">Study time today</span>
                  </div>
                  <span className="font-medium">1h 25m</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      <Calendar size={16} />
                    </div>
                    <span className="text-sm">Current streak</span>
                  </div>
                  <span className="font-medium">5 days</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-studynest-purple flex items-center justify-center mr-3">
                      <BookOpen size={16} />
                    </div>
                    <span className="text-sm">Flashcards reviewed</span>
                  </div>
                  <span className="font-medium">23 today</span>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="focus" className="space-y-6">
            <TabsList className="grid grid-cols-5 mb-4">
              <TabsTrigger value="focus">Focus Timer</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="friends">Friends</TabsTrigger>
              <TabsTrigger value="mood">Mood Tracker</TabsTrigger>
            </TabsList>
            
            <TabsContent value="focus">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PomodoroTimer />
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Study Resources</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Link to="/flashcards" className="flex items-center justify-between p-3 hover:bg-muted rounded-md transition-colors">
                        <div className="flex items-center">
                          <BookOpen size={18} className="mr-3 text-studynest-purple" />
                          <span>Flashcards</span>
                        </div>
                        <span className="text-sm text-muted-foreground">12 sets</span>
                      </Link>
                      
                      <Link to="/videos" className="flex items-center justify-between p-3 hover:bg-muted rounded-md transition-colors">
                        <div className="flex items-center">
                          <Youtube size={18} className="mr-3 text-studynest-purple" />
                          <span>Educational Videos</span>
                        </div>
                        <span className="text-sm text-muted-foreground">4 saved</span>
                      </Link>
                      
                      <div className="flex items-center justify-between p-3 hover:bg-muted rounded-md transition-colors">
                        <div className="flex items-center">
                          <Users size={18} className="mr-3 text-studynest-purple" />
                          <span>Study Groups</span>
                        </div>
                        <span className="text-sm text-muted-foreground">2 active</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Focus Tips</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-3 border-l-2 border-studynest-purple">
                        <p className="text-sm">
                          <span className="font-medium">Stay hydrated.</span> Keep a water bottle at your desk to maintain energy and focus during study sessions.
                        </p>
                      </div>
                      
                      <div className="p-3 border-l-2 border-studynest-purple">
                        <p className="text-sm">
                          <span className="font-medium">Use active recall.</span> Test yourself on material instead of simply re-reading notes for better retention.
                        </p>
                      </div>
                      
                      <div className="p-3 border-l-2 border-studynest-purple">
                        <p className="text-sm">
                          <span className="font-medium">Change your environment.</span> Occasionally switching study locations can improve focus and memory.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics">
              <StudyAnalytics />
            </TabsContent>
            
            <TabsContent value="achievements">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="text-center p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
                    <Award size={24} />
                  </div>
                  <h3 className="font-medium mb-1">Consistency Champion</h3>
                  <p className="text-xs text-muted-foreground mb-3">Study for 7 days in a row</p>
                  <div className="w-full bg-muted h-2 rounded-full">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <p className="text-xs mt-2">5/7 days</p>
                </Card>
                
                <Card className="text-center p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-medium mb-1">Focus Master</h3>
                  <p className="text-xs text-muted-foreground mb-3">Complete 10 hours of focused study</p>
                  <div className="w-full bg-muted h-2 rounded-full">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-xs mt-2">4.5/10 hours</p>
                </Card>
                
                <Card className="text-center p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mb-3">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-medium mb-1">Memory Wizard</h3>
                  <p className="text-xs text-muted-foreground mb-3">Review 100 flashcards</p>
                  <div className="w-full bg-muted h-2 rounded-full">
                    <div className="bg-yellow-500 h-full rounded-full" style={{ width: '23%' }}></div>
                  </div>
                  <p className="text-xs mt-2">23/100 cards</p>
                </Card>
                
                <Card className="text-center p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mb-3">
                    <Users size={24} />
                  </div>
                  <h3 className="font-medium mb-1">Social Scholar</h3>
                  <p className="text-xs text-muted-foreground mb-3">Add 5 study friends</p>
                  <div className="w-full bg-muted h-2 rounded-full">
                    <div className="bg-gray-500 h-full rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <p className="text-xs mt-2">0/5 friends</p>
                </Card>
                
                <Card className="text-center p-6 flex flex-col items-center opacity-60">
                  <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mb-3">
                    <Award size={24} />
                  </div>
                  <h3 className="font-medium mb-1">Early Bird</h3>
                  <p className="text-xs text-muted-foreground mb-3">Study before 8am for 5 days</p>
                  <div className="w-full bg-muted h-2 rounded-full">
                    <div className="bg-gray-400 h-full rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <p className="text-xs mt-2">Locked</p>
                </Card>
                
                <Card className="text-center p-6 flex flex-col items-center opacity-60">
                  <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mb-3">
                    <Award size={24} />
                  </div>
                  <h3 className="font-medium mb-1">Night Owl</h3>
                  <p className="text-xs text-muted-foreground mb-3">Study after 10pm for 5 days</p>
                  <div className="w-full bg-muted h-2 rounded-full">
                    <div className="bg-gray-400 h-full rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <p className="text-xs mt-2">Locked</p>
                </Card>
                
                <Card className="text-center p-6 flex flex-col items-center opacity-60">
                  <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mb-3">
                    <Award size={24} />
                  </div>
                  <h3 className="font-medium mb-1">Marathon Scholar</h3>
                  <p className="text-xs text-muted-foreground mb-3">Study for 3 hours in one session</p>
                  <div className="w-full bg-muted h-2 rounded-full">
                    <div className="bg-gray-400 h-full rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <p className="text-xs mt-2">Locked</p>
                </Card>
                
                <Card className="text-center p-6 flex flex-col items-center opacity-60">
                  <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mb-3">
                    <Award size={24} />
                  </div>
                  <h3 className="font-medium mb-1">Leaderboard Legend</h3>
                  <p className="text-xs text-muted-foreground mb-3">Reach top 3 on the leaderboard</p>
                  <div className="w-full bg-muted h-2 rounded-full">
                    <div className="bg-gray-400 h-full rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <p className="text-xs mt-2">Locked</p>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="friends">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Friends Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Users size={48} className="mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">Connect with friends</h3>
                      <p className="text-muted-foreground mb-4">
                        Add friends to see their study activity and compete on the leaderboard
                      </p>
                      <Button className="bg-studynest-purple hover:bg-studynest-purple-secondary">
                        Connect Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Study Streak Leaderboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Award size={48} className="mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No leaderboard data available</h3>
                      <p className="text-muted-foreground mb-4">
                        Connect with friends and build your study streak to appear on the leaderboard
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="mood">
              <Card>
                <CardHeader>
                  <CardTitle>Mood Tracker</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Smile size={48} className="mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">How are you feeling after your study session?</h3>
                    <p className="text-muted-foreground mb-6">
                      Tracking your mood can help identify patterns and optimize your study routine
                    </p>
                    
                    <div className="flex justify-center gap-4">
                      <Button variant="outline" className="flex flex-col items-center p-6 hover:bg-red-50 hover:text-red-500 hover:border-red-200">
                        <div className="text-2xl mb-2">😔</div>
                        <span>Stressed</span>
                      </Button>
                      
                      <Button variant="outline" className="flex flex-col items-center p-6 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200">
                        <div className="text-2xl mb-2">😐</div>
                        <span>Neutral</span>
                      </Button>
                      
                      <Button variant="outline" className="flex flex-col items-center p-6 hover:bg-green-50 hover:text-green-500 hover:border-green-200">
                        <div className="text-2xl mb-2">🙂</div>
                        <span>Good</span>
                      </Button>
                      
                      <Button variant="outline" className="flex flex-col items-center p-6 hover:bg-studynest-purple/10 hover:text-studynest-purple hover:border-studynest-purple/20">
                        <div className="text-2xl mb-2">😄</div>
                        <span>Great</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
