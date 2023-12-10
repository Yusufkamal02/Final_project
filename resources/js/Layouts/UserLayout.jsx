import Sidebar from "@/Components/Sidebar";

export default function UserLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <section className="home-section">
        <div className="text">
          {children}
        </div>
      </section>
    </div>
  )
}