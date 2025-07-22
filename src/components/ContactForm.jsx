import React, { useState } from "react";
import { Form, Input, Select, Button, Checkbox } from "antd";

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", values);
      setLoading(false);
      form.resetFields();
    }, 1000);
  };

  return (
    <section className="section-padding bg-dark-800 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-4 block">
            Experience Devop360 in Action
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Schedule Your Personalized Demo Today
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how Devop360’s integrated platform can streamline your
            operations, boost performance, and drive innovation. Our team will
            walk you through a live demo tailored to your business needs. Don’t
            miss the chance to explore how our solutions can help you scale
            smarter—schedule your demo now and take the first step toward
            digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-10xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item
                  name="firstName"
                  label={
                    <span className="text-white font-medium">First name*</span>
                  }
                  rules={[
                    { required: true, message: "Please enter your first name" },
                  ]}
                >
                  <Input placeholder="First name" className="h-12" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  label={
                    <span className="text-white font-medium">Last name*</span>
                  }
                  rules={[
                    { required: true, message: "Please enter your last name" },
                  ]}
                >
                  <Input placeholder="Last name" className="h-12" />
                </Form.Item>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item
                  name="jobTitle"
                  label={
                    <span className="text-white font-medium">Job Title*</span>
                  }
                  rules={[
                    { required: true, message: "Please enter your job title" },
                  ]}
                >
                  <Input placeholder="Job Title" className="h-12" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label={<span className="text-white font-medium">Email*</span>}
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input placeholder="Email" className="h-12" />
                </Form.Item>
              </div>

              <Form.Item
                name="interestedIn"
                label={
                  <span className="text-white font-medium">Interested in</span>
                }
              >
                <Select
                  placeholder="Please Select"
                  className="h-12"
                  options={[
                    { value: "geodrilling", label: "GeoDrilling Solutions" },
                    { value: "platform", label: "Corva Platform" },
                    { value: "analytics", label: "Data Analytics" },
                    { value: "fusion", label: "Fusion Platform" },
                    { value: "other", label: "Other" },
                  ]}
                />
              </Form.Item>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Form.Item
                  name="company"
                  label={
                    <span className="text-white font-medium">
                      Company name*
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please enter your company name",
                    },
                  ]}
                >
                  <Input placeholder="Company name" className="h-12" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label={
                    <span className="text-white font-medium">Phone number</span>
                  }
                >
                  <Input placeholder="Phone number" className="h-12" />
                </Form.Item>
                <Form.Item
                  name="country"
                  label={
                    <span className="text-white font-medium">
                      Country/Region*
                    </span>
                  }
                  rules={[
                    { required: true, message: "Please select your country" },
                  ]}
                >
                  <Select
                    placeholder="Select Country"
                    className="h-12"
                    options={[
                      { value: "us", label: "United States" },
                      { value: "ca", label: "Canada" },
                      { value: "uk", label: "United Kingdom" },
                      { value: "au", label: "Australia" },
                      { value: "other", label: "Other" },
                    ]}
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="message"
                label={<span className="text-white font-medium">Message</span>}
              >
                <Input.TextArea
                  placeholder="Your message"
                  rows={4}
                  className="resize-none"
                />
              </Form.Item>

            <div className="space-y-4">
  <div className="text-xs text-gray-400 leading-relaxed">
    Devop360 is committed to protecting your privacy. We use your personal information only to manage your account and deliver the services and solutions you’ve requested from us. Occasionally, we may want to contact you about new features, updates, or content that we believe may interest you. If you agree to receive such communications, please indicate your preferences below:
  </div>

  <Form.Item name="communications" valuePropName="checked">
    <Checkbox className="text-white">
      <span className="text-white text-sm">
        I agree to receive updates and communications from Devop360.
      </span>
    </Checkbox>
  </Form.Item>

  <div className="text-xs text-gray-400 leading-relaxed">
    You may unsubscribe from these communications at any time. To learn more about how to unsubscribe, as well as our privacy practices and how we protect your data, please review our Privacy Policy. By clicking "Submit", you consent to allow Devop360 to store and process your personal information to provide the requested content.
  </div>
</div>


              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="btn-primary w-full h-12 text-lg font-semibold"
              >
                Submit
              </Button>
            </Form>
          </div>

          {/* 3D Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="relative z-10 bg-gradient-to-br from-dark-700 to-dark-600 rounded-2xl p-12 border border-white/10">
                <div className="space-y-8">
                  {/* 3D Isometric Elements */}
                  <div className="flex justify-center">
                    <video
                      src="https://devop360.vercel.app/VideoMadam.webm"
                      autoPlay
                      loop
                      muted
                      className="w-70 h-70 rounded-xl"
                    ></video>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Ready to Get Started?
                    </h3>
                    <p className="text-gray-300">
                      Experience the future of energy operations with Devop360
                      innovative platform.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="glass-card rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-400">
                        50+
                      </div>
                      <div className="text-xs text-gray-400">Experts</div>
                    </div>
                    <div className="glass-card rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-400">
                        24/7
                      </div>
                      <div className="text-xs text-gray-400">Support</div>
                    </div>
                    <div className="glass-card rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary-400">
                        100%
                      </div>
                      <div className="text-xs text-gray-400">Quality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
