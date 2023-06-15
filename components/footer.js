const TheFooter = () => {
  return (
    <footer
      style={{
        background: "rgba(30,30,30,0.5)",
        color: "#fff",
      }}
    >
      <div
        className="my-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <div>© 2023 Venkon Communications. Все права защищены.</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            textAlign: "right",
          }}
        >
          <div>PR@Venkon.uz</div>
          <a
            href="tel:+998907997979"
            style={{ color: "#fff", textDecoration: "none", cursor: "pointer" }}
          >
            +998 90 799-79-79
          </a>
          <div>Тошкент шахри, Юнусобод тумани, Боғишамол-19</div>
        </div>
      </div>
    </footer>
  );
};

export { TheFooter };
