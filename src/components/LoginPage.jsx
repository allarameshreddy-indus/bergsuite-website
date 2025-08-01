import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { Users, BookOpen, Bus, Calendar, ArrowRight } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [studentId, setStudentId] = useState('');
  const [schoolId, setSchoolId] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [password, setPassword] = useState('');

  const handleStudentLogin = (e) => {
    e.preventDefault();
    if (studentId && schoolId) {
      onLogin({ id: studentId, schoolId, name: 'John Doe' }, 'student');
      toast({
        title: "Welcome Student! 🎓",
        description: "Successfully logged into your school portal!",
      });
    } else {
      toast({
        title: "Missing Information",
        description: "Please enter both Student ID and School ID",
        variant: "destructive"
      });
    }
  };

  const handleTeacherLogin = (e) => {
    e.preventDefault();
    if (teacherId && schoolId && password) {
      onLogin({ id: teacherId, schoolId, name: 'Ms. Sarah Johnson' }, 'teacher');
      toast({
        title: "Welcome Teacher! 👩‍🏫",
        description: "Successfully logged into your teaching dashboard!",
      });
    } else {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
    }
  };

  const features = [
    {
      title: "Real-time Bus Tracking",
      desc: "Live GPS tracking with arrival notifications for peace of mind.",
      icon: Bus,
    },
    {
      title: "Attendance & Timetable",
      desc: "Instant alerts for absences and easy access to daily schedules.",
      icon: Calendar,
    },
    {
      title: "Homework & Behavior",
      desc: "Track assignments, view submissions, and monitor behavioral progress.",
      icon: BookOpen,
    },
    {
      title: "Report Cards & Communication",
      desc: "Access grades, download reports, and communicate seamlessly.",
      icon: Users,
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header className="p-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="https://horizons-cdn.hostinger.com/4471bad2-b75a-4d15-9c8d-46bac3514975/9eb6a8e693b85ecfa667e7f94c2bd9b5.webp" alt="Vidyarambh Logo" className="h-10" />
            <span className="text-xl font-bold">Vidyarambh</span>
          </div>
          <Button onClick={() => document.getElementById('login-section').scrollIntoView({ behavior: 'smooth' })}>
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            The Future of School Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            A unified platform for students, parents, and teachers to enhance safety, communication, and learning outcomes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" onClick={() => document.getElementById('login-section').scrollIntoView({ behavior: 'smooth' })}>
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">All-in-One Platform</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            From the school bus to the classroom, we've got everything covered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-left h-full card-hover">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section id="login-section" className="py-20">
        <div className="container mx-auto flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                <CardDescription>
                  Sign in to access your school portal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="student" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="student">Student/Parent</TabsTrigger>
                    <TabsTrigger value="teacher">Teacher/Staff</TabsTrigger>
                  </TabsList>

                  <TabsContent value="student">
                    <form onSubmit={handleStudentLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentId">Student ID</Label>
                        <Input
                          id="studentId"
                          type="text"
                          placeholder="Enter your student ID"
                          value={studentId}
                          onChange={(e) => setStudentId(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="schoolId">School ID</Label>
                        <Input
                          id="schoolId"
                          type="text"
                          placeholder="Enter your school ID"
                          value={schoolId}
                          onChange={(e) => setSchoolId(e.target.value)}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Sign In as Student
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="teacher">
                    <form onSubmit={handleTeacherLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="teacherId">Teacher ID</Label>
                        <Input
                          id="teacherId"
                          type="text"
                          placeholder="Enter your teacher ID"
                          value={teacherId}
                          onChange={(e) => setTeacherId(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="teacherSchoolId">School ID</Label>
                        <Input
                          id="teacherSchoolId"
                          type="text"
                          placeholder="Enter school ID"
                          value={schoolId}
                          onChange={(e) => setSchoolId(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Sign In as Teacher
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Vidyarambh. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;