"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";

export default function EditCourse() {
  const { id } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lấy dữ liệu cũ đổ vào form
    axiosInstance.get(`/courses/${id}`)
      .then((res: any) => {
        setFormData({ name: res.name, description: res.description });
        setLoading(false);
      })
      .catch(() => {
        alert("Không tìm thấy khóa học");
        router.push("/courses");
      });
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/courses/${id}`, formData);
      alert("Cập nhật thành công!");
      router.push("/courses");
    } catch (error) {
      alert("Cập nhật thất bại!");
    }
  };

  if (loading) return <div className="text-center p-10">Đang tải dữ liệu...</div>;

  return (
    <div className="max-w-2xl p-6 mx-auto mt-10 bg-white rounded-xl shadow-md dark:bg-slate-800">
      <h1 className="mb-6 text-2xl font-bold">Chỉnh sửa khóa học</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Tên khóa học</label>
          <input 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 border rounded dark:bg-slate-700 dark:border-slate-600"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mô tả</label>
          <textarea 
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full p-2 border rounded h-32 dark:bg-slate-700 dark:border-slate-600"
          />
        </div>
        <div className="flex gap-3 text-white">
          <button type="submit" className="px-6 py-2 bg-indigo-600 rounded hover:bg-indigo-700">Cập nhật</button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2 bg-gray-500 rounded hover:bg-gray-600">Hủy</button>
        </div>
      </form>
    </div>
  );
}