import Image from 'next/image'
import {NextResponse} from "next/server";
import {redirect} from "next/navigation";

export default function Home() {
  async function go(formData: FormData) {
    'use server'
    const url = formData.get('url') as string;
    console.log(url);
    redirect('/medium?rewrite=' + encodeURIComponent(url));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form
        className="h-full w-3/6 flex items-center justify-center"
        action={go}
      >
        <input
          className="px-3 py-2.5 border border-gray-300 rounded-md rounded-r-none w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Enter your Medium URL"
          name="url"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-10 rounded-md rounded-l-none h-full"
          type="submit"
        >
          Go
        </button>
      </form>
    </main>
  )
}
