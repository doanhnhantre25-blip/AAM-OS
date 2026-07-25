import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string;
  description?: string;
}

export default function KPICard({
  title,
  value,
  description,
}: KPICardProps) {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="text-3xl font-bold">{value}</div>

        {description && (
          <p className="mt-2 text-xs text-muted-foreground">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}