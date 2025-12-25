"use client";
import Link from "next/link";


export default function CourseList() {
  return (
    <div className="container p-6 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Danh sách khóa học</h1>
        <Link 
          href="/courses/create" 
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          + Thêm mới
        </Link>
      </div>

      {/* Grid Layout thay cho Inline Style */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Card Item mẫu */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="p-4 border rounded-lg shadow hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-xl font-semibold">Khóa học ReactJS {item}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Mô tả ngắn gọn về khóa học này...</p>
            <div className="mt-4">
              <Link href={`/courses/${item}`} className="text-blue-500 hover:underline">
                Xem chi tiết &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}