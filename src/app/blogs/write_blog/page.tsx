"use client"

import { JSX, useState } from "react"
import { Tag, User } from "@/types/Posts";
import { refreshToken } from "@/lib/utils"
import WriteBlogForm from "@/components/function/write-blog-form";


export default function WriteBlogPage(): JSX.Element {
  const [title, setTitle] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState<User>(
    {
      id: "",
      username: "",
      email: "",
      date_joined: ""
    }
  );
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const getCurrentUser = async () => {
    refreshToken();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_CURRENT_USER_ENDPOINT}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
      let result = await res.json();
      if (!res.ok) {
        console.log(await res.json())
        throw new Error("Failed to fetch");
      }
      return result;
    } catch (error) {
      console.error(error)
    }
  }

  async function onHandleSubmit(): Promise<void> {
    event?.preventDefault();
    getCurrentUser()
      .then((user: User) => setAuthor(user));

    const postUrl = `${process.env.NEXT_PUBLIC_WRITE_BLOG_ENDPOINT}`;
    try {
      const response = await fetch(
        postUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
          },
          body: JSON.stringify({ title, author, description, body, image_url, tags })
        }
      );

      if (response.ok) {
        alert("Post successful");
      }

    } catch (error) {
      console.log("Network Error", error);
    }
  }

  return (
    <div>
      <WriteBlogForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        body={body}
        setBody={setBody}
        image_url={image_url}
        setImageUrl={setImageUrl}
        tags={tags}
        setTags={setTags}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  )
}
