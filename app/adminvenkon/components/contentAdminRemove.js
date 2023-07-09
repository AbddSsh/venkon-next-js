"use client";

import { deleteBlock } from "@/services/admin";
import { useState } from "react";

export default function ContentAdminRemove({ blockId }) {
  const [isDelete, setIsDelete] = useState(false);
  const handleDelete = () => {
    deleteBlock(blockId);
  };
  return (
    <div style={{ color: "red", fontWeight: "500", margin: "10px 0px" }}>
      {isDelete ? (
        <div>
          <div>
            Вы уверены что хотите удалить блок? Это действие необратимое.
          </div>
          <div>
            <button
              style={{
                color: "red",
                fontWeight: "500",
                padding: "1%",
                margin: "5px 0px",
              }}
              onClick={handleDelete}
            >
              Да, удалить блок безвозвратно
            </button>
          </div>
          <div>
            <button onClick={() => setIsDelete(false)}>Нет, назад</button>
          </div>
        </div>
      ) : (
        <button style={{ color: "red" }} onClick={() => setIsDelete(true)}>
          Удалить этот блок
        </button>
      )}
    </div>
  );
}
