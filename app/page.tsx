import AppLayout from "@/components/layout/AppLayout";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPICard from "@/components/dashboard/KPICard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import AIStatus from "@/components/dashboard/AIStatus";
import RecentTasks from "@/components/dashboard/RecentTasks";
import QuickActions from "@/components/dashboard/QuickActions";

export default function Home() {
  return (
    <AppLayout>
      <DashboardHeader />

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <KPICard
          title="AI Tasks"
          value="24"
          description="+18% so với hôm qua"
        />

        <KPICard
          title="TikTok Videos"
          value="18"
          description="Đã tạo hôm nay"
        />

        <KPICard
          title="Shopee Orders"
          value="96"
          description="Đơn hàng mới"
        />

        <KPICard
          title="Revenue"
          value="125M₫"
          description="Doanh thu tháng"
        />
      </div>

      {/* Chart + AI Status */}
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        <AIStatus />
      </div>

      {/* Recent Tasks + Quick Actions */}
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <RecentTasks />

        <QuickActions />
      </div>
    </AppLayout>
  );
}