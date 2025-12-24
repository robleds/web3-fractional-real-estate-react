const colors = ["#020627", "#3772A6", "#F2CB57", "#F2BC57"];

export const getColor = () => {
  const index = Math.floor(Math.random() * 4);
  return colors[index];
};
