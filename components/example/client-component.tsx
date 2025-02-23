"use client"

import { getExampleResponse } from "@/services/example-service"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { useSession, signIn, signOut } from "next-auth/react"

export function ClientComponent() {
  const session = useSession()

  const { data, isLoading } = useQuery({
    queryFn: getExampleResponse,
    queryKey: ["example"]
  })

  return (
    <div className="text-2xl">
      <h1>Component loaded from client</h1>

      {isLoading && <p className="text-blue-500">Loading</p>}
      {data && <p className="text-green-500">{data.message}</p>}

      <Button onClick={() => signIn("discord")}>Sign in using discord</Button>

      {session.status === "authenticated" && (
        <Button onClick={() => signOut()}>
          Sign out: {session.data?.user?.name}
        </Button>
      )}
    </div>
  )
}
