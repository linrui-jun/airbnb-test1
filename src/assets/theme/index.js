const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A"
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222"
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 300ms ease;
      &:hover {
        box-shadow: 0 3px 5px rgba(0, 0, 0, .18);
      }
    `  
  }
}

export default theme
