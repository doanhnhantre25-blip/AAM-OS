import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-3">
        <Button>Create TikTok Video</Button>

        <Button variant="secondary">
          Create Facebook Post
        </Button>

        <Button variant="outline">
          Generate AI Prompt
        </Button>
      </CardContent>
    </Card>
  );
}