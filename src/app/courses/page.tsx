// src/components/CourseForm.tsx
import { Form, Input, Button, message } from "antd";
import { useEffect } from "react";

export default function CourseForm({ initialValues, onFinish, loading }: any) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) form.setFieldsValue(initialValues);
  }, [initialValues, form]);

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item label="Tên khóa học" name="title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Danh mục" name="category" rules={[{ required: true }]}>
        <Input placeholder="E.g. 4SKILLS" />
      </Form.Item>
      <Form.Item label="Cấp độ" name="level" rules={[{ required: true }]}>
        <Input placeholder="E.g. Total Comprehension" />
      </Form.Item>
      <Form.Item label="Mô tả" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Thumbnail URL" name="thumbnail">
        <Input placeholder="https://..." />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={loading} block>
        Xác nhận lưu
      </Button>
    </Form>
  );
}