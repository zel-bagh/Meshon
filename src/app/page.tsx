import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

export default async function Home() {
const users = await prisma.user.findMany();

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <Button>
        Total Users: {users.length}
      </Button>
    </div>
  );
}
