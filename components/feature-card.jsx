import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeatureCard({ icon, title, description }) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto mb-4">{icon}</div>
        <CardTitle className="text-xl text-slate-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-slate-600">
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

