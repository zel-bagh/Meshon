'use client';
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";


export default function Home() {
  const trpc = useTRPC();
  const { data: users } = useQuery(trpc.getUsers.queryOptions())

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <Button>
        Total Users: {users?.length ?? "0"}
      </Button>
    </div>
  );
}
