import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

function page() {
  return (
    <main>
      <section className="section-my">
        <h1 style={{
            textAlign: "center",
            backgroundColor: "var(--black)",
            color: "var(--white)",
            padding: "1rem"
        }}>style blog</h1>
        <h2>recent post</h2>
        <div className="recent-post-main-wrapper">
          <CardList />
          <Menu />
        </div>
      </section>
    </main>
  );
}

export default page;
