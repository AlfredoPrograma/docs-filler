import { api } from "@/core/api"

export type ExampleGetResponse = {
  message: string
}

export async function getExampleResponse() {
  const response = await api.get<ExampleGetResponse>("/example")
  return response.data
}
