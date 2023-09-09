import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const textContents = [
  {
    text: "「Habit Piggy真的是一個改變生活的神奇工具！我成功建立了每天閱讀的習慣，推薦給所有想要養成好習慣的人！」",
    author: "伊恩的讀書筆記",
    bgColor: "bg-light",
  },
  {
    text: "「Best habit app ever! It's like a personal coach.」",
    author: "Wendy C.",
    bgColor: "bg-tertiary",
  },
  {
    text: "「習慣養成變得有趣又挑戰，應用程式的設計和功能都很出色。推薦給所有想改變生活的人。」",
    author: "sw1209",
    bgColor: "bg-fourth",
  },
  {
    text: "「使用 Habit Piggy 是我迄今為止最好的決定之一！\n它讓我能夠每天運動，而且當我缺席時，小額罰款提醒我保持自律。這真的幫助我養成了一個健康的生活習慣。非常推薦給大家！」",
    author: "小八",
    bgColor: "bg-fifth",
  },
  {
    text: "I was skeptical at first, but Habit Piggy proved me wrong. It's addictive! The penalty for missed goals is a genius idea that keeps me focused. I feel more productive and healthier already.",
    author: "Brian Johnson",
    bgColor: "bg-fifth",
  },
  {
    text: "「Habit Piggy 讓我的生活更有秩序。我從來沒有這麼容易養成每天早起的習慣！它的追蹤和提醒功能非常實用，而且還能避免我錯過任何目標。強烈推薦給大家！」",
    author: "好想畢業的研究生",
    bgColor: "bg-fourth",
  },
  {
    text: "Habit Piggy transformed my daily routines! With its reminders and rewards, I've developed healthy habits effortlessly. It's a fantastic motivator, and the penalty feature keeps me accountable. Highly recommended!",
    author: "Edward XX",
    bgColor: "bg-tertiary",
  },
  {
    text: "「Habit Piggy太棒了！靈活設定目標，提醒功能讓我不再忘記，罰款機制提醒我保持自律，這個工具真的有效。」",
    author: "中壢金城武",
    bgColor: "bg-light",
  },
];

const MyMasonry = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 768: 2, 992: 4 }}>
      <Masonry gutter="24px">
        {textContents.map((item, i) => (
          <div
            key={`${i}${item.author}`}
            className={`grid-item p-5 p-md-7 fs-8 fs-md-5 mb-md-7 rounded-2 ${item.bgColor}`}
          >
            <p className="mb-7 mb-md-12">{item.text}</p>
            <p className="text-end mb-0">by {item.author}</p>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MyMasonry;
