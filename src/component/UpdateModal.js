import React, { useContext, useState,memo } from "react";
import { Modal, Form, Input } from 'antd';
import { UserData } from "../context/GlobalContext";

function UpdateModal({ setIsModalOpen, isModalOpen, user }) {
    const { id, name, email, phone, website } = user
    let { setUsers, users } = useContext(UserData)
    const [updatedUser, setUpdatedUser] = useState()

    // set the updated data in setUsers
    const handleOk = () => {
        setIsModalOpen(false);
        setUsers(updatedUser)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    // update the value 
    const handleChange = (e) => {
        const updatedData = users.map((item) => {
            if (item.id === id) {
                return { ...item, [e.target.name]: e.target.value }
            } else {
                return item;
            }
        })
        setUpdatedUser(updatedData)

    }

    const onFinish = () => {
        setUsers(updatedUser)
    }
    return (
        <>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className="modal-container">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input defaultValue={name} name="name" value={name} onChange={handleChange} />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input defaultValue={email} name="email" value={email} onChange={handleChange} />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input defaultValue={phone} name="phone" value={phone} onChange={handleChange} />
                    </Form.Item>
                    <Form.Item
                        label="Website"
                        name="website"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input defaultValue={website} name="website" value={website} onChange={handleChange} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
export default memo(UpdateModal);