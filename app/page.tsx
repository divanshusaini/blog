"use client"
import { createBlog } from "@/utils/actions/server"
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const title = formData.get("title") as string //access by id
    const content = formData.get("content") as string // access by id
    
    // createBlog(title, content)
  }

  return (
    <div>
      <nav className="text-2xl p-3 flex justify-center font-medium">
        Divanshu Blogging
      </nav>
      <section>
        <Dialog>
          <div className="flex justify-center p-4 ml-32">
            <DialogTrigger asChild>
              <Button variant="outline">Write a new blog</Button>
            </DialogTrigger>
          </div>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>Write your blog</DialogTitle>
                <DialogDescription>
                  Blog
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title" 
                    name="title" 
                    placeholder="title of your blog" 
                    required 
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="content">Content</Label>
                  <Input 
                    id="content" 
                    name="content" 
                    placeholder="something about you" 
                    required 
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}
