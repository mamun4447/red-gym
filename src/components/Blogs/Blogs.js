import React from "react";

const Blogs = () => {
  return (
    <div className="m-10">
      <h1 className="text-3xl ml-20 my-5">Question Ans:-</h1>
      {/* Question1 Start */}
      <div className="container mx-auto my-2 rounded  collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-lg bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          How does ReactJs work?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p className="text-black">
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes.
          </p>
        </div>
      </div>
      {/* Question1 End */}
      {/* Question2 Start */}
      <div className="container mx-auto my-2 rounded  collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-lg bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Difference between props & state?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p className="text-black">
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components.
          </p>
        </div>
      </div>
      {/* Question1 End */}
      {/* Question3 Start */}
      <div className="container mx-auto my-2 rounded  collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-lg bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What does useEffect works?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p className="text-black">
            By using this Hook, you tell React that your component needs to do
            something after render. React will remember the function you passed
            (we'll refer to it as our “effect”), and call it later after
            performing the DOM updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
