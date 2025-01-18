import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth"); // 서버에서 바로 /auth로 리다이렉션
  return null; // 화면에 아무것도 렌더링하지 않음
}