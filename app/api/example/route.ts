import { ExampleGetResponse } from "@/services/example-service"
import { NextResponse } from "next/server"

export async function GET() {
  const response = {
    message: "Hello world"
  } satisfies ExampleGetResponse

  return NextResponse.json(response)
}
