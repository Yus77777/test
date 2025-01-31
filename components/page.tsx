import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, TrendingUp, CircleDollarSign } from "lucide-react"
import SalesChart from "./components/sales-chart"

export default function SalesReport() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">営業レポート</h1>

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">年間目標達成率</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">97.1%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">目標売上</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">¥49.9M</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">達成売上</CardTitle>
            <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">¥48.4M</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>月次目標と実績</CardTitle>
          <p className="text-sm text-muted-foreground">月別の目標売上と達成売上の比較</p>
        </CardHeader>
        <CardContent>
          <SalesChart />
          <div className="mt-4 space-y-2">
            <h3 className="font-medium">考察：</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>2月、4月、8月、9月、11月は目標を上回る実績を達成</li>
              <li>1月と5月の実績が最も低く、年初と年中に課題がある可能性</li>
              <li>下半期（7月-12月）の方が上半期よりも安定した実績を示している</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

