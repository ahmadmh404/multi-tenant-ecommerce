import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col justify-center gap-4 p-5">
      <div>
        <Button variant={"elevated"}>I am a button!</Button>
      </div>
      <div>
        <Input placeholder="I am an input" />
      </div>

      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea placeholder="I am an textarea" />
      </div>
    </div>
  );
}
