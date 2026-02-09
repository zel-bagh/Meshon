import { Button } from "@/components/ui/button";
import { caller } from "@/trpc/server";

export default async function Home() {
const users = await caller.getUsers();

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <Button>
        Total Users: {users.length}
      </Button>
    </div>
  );
}
