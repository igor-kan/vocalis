
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, HeadphonesIcon, Mic, VolumeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AgentCard from "@/components/AgentCard";
import CallAnalytics from "@/components/CallAnalytics";
import IntegrationPanel from "@/components/IntegrationPanel";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("agents");

  const agents = [
    {
      id: 1,
      name: "Customer Support Agent",
      type: "Customer Support",
      status: "active",
      calls: 1247,
      successRate: 94,
      avgDuration: "3:42",
      lastCall: "2 minutes ago"
    },
    {
      id: 2,
      name: "Reception Assistant",
      type: "Receptionist",
      status: "active",
      calls: 856,
      successRate: 97,
      avgDuration: "2:18",
      lastCall: "5 minutes ago"
    },
    {
      id: 3,
      name: "Medical Clinic Bot",
      type: "Healthcare",
      status: "inactive",
      calls: 432,
      successRate: 91,
      avgDuration: "4:56",
      lastCall: "1 hour ago"
    },
    {
      id: 4,
      name: "Logistics Helper",
      type: "Logistics",
      status: "active",
      calls: 2103,
      successRate: 89,
      avgDuration: "1:34",
      lastCall: "1 minute ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VoiceAI Platform
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/')}>
                Home
              </Button>
              <Button variant="ghost">Settings</Button>
              <Button variant="ghost">Profile</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Voice AI Dashboard</h1>
          <p className="text-gray-600">Manage your AI voice agents and monitor performance</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Agents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <p className="text-xs text-green-600">+1 from last week</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Calls Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">2,847</div>
              <p className="text-xs text-green-600">+12% from yesterday</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Avg Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">93%</div>
              <p className="text-xs text-green-600">+2% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Cost Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$18.2K</div>
              <p className="text-xs text-green-600">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="agents">Voice Agents</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Your Voice Agents</h2>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Create New Agent
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
              
              {/* Add New Agent Card */}
              <Card className="bg-white/80 backdrop-blur-sm border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors cursor-pointer group">
                <CardContent className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="w-16 h-16 bg-gray-100 group-hover:bg-blue-50 rounded-full flex items-center justify-center mb-4 transition-colors">
                    <Phone className="w-8 h-8 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Create New Agent</h3>
                  <p className="text-sm text-gray-600 mb-4">Deploy a new voice AI agent in minutes</p>
                  <Button variant="outline" className="group-hover:bg-blue-50 group-hover:border-blue-200">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <CallAnalytics />
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <IntegrationPanel />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure your VoiceAI platform preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Settings panel coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
