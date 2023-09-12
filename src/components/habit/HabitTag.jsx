const HabitTag = ({ text }) => {

  const getHabitTagClass = (habitTag) => {
    switch (habitTag) {
      case "每日":
        return "dailyHabit";
      case "每週":
        return "weeklyHabit";
      case "養成":
        return "addHabit";
      case "戒除":
        return "minusHabit";
      default:
        return "";
    }
  };

  return (
    <span className={`habitTag ${getHabitTagClass(text)}`}>{text}</span>
  );
}

export default HabitTag;