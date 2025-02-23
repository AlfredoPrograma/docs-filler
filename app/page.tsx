import { ClientComponent } from "@/components/example/client-component"
import { ServerComponent } from "@/components/example/server-component"

export default function Home() {
  return (
    <div className="space-y-4">
      <ClientComponent />
      <ServerComponent />
    </div>
  )
}
