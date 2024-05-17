const ColorColumn = ({hexCode, title}) => {
    // const {hexCode, title} = props;

    return <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
        }}
    >
          <span
              style={{
                  background: hexCode,
                  color: "white",
                  padding: ".5rem",
                  borderRadius: ".2rem"
              }}
          >
            {title}
          </span>
    </div>
}

export default ColorColumn;