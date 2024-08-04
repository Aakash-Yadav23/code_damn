import { Button } from "../ui/button";
import { Eye, UserPlus, EyeOff, Play, CloudUpload } from "lucide-react";

export default function EditorNavbar() {
  return (
    <div
      className={
        "h-20 flex bg-[#111827] justify-between items-center w-full px-10 py-2 border"
      }
    >
      <div className="file-name">
        <h1>Node.js</h1>
      </div>

      <Button
        variant={"default"}
        className="bg-green-800 hover:bg-green-700 text-white"
      >
        <Play />
        Run
      </Button>

      <div className="flex items-center gap-2">
        <Button
          variant={"outline"}
          className="flex items-center gap-1 relative"
        >
          <UserPlus />

          <span className="text-xl">Invite</span>
        </Button>
        <Button
          variant={"outline"}
          className="flex items-center gap-1 relative"
        >
          <Eye />
          {/* <EyeOff /> */}

          <span className="text-[14px] relative top-1">24</span>
        </Button>
        <Button variant={"outline"} className=" flex items-center gap-2">
          <CloudUpload />
          Deploy
        </Button>
      </div>
    </div>
  );
}
