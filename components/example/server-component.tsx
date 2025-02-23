import { getExampleResponse } from "@/services/example-service"

export async function ServerComponent() {
  const data = await getExampleResponse()

  return (
    <p className="text-blue-500">
      Component loaded from server: {data.message}
    </p>
  )
}
