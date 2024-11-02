import CountdownTimer from './components/CountdownTimer';

export default function Home() {
  const targetDate = '2024-12-31T00:00:00'; // Yahan aap apna target date set karein

  return (
    <div>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}

