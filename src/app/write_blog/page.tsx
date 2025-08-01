import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <div>
      <form>
        <Label htmlFor="title">Title</Label>
        <Input name="title" />
        <Textarea />
      </form>
    </div>
  )
}
