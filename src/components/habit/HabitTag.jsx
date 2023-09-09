const HabitTag = ({ text, customStyle }) => {
  return (
    <span className={`habitTag ${customStyle}`}>{text}</span>
  );
}

export default HabitTag;