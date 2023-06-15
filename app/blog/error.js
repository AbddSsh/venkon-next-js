"use client";

export default function ErrorWrapper({ error }) {
  return <h1>Oooops... Something wrong :/ {error.message}</h1>;
}
