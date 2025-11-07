import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, Typography, message } from 'antd';
import { MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

const defaultValues = {
    fullName: '',
    email: '',
    password: '',
};

const Signup = () => {

    const { handleSubmit, control, formState: { errors, isSubmitting } } = useForm({ defaultValues });

    const onSubmit = async (data) => {
        console.log('Signup Data:', data);

        try {
            message.success('Registration successful! Redirecting to login...');

        } catch (error) {
            message.error('Registration failed. Please try again.');
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: '#f0f2f5' }}>
            <div style={{ maxWidth: '400px', width: '100%', padding: '40px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>

                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <Title level={2} style={{ margin: 0, color: '#1890ff' }}>Clinic Signup</Title>
                    <Text type="secondary">Create your patient account to book appointments.</Text>
                </div>

                {/* Form Section */}
                <Form onFinish={handleSubmit(onSubmit)} layout="vertical">

                    <Controller
                        name="fullName"
                        control={control}
                        rules={{ required: 'Full Name is required' }}
                        render={({ field }) => (
                            <Form.Item
                                label="Full Name"
                                validateStatus={errors.fullName ? 'error' : ''}
                                help={errors.fullName?.message}
                            >
                                <Input
                                    {...field}
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="Enter your full name"
                                    size="large"
                                />
                            </Form.Item>
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address'
                            }
                        }}
                        render={({ field }) => (
                            <Form.Item
                                label="Email"
                                validateStatus={errors.email ? 'error' : ''}
                                help={errors.email?.message}
                            >
                                <Input
                                    {...field}
                                    prefix={<MailOutlined className="site-form-item-icon" />}
                                    placeholder="Enter your email"
                                    size="large"
                                />
                            </Form.Item>
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters'
                            }
                        }}
                        render={({ field }) => (
                            <Form.Item
                                label="Password"
                                validateStatus={errors.password ? 'error' : ''}
                                help={errors.password?.message}
                            >
                                <Input.Password
                                    {...field}
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder="Enter a strong password"
                                    size="large"
                                />
                            </Form.Item>
                        )}
                    />

                    <Form.Item style={{ marginTop: '30px' }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isSubmitting}
                            block
                            size="large"
                        >
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Text>
                        Already have an account?
                        <Link href="/login">Log In</Link>
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default Signup;