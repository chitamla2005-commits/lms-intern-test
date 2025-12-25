"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";

export default function CourseDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi API lấy chi tiết khóa học theo ID
    const fetchCourse = async () => {
      try {
        const res = await axiosInstance.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error("Không tìm thấy khóa học");
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading) return <p className="p-10 text-center">Đang tải dữ liệu...</p>;

  return (
    <div className="max-w-4xl p-6 mx-auto mt-10 border rounded-lg dark:border-slate-700">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold uppercase">{course?.name || "Tên khóa học"}</h1>
        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full dark:bg-blue-900 dark:text-blue-200">
          ID: {id}
        </span>
      </div>
      
      <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg mb-6">
        <h3 className="font-semibold mb-2">Mô tả chi tiết:</h3>
        <p className="text-gray-700 dark:text-gray-300">
          {course?.description || "Chưa có mô tả cho khóa học này."}
        </p>
      </div>

      <button 
        onClick={() => router.push('/courses')}
        className="text-blue-500 hover:underline"
      >
        &larr; Quay lại danh sách
      </button>
    </div>
  );
}