
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const IntegrationPanel = () => {
  const integrations = [
    {
      name: "Twilio",
      description: "Phone number management and call routing",
      category: "Communication",
      status: "connected",
      icon: "📞"
    },
    {
      name: "HubSpot CRM",
      description: "Customer relationship management",
      category: "CRM",
      status: "connected",
      icon: "🏢"
    },
    {
      name: "Google Calendar",
      description: "Appointment scheduling and calendar management",
      category: "Productivity",
      status: "connected",
      icon: "📅"
    },
    {
      name: "Stripe",
      description: "Payment processing and billing",
      category: "Finance",
      status: "available",
      icon: "💳"
    },
    {
      name: "Zendesk",
      description: "Customer support ticketing system",
      category: "Support",
      status: "available",
      icon: "🎫"
    },
    {
      name: "Slack",
      description: "Team communication and notifications",
      category: "Communication",
      status: "available",
      icon: "💬"
    },
    {
      name: "OpenAI GPT-4",
      description: "Advanced language model for conversations",
      category: "AI",
      status: "connected",
      icon: "🤖"
    },
    {
      name: "ElevenLabs",
      description: "High-quality voice synthesis",
      category: "AI",
      status: "connected",
      icon: "🎙️"
    },
    {
      name: "Salesforce",
      description: "Enterprise CRM and sales management",
      category: "CRM",
      status: "available",
      icon: "☁️"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
        return 'bg-green-100 text-green-800';
      case 'available':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'connected':
        return 'Connected';
      case 'available':
        return 'Available';
      default:
        return 'Unknown';
    }
  };

  const categories = [...new Set(integrations.map(integration => integration.category))];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Integrations</h2>
          <p className="text-gray-600">Connect your voice agents with your existing tools</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          Browse All
        </Button>
      </div>

      {/* Integration Categories */}
      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations
              .filter(integration => integration.category === category)
              .map((integration) => (
                <Card key={integration.name} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{integration.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {integration.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(integration.status)}>
                        {getStatusText(integration.status)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {integration.status === 'connected' ? (
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Configure
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Disconnect
                        </Button>
                      </div>
                    ) : (
                      <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Connect
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}

      {/* Integration Stats */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Integration Overview</CardTitle>
          <CardDescription>Your current integration status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-sm text-gray-600">Connected</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">5</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">100+</div>
              <div className="text-sm text-gray-600">Total Integrations</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntegrationPanel;
