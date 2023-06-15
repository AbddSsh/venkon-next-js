"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { HiOutlineMail } from "react-icons/hi";

const EmailModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div className="email">
      <button className="email-btn" onClick={handleModal}>
        Email <HiOutlineMail style={{ fontSize: "24px", marginLeft: "5px" }} />
      </button>
      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton style={{ border: "none" }}>
          <Modal.Title>Связаться с нами</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <label className="form-title">
                Имя:
                <input
                  placeholder="Gomer"
                  className="form-input"
                  {...register("firstName", {
                    required: true,
                    minLength: 3,
                  })}
                />
              </label>
              <label className="form-title">
                Фамилия:
                <input
                  placeholder="Simpson"
                  className="form-input"
                  {...register("lastName", {
                    required: true,
                    minLength: 3,
                  })}
                />
              </label>
              <label className="form-title">
                Email:
                <input
                  placeholder="name@domain.com"
                  className="form-input"
                  {...register("email", {
                    required: true,
                    minLength: 3,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
              </label>
              <label className="form-title">
                Phone number:
                <input
                  defaultValue="+998"
                  type="tel"
                  maxLength="13"
                  className="form-input number-input"
                  {...register("phoneNumber", {
                    required: true,
                    minLength: 3,
                    maxLength: 13,
                    pattern: /^\+998\d{9}$/,
                  })}
                />
              </label>
              <div style={{ marginTop: "20px" }}>
                <label className="form-title">
                  Сообщение
                  <textarea
                    {...register("message", {
                      required: true,
                      minLength: 5,
                    })}
                    className="form-input"
                    style={{ width: "150%", borderRadius: "5px" }}
                  ></textarea>
                </label>
              </div>
              <input
                type="submit"
                disabled={!isValid}
                className="send-message-btn"
                style={{
                  width: "70%",
                  fontWeight: "normal",
                  border: "none",
                  padding: "7px",
                  background: !isValid && "rgba(70,59,144, 0.4)",
                }}
                onClick={handleModal}
                value={`Отправить сообщение`}
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EmailModal;
