import React from "react";
import {Button, Form, InputNumber} from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import './HomeStyle.css'
import {useHistory } from 'react-router-dom'

const Home = () =>{
    const history = useHistory();
    const handleSubmit = (values: any) =>{
        history.push({pathname:'/form', state:values})
    };

    return(
        <div className="Home">
            <Form onSubmit={handleSubmit}
            onFinish={handleSubmit}
            initialValues={{nextTo: false}}>
                <Form.Item id ="seatsAmountInput"
                    name="amount"
                    label = "Liczba miejsc: "
                    rules={[{ required: true,
                            message: 'Proszę wpisać liczbę miejsc!' }]}
                >
                    <InputNumber min={1} />
                </Form.Item>

                <Form.Item name="nextTo" valuePropName="checked">
                    <Checkbox>Czy miejsca mają być obok siebie?</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="submit" id="buttonSeatChoose" htmlType="submit">Wybierz miejsca</Button>
                </Form.Item>
            </Form>
        </div>
    )
    }
export default Home;