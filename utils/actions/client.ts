import { createBlog } from "./server";

export async function createClientBlog(title: string, description: string) {
    const data = await createBlog(title, description);

    return data;
}