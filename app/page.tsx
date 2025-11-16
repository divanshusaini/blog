import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <div>
      <nav className="text-2xl p-3 flex justify-center font-medium">
        Divanshu Blogging
      </nav>
      <section>

    <Dialog>
      <form>
      <div className="flex justify-center p-4 ml-32">
      <DialogTrigger asChild>
          <Button variant="outline" className="">write a new blog</Button>
        </DialogTrigger>
      </div>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>write your blog</DialogTitle>
            <DialogDescription>
              blog
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Title</Label>
              <Input id="name-1" name="name" defaultValue="title of your blog" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Content</Label>
              <Input id="username-1" name="username" defaultValue="something about you" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  
      </section>
      {/* <footer className="">
        <div>
          <div>
            hey this my blogging Website 
          </div>
        </div>
      </footer> */}
    </div>
  );
}
