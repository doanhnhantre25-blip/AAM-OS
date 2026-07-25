export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Chào mừng trở lại AAM-OS
        </p>
      </div>

      <div className="text-sm text-muted-foreground">
        {today}
      </div>
    </div>
  );
}