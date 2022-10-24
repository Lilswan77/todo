import Content from "./Components/Content";

export const App = () => {
  return (
    <div>
      <div className="Header">
        <p>
          _Roadmaps are useful for visualizing all of the moving parts in
          creating a design.
        </p>
      </div>
        <Content />
      <div className="info-text">
        Consider this Roadmap to be an operating system for your list. It is
        intended to deliver extreme transparency to your organization. You can
        identify bottlenecks at a glance and fix them before they become an
        issue.
      </div> 
    </div>
  );
};

export default App;

