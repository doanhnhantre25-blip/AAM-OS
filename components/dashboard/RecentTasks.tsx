import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tasks = [
  "Generate TikTok Script",
  "Create Facebook Post",
  "Publish Shopee Product",
  "Optimize SEO Article",
];

export default function RecentTasks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Tasks</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task}
            className="rounded-lg border p-3"
          >
            {task}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}