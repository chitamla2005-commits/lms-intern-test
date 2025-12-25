"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { message, Spin } from "antd"; // Bỏ import Card nếu bị lỗi type
import axiosInstance from "@/utils/axiosInstance";
import CourseForm from "@/components/CourseForm";

export default function EditCoursePage() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;
      try {
        // Fetch dữ liệu dựa trên ID từ URL [cite: 43]
        const res: any = await axiosInstance.get(`/course/${id}`);
        setCourse(res);
      } catch (error) {
        message.error("Failed to fetch course data");
      } finally {
        setFetching(false);
      }
    };
    fetchCourse();
  }, [id]);

  const onFinish = async (values: any) => {
    setSubmitting(true);
    try {
      // Sử dụng phương thức PUT để cập nhật bản ghi [cite: 92, 93]
      await axiosInstance.put(`/course/${id}`, values);
      message.success("Course updated successfully! [cite: 45]");
      router.push("/courses"); // Redirect về danh sách [cite: 45]
    } catch (error) {
      message.error("Update failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Thay Card bằng div + Tailwind để tránh lỗi Type và hỗ trợ Dark Mode  */}
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden border dark:border-slate-700">
        <div className="px-6 py-4 border-b dark:border-slate-700">
          <h2 className="text-xl font-bold dark:text-white">Update Course [cite: 38]</h2>
        </div>
        <div className="p-6">
          {fetching ? (
            <div className="flex justify-center p-10"><Spin /></div>
          ) : (
            <CourseForm initialValues={course} onFinish={onFinish} loading={submitting} />
          )}
        </div>
      </div>
    </div>
  );
}