"use client";
import { Form, Input, Button } from "antd";
import { useEffect } from "react";

interface CourseFormProps {
  initialValues?: any;
  onFinish: (values: any) => void;
  loading: boolean;
}

export default function CourseForm({ initialValues, onFinish, loading }: CourseFormProps) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} initialValues={initialValues}>
      <Form.Item label="Course Name" name="title" rules={[{ required: true, message: 'Please input name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please input category!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Level" name="level" rules={[{ required: true, message: 'Please input level!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Thumbnail URL" name="thumbnail">
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={loading} block>
        Submit
      </Button>
    </Form>
  );
}