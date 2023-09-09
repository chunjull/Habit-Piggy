import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import HabitCard from "../habit/HabitCard";

const HabitMasonry = ({ habitList, disable }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 768: 1, 992: 2 }}>
      <Masonry gutter="24px">
        {habitList.map((habit, index) => (
          <HabitCard habit={habit} disable={disable} key={`${index}${habit.習慣標題}`} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default HabitMasonry;