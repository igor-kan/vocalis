
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CallAnalytics = () => {
  const recentCalls = [
    {
      id: 1,
      agent: "Customer Support Agent",
      caller: "+1 (555) 123-4567",
      duration: "4:32",
      status: "resolved",
      timestamp: "2 minutes ago",
      summary: "Customer inquiry about order status - successfully resolved"
    },
    {
      id: 2,
      agent: "Reception Assistant",
      caller: "+1 (555) 987-6543",
      duration: "2:18",
      status: "transferred",
      timestamp: "5 minutes ago",
      summary: "Appointment booking request - transferred to scheduler"
    },
    {
      id: 3,
      agent: "Logistics Helper",
      caller: "+1 (555) 456-7890",
      duration: "1:45",
      status: "resolved",
      timestamp: "8 minutes ago",
      summary: "Delivery ETA inquiry - provided tracking information"
    },
    {
      id: 4,
      agent: "Customer Support Agent",
      caller: "+1 (555) 234-5678",
      duration: "6:12",
      status: "escalated",
      timestamp: "12 minutes ago",
      summary: "Technical issue - escalated to human agent"
    },
    {
      id: 5,
      agent: "Reception Assistant",
      caller: "+1 (555) 345-6789",
      duration: "3:04",
      status: "resolved",
      timestamp: "15 minutes ago",
      summary: "General information request - FAQ answered"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'transferred':
        return 'bg-blue-100 text-blue-800';
      case 'escalated':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Call Analytics</h2>
      
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Resolution Rate</CardTitle>
            <CardDescription>Calls resolved without escalation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Avg Call Duration</CardTitle>
            <CardDescription>Average time per call</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600 mb-2">3:12</div>
            <p className="text-sm text-gray-600">-18% from last week</p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Customer Satisfaction</CardTitle>
            <CardDescription>Based on post-call surveys</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600 mb-2">4.8/5</div>
            <p className="text-sm text-gray-600">From 1,247 surveys</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Calls */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Recent Calls</CardTitle>
          <CardDescription>Live feed of incoming and completed calls</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCalls.map((call) => (
              <div key={call.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-gray-900">{call.agent}</span>
                    <Badge className={getStatusColor(call.status)}>
                      {call.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {call.caller} • {call.duration} • {call.timestamp}
                  </div>
                  <div className="text-sm text-gray-700">
                    {call.summary}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CallAnalytics;
