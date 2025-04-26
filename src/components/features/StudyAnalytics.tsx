
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Clock, Calendar, Award, TrendingUp } from 'lucide-react';

interface StudySession {
  date: string;
  duration: number; // in minutes
}

interface StudyData {
  weeklyData: {
    name: string;
    minutes: number;
  }[];
  totalMinutes: number;
  streakDays: number;
  sessionsCompleted: number;
}

const defaultData: StudyData = {
  weeklyData: [
    { name: 'Mon', minutes: 45 },
    { name: 'Tue', minutes: 60 },
    { name: 'Wed', minutes: 30 },
    { name: 'Thu', minutes: 75 },
    { name: 'Fri', minutes: 25 },
    { name: 'Sat', minutes: 90 },
    { name: 'Sun', minutes: 0 },
  ],
  totalMinutes: 325,
  streakDays: 5,
  sessionsCompleted: 12
};

const StudyAnalytics = () => {
  const [studyData, setStudyData] = useState<StudyData>(defaultData);

  useEffect(() => {
    // Load study data from localStorage
    const savedData = localStorage.getItem('studyData');
    if (savedData) {
      try {
        setStudyData(JSON.parse(savedData));
      } catch (e) {
        console.error('Error parsing study data', e);
        setStudyData(defaultData);
      }
    } else {
      setStudyData(defaultData);
    }
  }, []);

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours === 0) {
      return `${mins} min`;
    } else if (mins === 0) {
      return `${hours} hr`;
    } else {
      return `${hours} hr ${mins} min`;
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-border rounded shadow-lg">
          <p className="font-medium">{label}</p>
          <p className="text-studynest-purple">{`Study time: ${formatTime(payload[0].value)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">Study Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={studyData.weeklyData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis 
                  dataKey="name" 
                  tickLine={false}
                  axisLine={{ stroke: '#eee' }}
                />
                <YAxis 
                  tickLine={false}
                  axisLine={{ stroke: '#eee' }}
                  tickFormatter={(value) => `${value}m`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="minutes" 
                  fill="#9b87f5"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 flex items-center">
            <div className="w-12 h-12 rounded-full bg-studynest-purple/20 text-studynest-purple flex items-center justify-center mr-4">
              <Clock size={22} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Study Time</p>
              <p className="text-2xl font-semibold">{formatTime(studyData.totalMinutes)}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center">
            <div className="w-12 h-12 rounded-full bg-studynest-purple/20 text-studynest-purple flex items-center justify-center mr-4">
              <Calendar size={22} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Streak</p>
              <p className="text-2xl font-semibold">{studyData.streakDays} days</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center">
            <div className="w-12 h-12 rounded-full bg-studynest-purple/20 text-studynest-purple flex items-center justify-center mr-4">
              <Award size={22} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Sessions Completed</p>
              <p className="text-2xl font-semibold">{studyData.sessionsCompleted}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudyAnalytics;
