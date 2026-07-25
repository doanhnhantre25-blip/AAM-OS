import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const agents = [
  { name: "AI Writer", status: "Online" },
  { name: "TikTok Creator", status: "Online" },
  { name: "Facebook Publisher", status: "Busy" },
  { name: "Shopee Manager", status: "Offline" },
];

export default function AIStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Agent Status</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="flex items-center justify-between"
          >
            <span>{agent.name}</span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
              {agent.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}