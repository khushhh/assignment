import React, { useState, useContext, memo } from "react";
import { Card,Col } from 'antd';
import { EditOutlined, DeleteFilled, HeartOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, HeartFilled } from '@ant-design/icons';
import UpdateModal from "./UpdateModal";
import { UserData } from "../context/GlobalContext";


function CardScreen(props) {
  let { setUsers} = useContext(UserData)
  const { id, name, email, username, phone, website } = props.user;
  const [liked, setLiked] = useState(false) 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const url = `https://avatars.dicebear.com/v2/avataaars/{${username}}.svg?options[mood][]=happy`
  const onLiked = () => {
    setLiked(!liked)
  }

// liked feature here
  const likedHere = () => {
    if (liked) {
      return <HeartFilled style={{ color: "#ff0000", fontSize: 20 }} />
    } else {
      return <HeartOutlined style={{ color: "#ff0000", fontSize: 20 }} />
    }
}

  // on open modal 
  const onModal = ()=>{
    if(isModalOpen){
      return <UpdateModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} user={props.user} />
    }else{
      return null;
    }
  }

  const onUpdate = () => {
    setIsModalOpen(true);
  };

  // delete data from list
  const onDelete = (id) => {
    setUsers((current) => current.filter(item => item.id !== id))
  }


  return (
    <>
     {onModal()}

      <Col key={id} xs={24} sm={24} md={8} lg={8} xl={6}>
        <Card
          className="footer" style={{ margin: 15, borderRadius: 2,color:"#000000a6" }}
          cover={
            <div style={{ backgroundColor: "#f5f5f5", display: "flex", justifyContent: "center" }}>
              <img
                alt="example"
                src={url}
                style={{ height: 200, width: 200 }}
              />
            </div>
          }
          actions={[
            <span onClick={onLiked}>
              {likedHere()}
            </span>,
            <EditOutlined key="edit" style={{ fontSize: 18 }} onClick={onUpdate} />,
            <DeleteFilled key="delete" style={{ fontSize: 18 }} onClick={() => onDelete(id)} />,
          ]}
        >
          <h3>{name}</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <MailOutlined key="mail" style={{ fontSize: 18 }} />
            <p style={{ marginLeft: 10, marginTop: -2 }}>{email}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PhoneOutlined key="phone" style={{ fontSize: 18 }} />
            <p style={{ marginLeft: 10, marginTop: -2 }}>{phone}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <GlobalOutlined key="Global" style={{ fontSize: 18 }} />
            <p style={{ marginLeft: 10, marginTop: -2 }}>{`http://${website}`}</p>
          </div>

        </Card>
      </Col>

    </>
  )
}
export default memo(CardScreen);