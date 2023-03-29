function footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderTop: "0.5px solid #ddd",
        paddingTop: "20px",
        paddingBottom: "20px",
        textAlign: "center",
        paddingLeft: "40px",
        paddingRight: "40px",
        fontSize: "20px",
      }}
    >
      <div>
        <p>
          Crafted with ❤️ by
          <a
            href="https://github.com/JasonDsouza212"
            target="_blank"
            className="footer-link"
            rel="noreferrer"
          >
            {" "}
            <span style={{ color: "#0092CC" }}>Jason Dsouza</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default footer;
