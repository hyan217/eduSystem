import { Form, Input, Button, Radio } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function Home() {
  return (
      <div style={{display:'flex',justifyContent: 'center', alignItems:'center', flexDirection:'column'}}>
        <h1 style={{width:'30%', textAlign:'center'}}>Course Management Assistant</h1>
    <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
          role:'Student',
        }}


        onFinish={() => {}}
      
        
        style={{width:'30%'}}
        >
          <Form.Item name='position' >
            <Radio.Group>
              <Radio.Button value="Student">Student</Radio.Button>
              <Radio.Button value="Teacher">Teacher</Radio.Button>
              <Radio.Button value="Manager">Manager</Radio.Button>
            </Radio.Group>
          </Form.Item>  
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
