
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, HeadphonesIcon, VolumeIcon } from "lucide-react";

interface Agent {
  id: number;
  name: string;
  type: string;
  status: string;
  calls: number;
  successRate: number;
  avgDuration: string;
  lastCall: string;
}

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'Customer Support':
        return <HeadphonesIcon className="w-5 h-5" />;
      case 'Receptionist':
        return <Phone className="w-5 h-5" />;
      case 'Healthcare':
        return <VolumeIcon className="w-5 h-5" />;
      case 'Logistics':
        return <Phone className="w-5 h-5" />;
      default:
        return <Phone className="w-5 h-5" />;
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
              {getIcon(agent.type)}
            </div>
            <div>
              <CardTitle className="text-lg">{agent.name}</CardTitle>
              <CardDescription className="text-sm text-gray-600">{agent.type}</CardDescription>
            </div>
          </div>
          <Badge className={getStatusColor(agent.status)}>
            {agent.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-medium text-gray-900">{agent.calls.toLocaleString()}</div>
            <div className="text-gray-600">Total Calls</div>
          </div>
          <div>
            <div className="font-medium text-gray-900">{agent.successRate}%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="font-medium text-gray-900">{agent.avgDuration}</div>
            <div className="text-gray-600">Avg Duration</div>
          </div>
          <div>
            <div className="font-medium text-gray-900">{agent.lastCall}</div>
            <div className="text-gray-600">Last Call</div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            Configure
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Analytics
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentCard;
