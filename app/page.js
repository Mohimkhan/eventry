import Header from "@/app/components/landing/Header";
import EventList from "@/app/components/landing/EventList";

export default function Home() {
  return (
    <section className="container">
      <Header />
      <EventList />
    </section>
  );
}
