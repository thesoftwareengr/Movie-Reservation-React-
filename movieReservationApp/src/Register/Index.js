import React from "react";
import { Form, Button } from 'antd';

function Register() {
    return (
        <div>
            Register
            <Form>
                <Form.List>
                    <Form.Item label="Name" name="name">
                        <input type="text" />
                    </Form.Item>
                </Form.List>
                <Button type="primary">Submit</Button>
            </Form>
        </div>
    );
}

export default Register;
