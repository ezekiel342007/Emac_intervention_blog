"use client"

import WriteBlogForm from "@/components/function/write-blog-form";
import { useState } from "react"

export default function WriteBlogPage() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  async function onHandleSubmit() {
    event?.preventDefault();

    const postUrl = `${process.env.NEXT_PUBLIC_WRITE_BLOG_ENDPOINT}`;
    try {
      const response = await fetch(
        postUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ title, description, body, imageUrl })
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
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  )
}
