"use client"

import { useState, useEffect } from "react"
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
import { toast } from "sonner"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Blogs = {
  id: string;
  created_at: Date;
  title: string;
  description: string;
}

export default function Home() {
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    const response = async () => {
      const result = await fetch("/api/get-blog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await result.json();
      setBlogs(data);
    }
    response();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const title = formData.get("title") as string //access by id
    const content = formData.get("content") as string // access by id

    await fetch('/api/create-blog', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content })
    })

    toast.success("Blog successfully made!")
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
      <section>
        {blogs.map((blog) => {
          return (
            <Card key={blog.id} className="w-4xl">
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>{blog.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{blog.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </section>
    </div>
  );
}
