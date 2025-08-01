import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';
import { 
  Bus, 
  Users, 
  BookOpen, 
  MessageCircle, 
  FileText, 
  CreditCard, 
  Award, 
  Calendar,
  Bell,
  LogOut,
  MapPin,
  Clock,
  TrendingUp,
  Star,
  AlertCircle,
  CheckCircle,
  User,
  Settings
} from 'lucide-react';

const Dashboard = ({ user, userRole, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const menuItems = userRole === 'student' ? [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'bus', label: 'Bus Tracking', icon: Bus },
    { id: 'attendance', label: 'Attendance', icon: Users },
    { id: 'academics', label: 'Academics', icon: BookOpen },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'fees', label: 'Fees', icon: CreditCard },
    { id: 'events', label: 'Events', icon: Calendar },
  ] : [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'attendance', label: 'Attendance', icon: CheckCircle },
    { id: 'academics', label: 'Academics', icon: BookOpen },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'behavior', label: 'Behavior', icon: Award },
  ];

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.5%</div>
              <p className="text-xs text-muted-foreground">+2.5% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Academic Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87.2%</div>
              <p className="text-xs text-muted-foreground">+1.2% from last exam</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">1 homework, 2 assignments</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">2 new this month</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Access frequently used features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(userRole === 'student' ? [
                { icon: Bus, label: 'Track Bus' },
                { icon: BookOpen, label: 'Homework' },
                { icon: MessageCircle, label: 'Messages' },
                { icon: Calendar, label: 'Schedule' },
              ] : [
                { icon: Users, label: 'Take Attendance' },
                { icon: FileText, label: 'Create Report' },
                { icon: MessageCircle, label: 'Send Message' },
                { icon: Award, label: 'Add Achievement' },
              ]).map((quickAction) => (
                <Button
                  key={quickAction.label}
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center space-y-2"
                  onClick={() => handleFeatureClick(quickAction.label)}
                >
                  <quickAction.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-center">{quickAction.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { icon: CheckCircle, text: 'Attendance marked for Math', color: 'text-green-500' },
                { icon: BookOpen, text: 'New Science homework assigned', color: 'text-blue-500' },
                { icon: MessageCircle, text: 'Message from Ms. Johnson', color: 'text-purple-500' },
                { icon: Star, text: 'Perfect Attendance award', color: 'text-yellow-500' },
              ].map((activity, activityIndex) => (
                <div key={activityIndex} className="flex items-center space-x-3">
                  <activity.icon className={`w-4 h-4 ${activity.color}`} />
                  <p className="text-sm text-muted-foreground">{activity.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderBusTracking = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bus className="w-6 h-6" />
            <span>Live Bus Tracking</span>
          </CardTitle>
          <CardDescription>
            Real-time location and arrival updates for Bus #42
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Bus className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Bus #42</h3>
                    <p className="text-muted-foreground text-sm">Route: Downtown - School</p>
                  </div>
                </div>
                <Badge>On Time</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground text-xs">Current Location</p>
                    <p className="text-sm font-medium">Main Street & 5th Ave</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground text-xs">ETA</p>
                    <p className="text-sm font-medium">8 minutes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground text-xs">Speed</p>
                    <p className="text-sm font-medium">25 mph</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-r-lg">
              <div className="flex">
                <div className="py-1"><Bell className="w-5 h-5 text-blue-500 mr-3" /></div>
                <div>
                  <p className="font-bold">Notification</p>
                  <p className="text-sm">Bus will arrive at your stop in approximately 8 minutes!</p>
                </div>
              </div>
            </div>

            <Button 
              className="w-full"
              onClick={() => handleFeatureClick('GPS Map')}
            >
              <MapPin className="w-4 h-4 mr-2" />
              View on Map
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'bus':
        return renderBusTracking();
      default:
        return (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Feature Coming Soon!</h3>
                <p className="text-muted-foreground">
                  This section is under development. Stay tuned for amazing features!
                </p>
                <Button onClick={() => handleFeatureClick(activeSection)}>
                  Request Feature Implementation
                </Button>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-secondary">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -256 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-background border-r p-4 flex flex-col"
      >
        <div className="p-4 mb-4 flex items-center space-x-3">
          <img src="https://horizons-cdn.hostinger.com/4471bad2-b75a-4d15-9c8d-46bac3514975/9eb6a8e693b85ecfa667e7f94c2bd9b5.webp" alt="Vidyarambh Logo" className="h-10" />
          <span className="text-xl font-bold">Vidyarambh</span>
        </div>

        <nav className="space-y-1 flex-1">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveSection(item.id)}
            >
              <item.icon className="w-4 h-4 mr-3" />
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="p-4 border-t">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-muted-foreground capitalize">{userRole}</p>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={onLogout}
          >
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </Button>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">
              {menuItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
            </h1>
            <p className="text-muted-foreground">
              {userRole === 'student' 
                ? 'Manage your academic journey and stay connected.'
                : 'Monitor student progress and manage your classroom.'
              }
            </p>
          </div>

          {renderContent()}
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;