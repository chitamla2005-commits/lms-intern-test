"use client";
import { useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";

export default function CreateCourse() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/courses", { name, description: desc });
      alert("Tạo khóa học thành công!");
      router.push("/courses");
    } catch (error) {
      alert("Lỗi khi tạo khóa học");
    }
  };

  return (
    <div className="max-w-2xl p-6 mx-auto mt-10 bg-white rounded-xl shadow-md dark:bg-slate-800">
      <h1 className="mb-6 text-2xl font-bold">Tạo khóa học mới</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Tên khóa học</label>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded dark:bg-slate-700 dark:border-slate-600"
            placeholder="Nhập tên khóa học..."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mô tả</label>
          <textarea 
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-2 border rounded h-32 dark:bg-slate-700 dark:border-slate-600"
            placeholder="Nhập mô tả..."
          />
        </div>
        <div className="flex gap-3">
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Lưu lại</button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Hủy</button>
        </div>
      </form>
    </div>
  );
}