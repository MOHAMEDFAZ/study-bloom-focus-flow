
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlayCircle, PauseCircle, RotateCw, Coffee, Brain } from 'lucide-react';
import { toast } from 'sonner';

type TimerMode = 'work' | 'break';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<TimerMode>('work');
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_c8a410a8c6.mp3?filename=bell-ringing-05-118758.mp3');
  }, []);

  useEffect(() => {
    let interval: number | undefined;
    
    if (isActive) {
      interval = window.setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            audioRef.current?.play();
            
            // Switch modes
            if (mode === 'work') {
              setMode('break');
              setMinutes(breakDuration);
              toast.success("Work session complete! Time for a break.");
            } else {
              setMode('work');
              setMinutes(workDuration);
              toast.success("Break time over! Back to work.");
            }
            
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, mode, workDuration, breakDuration]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    if (mode === 'work') {
      setMinutes(workDuration);
    } else {
      setMinutes(breakDuration);
    }
    setSeconds(0);
  };

  const switchMode = () => {
    setIsActive(false);
    if (mode === 'work') {
      setMode('break');
      setMinutes(breakDuration);
    } else {
      setMode('work');
      setMinutes(workDuration);
    }
    setSeconds(0);
  };

  const updateWorkDuration = (value: number[]) => {
    setWorkDuration(value[0]);
    if (mode === 'work' && !isActive) {
      setMinutes(value[0]);
    }
  };

  const updateBreakDuration = (value: number[]) => {
    setBreakDuration(value[0]);
    if (mode === 'break' && !isActive) {
      setMinutes(value[0]);
    }
  };

  // Calculate progress percentage
  const totalSeconds = (mode === 'work' ? workDuration : breakDuration) * 60;
  const remainingSeconds = minutes * 60 + seconds;
  const progressPercentage = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
  
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-semibold flex items-center justify-center gap-2">
          {mode === 'work' ? (
            <>
              <Brain className="text-studynest-purple" size={24} /> Focus Time
            </>
          ) : (
            <>
              <Coffee className="text-studynest-blue" size={24} /> Break Time
            </>
          )}
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          {mode === 'work' 
            ? "Stay focused on your task. You got this!" 
            : "Take a short break. Stretch, relax, and clear your mind."
          }
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle 
                className="text-muted stroke-current" 
                strokeWidth="4" 
                fill="transparent" 
                r="45" 
                cx="50" 
                cy="50" 
              />
              <circle 
                className={`${mode === 'work' ? 'text-studynest-purple' : 'text-studynest-blue'} stroke-current`}
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="transparent" 
                r="45" 
                cx="50" 
                cy="50" 
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * progressPercentage) / 100} 
                transform="rotate(-90 50 50)" 
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold">
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 w-full mt-4">
            <Button 
              variant={mode === 'work' ? "default" : "outline"}
              className={mode === 'work' ? "bg-studynest-purple hover:bg-studynest-purple-secondary" : ""}
              onClick={() => {
                if (mode !== 'work') {
                  switchMode();
                }
              }}
            >
              Work
            </Button>
            <Button 
              variant="outline" 
              onClick={resetTimer}
              className="flex items-center justify-center"
            >
              <RotateCw size={18} className="mr-1" /> Reset
            </Button>
            <Button 
              variant={mode === 'break' ? "default" : "outline"} 
              className={mode === 'break' ? "bg-studynest-blue hover:bg-studynest-blue-light text-studynest-purple-dark" : ""}
              onClick={() => {
                if (mode !== 'break') {
                  switchMode();
                }
              }}
            >
              Break
            </Button>
          </div>
          
          <Button 
            className={`w-full mt-4 ${isActive 
              ? "bg-red-500 hover:bg-red-600" 
              : "bg-green-500 hover:bg-green-600"}`}
            onClick={toggleTimer}
          >
            {isActive ? (
              <><PauseCircle size={18} className="mr-2" /> Pause</>
            ) : (
              <><PlayCircle size={18} className="mr-2" /> Start</>
            )}
          </Button>
          
          <div className="w-full mt-8">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">Work Duration: {workDuration} min</label>
              </div>
              <Slider 
                defaultValue={[25]} 
                min={5} 
                max={60} 
                step={5}
                value={[workDuration]}
                onValueChange={updateWorkDuration}
                disabled={isActive && mode === 'work'}
                className="w-full"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">Break Duration: {breakDuration} min</label>
              </div>
              <Slider 
                defaultValue={[5]} 
                min={1} 
                max={15} 
                step={1}
                value={[breakDuration]}
                onValueChange={updateBreakDuration}
                disabled={isActive && mode === 'break'}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PomodoroTimer;
